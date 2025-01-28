import { BentoCard, BentoGrid } from "~/components/ui/bento-grid";
import type { NotUndefined, SiteConfig } from "~/lib/config";
import { Section } from "./section";

export function Solution({
  solution,
}: { solution: NotUndefined<SiteConfig["solution"]> }) {
  return (
    <Section title={solution.title} subtitle={solution.subtitle}>
      <BentoGrid>
        {solution.items.map((feature) => (
          <BentoCard
            key={feature.title}
            Icon={feature.icon}
            name={feature.title}
            description={feature.description}
            cta={feature.cta}
            background={feature.background}
            className={feature.className}
          />
        ))}
      </BentoGrid>
    </Section>
  );
}
