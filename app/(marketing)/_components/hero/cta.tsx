import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { siteConfig } from "~/lib/config";
import { cn } from "~/lib/utils";
import { ease } from "./constant";

export function HeroCTA() {
  return (
    <>
      <motion.div
        className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href={siteConfig.hero.cta.href}
          className={cn(
            buttonVariants({ variant: siteConfig.hero.cta.buttonVariant }),
            "flex w-full gap-2 text-background sm:w-auto",
          )}
        >
          <siteConfig.icon className="size-6" />
          {siteConfig.hero.cta.label}
        </Link>
      </motion.div>
      {siteConfig.hero.cta.subtitle && (
        <motion.p
          className="mt-5 text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {siteConfig.hero.cta.subtitle}
        </motion.p>
      )}
    </>
  );
}
