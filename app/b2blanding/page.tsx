import { Icons } from "components/icons";
import {
  Bell,
  BookA,
  Building2,
  ClipboardX,
  DollarSign,
  HandCoins,
  Scan,
  Shield,
  ShieldCheck,
  User,
} from "lucide-react";
import { Brand } from "~/app/(marketing)/_components/benefits/brand";
import { Growth } from "~/app/(marketing)/_components/benefits/growth";
import { Ownership } from "~/app/(marketing)/_components/benefits/ownership";
import { EmailPreview } from "~/app/(marketing)/_components/how-it-works/email-preview";
import { ProcessDemo } from "~/app/(marketing)/_components/how-it-works/process-demo";
import { FitEveryBusiness } from "~/app/(marketing)/_components/solution/fit-every-business";
import { ROUTE_BLOG, ROUTE_REGISTRATION, ROUTE_TOS } from "../routes";
import type { SiteConfig } from "./type";

export const BLUR_FADE_DELAY = 0.15;
const CompanyName = "Ink and Scribe";
const SupportEmail = "support@inkandscribe.com";
const ContactEmail = "contact@inkandscribe.com";

export const siteConfig: SiteConfig = {
  name: CompanyName,
  description:
    "We make trademark registration simple and affordable with a straightforward $350 per class fee and an easy three-step process. Our service helps protect your brand identity from copycats while enabling growth opportunities and building customer trust through official trademark registration.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:6969",
  icon: Icons.logo,
  keywords: ["Trademark", "Branding", "Patent", "IP"],
  links: {
    email: SupportEmail,
    twitter: "https://twitter.com/inkandscribe",
  },
  // announcement: {
  //   href: ROUTE_BLOG,
  //   title: "Introducing our new blog! Read the latest updates and insights.",
  // },
  header: [
    // {
    //   variant: "button",
    //   buttonVariant: "navigation",
    //   href: ROUTE_BLOG,
    //   label: "Blog",
    // },
    {
      variant: "button",
      buttonVariant: "default",
      href: ROUTE_REGISTRATION,
      label: "Protect Your Brand",
    },
  ],
  hero: {
    title: ["It's Your Brand.", "Make Sure It's No One Else's."],
    description:
      "We make trademarks cheap and easy. One form is all it takes to start securing your brand. Don't let others profit from your hard work.",
    cta: {
      href: ROUTE_REGISTRATION,
      label: "Protect Your Brand Today",
      buttonVariant: "default",
      subtitle: "Or your money back.",
    },
    showcase: {
      videoSrc: undefined,
      thumbnailSrc: "/warrior-2.png",
      thumbnailAlt: "Ink and Scribe warrior",
    },
  },
  socialProof: {
    title: "With a team you can trust",
    icons: [
      {
        href: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOj-PJ7_F-RpOkFwiIxrvgue_UDHs_lJbyQ&s",
        name: "Oxford",
      },
      {
        href: "https://media.licdn.com/dms/image/v2/C560BAQG-6MUyGaEjKg/company-logo_100_100/company-logo_100_100/0/1662956008666/drew__napier_llc_logo?e=1745452800&v=beta&t=S1UKpdga7cH3Ssna0frfIyVtc5SzObME9ZZb5MqJAjg",
        name: "Drew and Napier",
      },
      {
        href: "https://i0.wp.com/thecustodian.ca/wp-content/uploads/2022/02/waterloo.png?fit=600%2C600&ssl=1",
        name: "Waterloo",
      },
      {
        href: "https://media.licdn.com/dms/image/v2/C4E0BAQFDslWTgw1Q4g/company-logo_100_100/company-logo_100_100/0/1631325721627?e=1745452800&v=beta&t=1gTqTZW0OJYP-LeGxoBxPL3mhZOYw6MCfRrkmYb_I80",
        name: "Baker",
      },
      {
        href: "https://upload.wikimedia.org/wikipedia/en/b/b9/NUS_coat_of_arms.svg",
        name: "NUS",
      },
      {
        href: "https://media.licdn.com/dms/image/v2/D4E0BAQGnGELqq6HXHw/company-logo_100_100/company-logo_100_100/0/1720517867022/pwc_logo?e=1745452800&v=beta&t=Zbrob75hisyL8NOgTetZresqF-wCwsdlo410J2iWRXQ",
        name: "PWC",
      },
    ],
  },
  problems: {
    title: "Without a Trademark",
    subtitle: "Your Brand and Your Customers Are Up for Grabs.",
    items: [
      {
        title: "Copycats",
        description:
          "Copycats can cheat your customers and damage your credibility.",
        icon: ClipboardX,
      },
      {
        title: "Expensive Disputes",
        description:
          "Expensive disputes to reclaim your brand will cost unnecessary time, money, and effort.",
        icon: DollarSign,
      },
      {
        title: "No Protection",
        description:
          "An unprotected brand cannot compete or expand confidently.",
        icon: Shield,
      },
    ],
  },
  benefits: {
    title: "Trademarks",
    subtitle: "A Smart Investment for Massive Opportunities.",
    items: [
      {
        title: "Gain Full Ownership",
        description:
          "A trademark gives you the sole right to your name, logo, and identity.",
        wrapperClassName:
          "xl:row-span-1 hover:bg-primary/10 transition-all duration-500 ease-out",
        content: <Ownership />,
      },
      {
        title: "Enable Growth and Expansion",
        description:
          "A trademark lets you enter new places and form safe partnerships.",
        wrapperClassName:
          "md:row-span-2 xl:col-span-3 xl:order-2 xl:row-span-1 hover:bg-primary/10 transition-all duration-500 ease-out",
        content: <Growth />,
      },
      {
        title: "Build Trust and Recognition",
        description:
          "A trademark shows people they get the same great quality every time.",
        wrapperClassName:
          "xl:order-1 xl:col-span-2 hover:bg-primary/10 transition-all duration-500 ease-out",
        content: <Brand />,
      },
    ],
  },
  solution: {
    title: CompanyName,
    subtitle: "We Make Trademarking Simple",
    items: [
      {
        icon: HandCoins,
        title: "Easy, Upfront Pricing",
        description: "$399 per class per trademark. That's it.",
        className: "col-span-3 lg:col-span-1",
      },
      {
        icon: Scan,
        title: "Real-Time Updates",
        description:
          "We keep you posted every step of the way on your filing status.",
        className: "col-span-3 lg:col-span-2",
        background: (
          <ProcessDemo className="absolute top-4 right-2 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
      },
      {
        icon: Building2,
        title: "Fits Every Business",
        description:
          "Whether you're a startup or an enterprise, we've got your back.",
        className: "col-span-3 lg:col-span-2",
        background: (
          <FitEveryBusiness className="absolute top-4 right-2 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
      },
      {
        icon: User,
        title: "Built by Business Owners",
        description: "We know how to protect what's important - your brand.",
        className: "col-span-3 lg:col-span-1",
      },
    ],
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "Trademark in in Three Simple Steps",
    items: [
      {
        title: "Fill Out a Form",
        description: "Share a few details about your brand.",
        icon: <BookA className="size-6" />,
        image: "/form.png",
      },
      {
        title: "Get Notified",
        description: "We'll tell you if your brand can be trademarked.",
        icon: <Bell className="size-6" />,
        content: <EmailPreview />,
      },
      {
        title: "We handle the process",
        description:
          "Once approved and paid, we handle the rest of the process to secure your brand.",
        icon: <ShieldCheck className="size-6" />,
        content: <ProcessDemo />,
      },
    ],
  },
  // testimonials: {
  //   title: "Testimonials",
  //   subtitle: "What our customers say",
  //   items: [
  //     {
  //       name: "John Doe",
  //       role: "CEO",
  //       quote: "This is the best service I've ever used.",
  //       company: "Acme Corp",
  //     },
  //   ],
  // },
  pricing: {
    title: "Pricing",
    subtitle: "Easy, Upfront Pricing",
    description: "You pay once, we handle the rest.",
    variant: "one-time",
    items: [
      {
        name: "Trademark Filing",
        href: ROUTE_REGISTRATION,
        price: "$399",
        unit: "class",
        description: "The best way to secure your brand",
        features: [
          "Trademark eligibility search",
          "Trademark filing",
          "Realtime status updates",
        ],
        buttonText: "Protect Your Brand",
      },
    ],
  },
  cta: {
    title: "A trademark isn't just about safety.",
    subtitle: "Help your brand avoid big problems later.",
    buttonText: "Secure Your Brand Today",
    href: "/registration",
  },
  faq: {
    title: "FAQ",
    subtitle: "Frequently asked questions",
    items: [
      {
        question: "How much does trademark registration cost?",
        answer: (
          <span>
            Our trademark registration service costs $350 per class per
            trademark. This is a transparent, all-inclusive fee that covers the
            entire registration process. Additional official fees from
            intellectual property offices may apply depending on your
            jurisdiction.
          </span>
        ),
      },
      {
        question: "How long does the trademark registration process take?",
        answer: (
          <span>
            The trademark registration process typically takes 6-12 months from
            filing to completion. However, timelines can vary depending on the
            jurisdiction and whether any objections are raised during the
            examination process. We'll keep you updated on your application
            status throughout the journey.
          </span>
        ),
      },
      {
        question:
          "Can I register a trademark for both my company name and logo?",
        answer: (
          <span>
            Yes, you can register both your company name as a word mark and your
            logo as a trademark. Many businesses choose to protect both elements
            separately for comprehensive brand protection. You can select
            between word mark and logo mark registration during the application
            process.
          </span>
        ),
      },
      {
        question: "Which countries can I register my trademark in?",
        answer: (
          <span>
            We currently support trademark registration in Singapore, Malaysia,
            Indonesia, Thailand, Vietnam, Philippines, Brunei, Cambodia, Laos,
            and Myanmar. Each country has its own specific requirements and
            processes, which our system will guide you through.
          </span>
        ),
      },
      {
        question: "What happens if someone is already using my trademark?",
        answer: (
          <span>
            If your trademark search reveals existing similar marks, we'll
            notify you during the application process. It's important to conduct
            proper searches before filing, as existing similar marks could lead
            to objections or rejection of your application.
          </span>
        ),
      },
      {
        question: "Do I need a company to register a trademark?",
        answer: (
          <span>
            No, trademarks can be registered by both companies and individuals.
            Our system supports both types of applications, and you can specify
            your status during the registration process. We'll adjust the
            required information accordingly.
          </span>
        ),
      },
      {
        question:
          "What information do I need to provide for trademark registration?",
        answer: (
          <span>
            You'll need to provide basic business information, contact details,
            and trademark specifics. For companies, this includes registration
            numbers and company details. For individuals, we'll need personal
            identification information. The exact requirements are outlined in
            our step-by-step application process.
          </span>
        ),
      },
      {
        question: "Are there any recurring fees to maintain my trademark?",
        answer: (
          <span>
            Yes, trademarks need to be renewed periodically (usually every 10
            years) to maintain protection. Renewal fees vary by jurisdiction.
            We'll notify you well in advance of any renewal deadlines to ensure
            continuous protection of your intellectual property.
          </span>
        ),
      },
      {
        question: "What happens after I submit my trademark application?",
        answer: (
          <span>
            After submission, you'll receive a unique registration ID for
            tracking. Our team will review your application, and we'll
            communicate with you via the email provided. You can track your
            application status using your registration ID.
          </span>
        ),
      },
      {
        question:
          "Can I make changes to my trademark application after submission?",
        answer: (
          <span>
            Limited changes may be possible during the early stages of the
            application process. However, significant modifications might
            require a new application. It's important to ensure all information
            is accurate before submission to avoid delays or additional costs.
          </span>
        ),
      },
    ],
  },
  // blog: {
  //   title: "Articles",
  //   description: `Latest news and updates from ${CompanyName}`,
  // },
  footer: {
    termsOfUseAndPrivacyPolicy: ROUTE_TOS,
    items: [
      {
        title: "Product",
        links: [
          {
            href: "#how-it-works",
            text: `Why ${CompanyName}?`,
            icon: null,
          },
          { href: "#how-it-works", text: "How It Works", icon: null },
          { href: "#pricing", text: "Pricing", icon: null },
          { href: "#faq", text: "FAQ", icon: null },
        ],
      },
      // {
      //   title: "Company",
      //   links: [
      //     { href: "#", text: "About Us", icon: null },
      //     { href: "#", text: "Careers", icon: null },
      //     { href: "#", text: "Blog", icon: null },
      //     { href: "#", text: "Press", icon: null },
      //     { href: "#", text: "Partners", icon: null },
      //   ],
      // },
      {
        title: "Resources",
        links: [
          { href: ROUTE_BLOG, text: "Blog", icon: null },
          {
            href: `mailto:${ContactEmail}`,
            text: "Contact",
            icon: null,
          },
          { href: `mailto:${SupportEmail}`, text: "Support", icon: null },
        ],
      },
      // {
      //   title: "Social",
      //   links: [
      //     {
      //       href: "#",
      //       text: "Twitter",
      //       icon: <FaTwitter />,
      //     },
      //     {
      //       href: "#",
      //       text: "Instagram",
      //       icon: <RiInstagramFill />,
      //     },
      //     {
      //       href: "#",
      //       text: "Youtube",
      //       icon: <FaYoutube />,
      //     },
      //   ],
      // },
    ],
  },
};
