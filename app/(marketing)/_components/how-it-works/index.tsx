import Features from "~/app/(marketing)/_components/features-vertical";
import { siteConfig } from "~/lib/config";
import { Section } from "../section";

export function HowItWorks() {
  if (!siteConfig.howItWorks) return null;
  return (
    <Section
      title={siteConfig.howItWorks.title}
      subtitle={siteConfig.howItWorks.subtitle}
      description={siteConfig.howItWorks.description}
    >
      <Features data={siteConfig.howItWorks.items} />
    </Section>
  );
}
