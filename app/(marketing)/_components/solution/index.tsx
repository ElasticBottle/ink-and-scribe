import { BentoCard, BentoGrid } from "~/components/ui/bento-grid";
import { siteConfig } from "~/lib/config";
import { Section } from "../section";

export function Solution() {
  if (!siteConfig.solution) return null;
  return (
    <Section
      title={siteConfig.solution.title}
      subtitle={siteConfig.solution.subtitle}
    >
      <BentoGrid>
        {siteConfig.solution.items.map((feature) => (
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
