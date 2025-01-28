import TestimonialsCarousel from "~/app/(marketing)/_components/testimonials-carousel";
import { Spacer } from "~/components/ui/spacer";
import { type SiteConfig, siteConfig } from "~/lib/config";
import { Announcement } from "./_components/announcement";
import { Benefits } from "./_components/benefits";
import { Blog } from "./_components/blog";
import { Cta } from "./_components/cta";
import { FAQ } from "./_components/faq";
import { Hero } from "./_components/hero";
import { HowItWorks } from "./_components/how-it-works/how-it-works";
import { Logos } from "./_components/logos";
import { Pricing } from "./_components/pricing";
import { Problem } from "./_components/problem";

const LandingPageSections: Record<string, React.ReactNode> = {
  socialProof: siteConfig.socialProof && (
    <Logos logos={siteConfig.socialProof} />
  ),
  problems: siteConfig.problems && <Problem problems={siteConfig.problems} />,
  benefits: siteConfig.benefits && <Benefits benefits={siteConfig.benefits} />,
  // solution: siteConfig.solution && <Solution solution={siteConfig.solution} />,
  howItWorks: siteConfig.howItWorks && (
    <HowItWorks howItWorks={siteConfig.howItWorks} />
  ),
  testimonials: siteConfig.testimonials && <TestimonialsCarousel />,
  pricing: siteConfig.pricing && <Pricing />,
  faq: siteConfig.faq && (
    <FAQ faq={siteConfig.faq} supportEmail={siteConfig.links.email} />
  ),
  cta: siteConfig.cta && (
    <Cta cta={siteConfig.cta} icon={<siteConfig.icon className="size-6" />} />
  ),
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
      <Blog />
    </>
  );
}
