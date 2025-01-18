import { getBlogPosts } from "lib/blog";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { blogConfig } from "~/lib/config";
import { BlogCard } from "../blog/_components/blog-card";
import { Section } from "./section";

export async function Blog() {
  const allPosts = await getBlogPosts();

  const articles = await Promise.all(
    allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
  );

  return (
    <Section subtitle={blogConfig.title} description={blogConfig.description}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((data, idx) => (
          <BlogCard key={data.slug} data={data} priority={idx <= 1} />
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          className={buttonVariants({
            variant: "ghost",
          })}
          href={"/blog"}
        >
          View All
        </Link>
      </div>
    </Section>
  );
}
