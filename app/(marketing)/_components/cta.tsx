import { buttonVariants } from "components/ui/button";
import { cn } from "lib/utils";
import Link from "next/link";
import type { NotUndefined, SiteConfig } from "~/lib/config";
import { Section } from "./section";

export function Cta({
  cta,
  icon,
}: {
  cta: NotUndefined<SiteConfig["cta"]>;
  icon: React.ReactNode;
}) {
  return (
    <Section
      id="cta"
      title={cta.title}
      subtitle={cta.subtitle}
      className="bg-primary/10 py-16 xl:rounded-lg"
    >
      <div className="flex items-center justify-center pt-4">
        <Link
          href={cta.href}
          className={cn(
            buttonVariants({ variant: "default" }),
            "flex w-full gap-2 text-background sm:w-auto",
          )}
        >
          {icon}
          {cta.buttonText}
        </Link>
      </div>
    </Section>
  );
}
