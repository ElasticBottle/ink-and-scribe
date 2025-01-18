import type { Post } from "lib/blog";
import { formatDate } from "lib/utils";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({
  data,
  priority,
}: {
  data: Post;
  priority?: boolean;
}) {
  return (
    <Link href={`/blog/${data.slug}`} className="block">
      <div className="mb-4 rounded-lg border bg-background p-4 transition-shadow duration-200 hover:shadow-sm">
        {data.image && (
          <Image
            className="rounded-t-lg border object-cover"
            src={data.image}
            width={1200}
            height={630}
            alt={data.title}
            priority={priority ?? false}
          />
        )}
        <p className="mb-2">
          <time
            dateTime={data.publishedAt}
            className="text-muted-foreground text-sm"
          >
            {formatDate(data.publishedAt)}
          </time>
        </p>
        <h3 className="mb-2 font-semibold text-xl">{data.title}</h3>
        <p className="mb-4 text-foreground">{data.summary}</p>
      </div>
    </Link>
  );
}
