import { getPost } from "lib/blog";
import { siteConfig } from "lib/config";
import { formatDate } from "lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Cta } from "../../_components/cta";
import { BlogAuthor } from "../_components/blog-author";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  const post = await getPost(params.slug);
  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  if (!post) {
    notFound();
  }
  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        // biome-ignore lint/security/noDangerouslySetInnerHtml: This is okay since we control the content
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${siteConfig.url}${post.metadata.image}`
              : `${siteConfig.url}/blog/${post.slug}/opengraph-image`,
            url: `${siteConfig.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: siteConfig.name,
            },
          }),
        }}
      />
      <div className="mx-auto my-12 w-full max-w-[800px] space-y-4 px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="mb-8 h-64 w-full animate-pulse rounded-lg bg-gray-200" />
          }
        >
          {post.metadata.image && (
            <div className="mb-8">
              <Image
                width={1920}
                height={1080}
                src={post.metadata.image}
                alt={post.metadata.title}
                className="h-auto w-full rounded-lg border shadow-md"
              />
            </div>
          )}
        </Suspense>
        <div className="flex flex-col">
          <h1 className="title font-medium text-3xl tracking-tighter">
            {post.metadata.title}
          </h1>
        </div>
        <div className="flex items-center justify-between text-sm">
          <Suspense fallback={<p className="h-5" />}>
            <div className="flex items-center space-x-2">
              <time
                dateTime={post.metadata.publishedAt}
                className="text-gray-500 text-sm"
              >
                {formatDate(post.metadata.publishedAt)}
              </time>
            </div>
          </Suspense>
        </div>
        <div className="flex items-center space-x-2">
          <BlogAuthor
            twitterUsername={post.metadata.author}
            name={post.metadata.author}
            image="/author.png"
          />
        </div>
        <article
          className="prose dark:prose-invert mx-auto max-w-full"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: This is okay since we control the content
          dangerouslySetInnerHTML={{ __html: post.source }}
        />
      </div>
      <Cta />
    </section>
  );
}
