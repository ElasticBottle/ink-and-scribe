/* eslint-disable regexp/no-super-linear-backtracking */
import fs from "node:fs";
import path from "node:path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { siteConfig } from "./config";

export interface Post {
  title: string;
  publishedAt: string;
  author: string;
  summary?: string;
  slug?: string;
  image?: string;
}

export const TERMS_OF_USE_AND_PRIVACY_POLICY_NAME =
  "terms-of-use-and-privacy-policy";
const CONTENT_FOLDER = "content";

function getContentFolder() {
  return path.join(process.cwd(), CONTENT_FOLDER);
}
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match?.[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock?.trim().split("\n") ?? [];
  const metadata: Partial<Post> = {};

  for (const line of frontMatterLines) {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    const cleanedKey = key?.trim();
    if (cleanedKey) {
      metadata[cleanedKey as keyof Post] = value;
    }
  }

  return { data: metadata as Post, content };
}

function getMDXFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const files = entries.reduce<string[]>((allFiles, entry) => {
    // Ignore the terms of use and privacy policy page
    if (entry.name.startsWith(TERMS_OF_USE_AND_PRIVACY_POLICY_NAME)) {
      return allFiles;
    }

    // get everything else
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return allFiles.concat(getMDXFiles(fullPath));
    }
    if (entry.isFile() && path.extname(entry.name) === ".mdx") {
      return allFiles.concat(fullPath);
    }
    return allFiles;
  }, []);

  return files;
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const contentPath = getContentFolder();
  const mdxFiles = getMDXFiles(contentPath);
  const file = mdxFiles.find((file) => file.includes(slug));
  if (!file) {
    return null;
  }

  const realFileSlug = path.relative(contentPath, file);
  const filePath = path.join(CONTENT_FOLDER, realFileSlug);
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = parseFrontmatter(source);
  const content = await markdownToHTML(rawContent);
  const defaultImage = `${siteConfig.url}/og?title=${encodeURIComponent(
    metadata.title,
  )}`;
  return {
    source: content,
    metadata: {
      ...metadata,
      image: metadata.image || defaultImage,
    },
    slug: metadata.slug ?? slug,
  };
}

async function getAllPosts(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  const posts = await Promise.all(
    mdxFiles.map(async (filePath) => {
      const slug = path
        .relative(dir, filePath)
        .replace(/\.mdx$/, "")
        .replace(/\\/g, "/"); // Normalize path separators

      const result = await getPost(slug);
      if (!result) {
        return null;
      }
      const {
        source: contentHtml,
        metadata: postMetadata,
        slug: postSlug,
      } = result;

      return {
        ...postMetadata,
        slug: postSlug,
        source: contentHtml,
      };
    }),
  );
  return posts.filter((post) => post !== null);
}

export function getBlogPosts() {
  return getAllPosts(getContentFolder());
}
