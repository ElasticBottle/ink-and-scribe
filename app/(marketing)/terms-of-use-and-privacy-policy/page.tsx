import { notFound } from "next/navigation";
import { TERMS_OF_USE_AND_PRIVACY_POLICY_NAME, getPost } from "~/lib/blog";

export default async function TosPage() {
  const post = await getPost(TERMS_OF_USE_AND_PRIVACY_POLICY_NAME);
  if (!post) {
    notFound();
  }
  return (
    <div className="prose dark:prose-invert mx-auto py-12">
      <h1 className="title font-medium text-3xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <article
        // biome-ignore lint/security/noDangerouslySetInnerHtml: This is okay since we control the content
        dangerouslySetInnerHTML={{ __html: post.source }}
      />
    </div>
  );
}
