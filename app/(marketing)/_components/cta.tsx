import { buttonVariants } from "components/ui/button";
import { cn } from "lib/utils";
import Link from "next/link";
import { siteConfig } from "~/lib/config";
import { Section } from "./section";

export function Cta() {
  if (!siteConfig.cta) return null;

  return (
    <Section
      id="cta"
      title={siteConfig.cta.title}
      subtitle={siteConfig.cta.subtitle}
      className="bg-primary/10 py-16 xl:rounded-lg"
    >
      <div className="flex items-center justify-center pt-4">
        <Link
          href={siteConfig.cta.href}
          className={cn(
            buttonVariants({ variant: "default" }),
            "flex w-full gap-2 text-background sm:w-auto",
          )}
        >
          <siteConfig.icon className="size-6" />
          {siteConfig.cta.buttonText}
        </Link>
      </div>
    </Section>
  );
}
