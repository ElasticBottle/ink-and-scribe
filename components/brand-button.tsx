import Link from "next/link";
import { siteConfig } from "~/lib/config";

export function BrandButton() {
  return (
    <Link
      href="/"
      title={siteConfig.name}
      className="flex items-center space-x-2"
    >
      <siteConfig.icon className="size-[30px]" />
      <span className="font-bold text-xl">{siteConfig.name}</span>
    </Link>
  );
}
