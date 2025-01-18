import { formatDate } from "lib/utils";
import Image from "next/image";
import Link from "next/link";

export function BlogAuthor({
  name,
  image,
  twitterUsername,
  updatedAt,
  imageOnly,
}: {
  name: string;
  image: string;
  twitterUsername: string;
  updatedAt?: string;
  imageOnly?: boolean;
}) {
  if (imageOnly) {
    return (
      <Image
        src={image}
        alt={name}
        width={36}
        height={36}
        className="rounded-full transition-all group-hover:brightness-90"
      />
    );
  }

  if (updatedAt) {
    return (
      <div className="flex items-center space-x-3">
        <Image
          src={image}
          alt={name}
          width={36}
          height={36}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-gray-500 text-sm">
            Written by
            {name}
          </p>
          <time
            dateTime={updatedAt}
            className="font-light text-gray-400 text-sm"
          >
            Last updated {formatDate(updatedAt)}
          </time>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`https://twitter.com/${twitterUsername}`}
      className="group flex items-center space-x-3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={image}
        alt={name}
        width={40}
        height={40}
        className="rounded-full transition-all group-hover:brightness-90"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-gray-700">{name}</p>
        <p className="text-gray-500 text-sm">@{twitterUsername}</p>
      </div>
    </Link>
  );
}
