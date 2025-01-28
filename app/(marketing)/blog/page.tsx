import { constructMetadata } from "lib/utils";
import { getBlogPosts } from "~/lib/blog";
import { siteConfig } from "~/lib/config";
import { BlogCard } from "./_components/blog-card";

export const metadata = constructMetadata({
  title: siteConfig.blog?.title ?? siteConfig.name,
  description: siteConfig.blog?.description ?? siteConfig.description,
});

export default async function Blog() {
  const allPosts = await getBlogPosts();

  const articles = await Promise.all(
    allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
  );

  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <div className="py-16 text-center">
          <h1 className="font-bold text-3xl text-foreground sm:text-4xl">
            {siteConfig.blog?.title ?? siteConfig.name}
          </h1>
          {siteConfig.blog?.description && (
            <p className="mt-4 text-muted-foreground text-xl">
              {siteConfig.blog?.description}
            </p>
          )}
        </div>
      </div>
      <div className="min-h-[50vh] bg-gradient-to-b from-background to-muted">
        <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 px-2.5 py-10 lg:grid-cols-3 lg:px-20">
          {articles.map((data, idx) => (
            <BlogCard key={data.slug} data={data} priority={idx <= 1} />
          ))}
        </div>
      </div>
    </>
  );
}
