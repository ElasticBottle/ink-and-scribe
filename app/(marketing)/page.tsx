import Hero from "~/app/(marketing)/_components/hero";
import Footer from "~/components/sections/footer";
import Pricing from "~/components/sections/pricing";
import TestimonialsCarousel from "~/components/sections/testimonials-carousel";
import { Announcement } from "./_components/announcement";
import FAQ from "./_components/faq";
import HowItWorks from "./_components/how-it-works";
import { Logos } from "./_components/logos";
import { Header } from "./_components/navigation/header";
import Problem from "./_components/problem";
import Blog from "./blog/page";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="pt-24 md:pt-32 " />
      <Announcement />
      <Hero />
      <Logos />
      <Problem />
      <HowItWorks />
      <TestimonialsCarousel />
      <Pricing />
      <FAQ />
      <Blog />
      {/* <CTA /> */}
      <Footer />
    </main>
  );
}
