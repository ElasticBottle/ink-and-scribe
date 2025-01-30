import Navbar from "@/components/Navbar"; // Ensure this path is correct
import Head from "next/head";

export default function B2BLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>TM-AI | AI-Powered Trademark Filing</title>
        <meta name="description" content="AI-powered trademark advice & filing automation for law firms and agencies." />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 py-28 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="font-extrabold text-5xl text-gray-900 leading-tight">
            Instantly Draft TM Advice & Automate Filings
          </h1>
          <p className="mt-6 text-gray-700 text-xl leading-relaxed">
            Free your team from repetitive TM tasks—get AI-powered trademark advice & filing automation tailored for law firms and TM agencies.
          </p>
          <a href="#contact" className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-lg text-white shadow-md transition-all hover:bg-blue-700">
            Book a Demo
          </a>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-bold text-4xl text-gray-900">
            Built by IP Professionals, Powered by AI
          </h2>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Trained by IP Law Experts – anticipates unique TM challenges <br />
            Faster & More Efficient – No more manual drafting or form-filling <br />
            Increased Accuracy – AI analyzes every case instantly
          </p>
        </div>
      </section>

      {/* Instant First-Cut Advice Section */}
      <section id="first-cut-advice" className="py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-3xl text-gray-900">
              Instant First-Cut Advice
            </h3>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              AI instantly drafts a first-cut legal review with:
            </p>
            <ul className="mt-4 list-inside list-disc text-gray-700 text-lg">
              <li>Classes & marks to file</li>
              <li>IPOS search results</li>
              <li>Legal rationale & recommendations</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="flex h-80 w-80 items-center justify-center rounded-lg bg-gray-200 shadow-md">
              <span className="text-gray-500">Graphic Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Filing Section */}
      <section id="automated-filing" className="bg-gray-50 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="order-2 flex justify-center md:order-1">
            <div className="flex h-80 w-80 items-center justify-center rounded-lg bg-gray-200 shadow-md">
              <span className="text-gray-500">Graphic Placeholder</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="font-semibold text-3xl text-gray-900">
              Automated Filing
            </h3>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              AI pre-fills all required TM filing forms, reducing human errors & eliminating repetitive data entry.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="bg-blue-600 py-28 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-bold leading-snug">
            See How AI Can Transform Your TM Practice
          </h2>
          <a href="#contact" className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-lg text-blue-600 shadow-md transition-all hover:bg-gray-200">
            Book a Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-lg text-gray-400">
        &copy; {new Date().getFullYear()} TM-AI. All rights reserved.
      </footer>
    </div>
  );
}
