import Features from "~/app/(marketing)/_components/features-vertical";
import type { NotUndefined, SiteConfig } from "~/lib/config";
import { Section } from "../section";

export function HowItWorks({
  howItWorks,
}: {
  howItWorks: NotUndefined<SiteConfig["howItWorks"]>;
}) {
  return (
    <Section
      title={howItWorks.title}
      subtitle={howItWorks.subtitle}
      description={howItWorks.description}
    >
      <Features data={howItWorks.items} />
    </Section>
  );
}
