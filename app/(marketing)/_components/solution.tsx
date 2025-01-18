import Features from "~/app/(marketing)/_components/features-vertical";
import { siteConfig } from "~/lib/config";
import { Section } from "./section";

export function Solution() {
  return (
    <Section
      title={siteConfig.solution.title}
      subtitle={siteConfig.solution.subtitle}
      description={siteConfig.solution.description}
    >
      <Features data={siteConfig.solution.items} />
    </Section>
  );
}
