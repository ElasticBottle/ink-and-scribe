import TestimonialsCarousel from "~/app/(marketing)/_components/testimonials-carousel";
import { Spacer } from "~/components/ui/spacer";
import { type SiteConfig, siteConfig } from "~/lib/config";
import { Announcement } from "./_components/announcement";
import { Benefits } from "./_components/benefits";
import { Blog } from "./_components/blog";
import { Cta } from "./_components/cta";
import { FAQ } from "./_components/faq";
import { Hero } from "./_components/hero";
import { HowItWorks } from "./_components/how-it-works";
import { Logos } from "./_components/logos";
import { Pricing } from "./_components/pricing";
import { Problem } from "./_components/problem";
import { Solution } from "./_components/solution";

const LandingPageSections: Record<string, React.ReactNode> = {
  socialProof: <Logos />,
  problems: <Problem problems={siteConfig.problems} />,
  benefits: <Benefits benefits={siteConfig.benefits} />,
  solution: <Solution />,
  howItWorks: <HowItWorks />,
  testimonials: <TestimonialsCarousel />,
  pricing: <Pricing />,
  faq: <FAQ />,
  cta: <Cta />,
  blog: <Blog />,
};

export default function Home() {
  return (
    <>
      <Spacer className="h-24 md:h-32" />
      {siteConfig.announcement && (
        <Announcement announcement={siteConfig.announcement} />
      )}
      <Spacer className="h-8" />
      <Hero />
      <Spacer className="h-20 md:h-24" />

      {Object.keys(siteConfig).map((key) => {
        const section = LandingPageSections[key as keyof SiteConfig];
        if (!section) return null;
        return (
          <>
            {section}
            <Spacer className="h-20 md:h-24" key={`${key}-spacer`} />
          </>
        );
      })}
    </>
  );
}
