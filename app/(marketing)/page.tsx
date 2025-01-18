import Footer from "~/app/(marketing)/_components/footer";
import TestimonialsCarousel from "~/app/(marketing)/_components/testimonials-carousel";
import { Spacer } from "~/components/ui/spacer";
import { Announcement } from "./_components/announcement";
import { Blog } from "./_components/blog";
import { Cta } from "./_components/cta";
import FAQ from "./_components/faq";
import { Hero } from "./_components/hero";
import { Logos } from "./_components/logos";
import { Header } from "./_components/navigation/header";
import { Pricing } from "./_components/pricing";
import Problem from "./_components/problem";
import { Solution } from "./_components/solution";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacer className="h-24 md:h-32" />
      <Announcement />
      <Spacer className="h-8" />
      <Hero />
      <Spacer className="h-20 md:h-24" />
      <Logos />
      <Spacer className="h-20 md:h-24" />
      <Problem />
      <Spacer className="h-20 md:h-24" />
      <Solution />
      <Spacer className="h-20 md:h-24" />
      <TestimonialsCarousel />
      <Spacer className="h-20 md:h-24" />
      <Pricing />
      <Spacer className="h-20 md:h-24" />
      <FAQ />
      <Spacer className="h-20 md:h-24" />
      <Cta />
      <Spacer className="h-20 md:h-24" />
      <Blog />
      <Footer />
    </main>
  );
}
