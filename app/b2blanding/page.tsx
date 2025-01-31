import Head from "next/head";
import Navbar from "@/components/Navbar";

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
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Instantly Draft TM Advice & Automate Filings
          </h1>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            Free your team from repetitive TM tasks—get AI-powered trademark automation tailored for law firms and TM agencies.
          </p>
          <a href="#contact" className="mt-8 inline-block bg-blue-600 text-white font-medium text-lg py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Book a Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">AI-Powered TM Advisory</h3>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Instantly drafts legal TM advice, suggesting:
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-700 text-lg">
                <li>Classes & marks to file</li>
                <li>IPOS trademark search results</li>
                <li>Legal rationale & recommendations</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">Automated Trademark Filing</h3>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                AI pre-fills all required TM filing forms, reducing human errors & eliminating repetitive data entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="bg-blue-600 py-28 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold leading-snug">See How AI Can Transform Your TM Practice</h2>
          <a href="#contact" className="mt-8 inline-block bg-white text-blue-600 font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition-all">
            Book a Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400 text-lg">
        &copy; {new Date().getFullYear()} TM-AI. All rights reserved.
      </footer>
    </div>
  );
}
