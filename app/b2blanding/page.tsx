import Head from "next/head";

export default function B2BLanding() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>TM-AI | AI-Powered Trademark Filing</title>
        <meta name="description" content="AI-powered trademark advice & filing automation for law firms and agencies." />
      </Head>

      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-gray-800">TM-AI</a>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#features" className="text-gray-600 hover:text-gray-800">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-800">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Instantly Draft TM Advice & Automate Filings
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Free your team from repetitive TM tasks—get AI-powered trademark automation tailored for law firms and TM agencies.
          </p>
          <a href="#contact" className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
            Book a demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Key Features</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-900">AI-Powered TM Advisory</h3>
              <p className="mt-4 text-gray-700">
                Instantly drafts legal TM advice, suggesting:
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>Classes & marks to file</li>
                <li>IPOS trademark search results</li>
                <li>Legal rationale & recommendations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-900">Automated Trademark Filing</h3>
              <p className="mt-4 text-gray-700">
                AI pre-fills all required TM filing forms, reducing human errors & eliminating repetitive data entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="bg-blue-600 py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold">See How AI Can Transform Your TM Practice</h2>
          <a href="#contact" className="mt-6 inline-block bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-200">
            Book a Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} TM-AI. All rights reserved.
      </footer>
    </div>
  );
}

