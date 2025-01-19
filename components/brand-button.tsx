import Link from "next/link";
import { siteConfig } from "~/lib/config";
import { cn } from "~/lib/utils";

export function BrandButton({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      title={siteConfig.name}
      className={cn("flex items-center space-x-2", className)}
    >
      <siteConfig.icon className="size-[30px]" />
      <span className="font-bold text-xl">{siteConfig.name}</span>
    </Link>
  );
}
