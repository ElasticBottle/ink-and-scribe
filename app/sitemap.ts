import { getBlogPosts } from "lib/blog";
import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const protocol = "https";
  const headersList = await headers();
  const domain = headersList.get("host") as string;

  const allPosts = await getBlogPosts();

  return [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
    },
    ...allPosts.map((post) => ({
      url: `${protocol}://${domain}/blog/${post.slug}`,
      lastModified: new Date(),
    })),
  ];
}
