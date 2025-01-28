"use client";
import { motion } from "framer-motion";
import { cn } from "lib/utils";
import type { NotUndefined, SiteConfig } from "~/lib/config";
import { Section } from "../section";

export function Benefits({
  benefits,
}: {
  benefits: NotUndefined<SiteConfig["benefits"]>;
}) {
  return (
    <Section
      title={benefits.title}
      subtitle={benefits.subtitle}
      description={benefits.description}
      className="bg-muted py-16 xl:rounded-lg"
    >
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 md:grid-rows-2 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3 xl:grid-rows-2">
        {benefits.items.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={cn(
              "group relative items-start overflow-hidden rounded-2xl bg-neutral-50 p-6 dark:bg-neutral-800",
              feature.wrapperClassName,
            )}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="mb-2 font-semibold text-primary">
                {feature.title}
              </h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
            {feature.content}
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
