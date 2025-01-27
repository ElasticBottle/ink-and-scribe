import { Icons } from "components/icons";
import { Brain, Shield, Sparkles, Upload, Zap } from "lucide-react";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { ROUTE_BLOG, ROUTE_TOS } from "../routes";
import type { SiteConfig } from "./type";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig: SiteConfig = {
  name: "Ink and Scribe",
  description:
    "Trademark AI is an advanced AI-powered platform designed to automate and enhance trademark applications.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:6969",
  icon: Icons.logo,
  keywords: ["Trademark", "Branding", "Patent", "IP"],
  links: {
    email: "support@inkandscribe.com",
    twitter: "https://twitter.com/inkandscribe",
  },
  announcement: {
    href: ROUTE_BLOG,
    title: "Introducing our new blog! Read the latest updates and insights.",
  },
  header: [
    {
      variant: "dropdown",
      label: "Features",
      content: {
        main: {
          icon: <Icons.logo className="size-6" />,
          title: "AI-Powered Automation",
          description: "Streamline your workflow with intelligent automation.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Task Automation",
            description:
              "Automate repetitive tasks and save time. Automate repetitive tasks and save time. Automate repetitive tasks and save time.",
          },
          {
            href: "#",
            title: "Workflow Optimization",
            description: "Optimize your processes with AI-driven insights.",
          },
          {
            href: "#",
            title: "Intelligent Scheduling",
            description: "AI-powered scheduling for maximum efficiency.",
          },
        ],
      },
    },
    {
      variant: "dropdown",
      label: "Solutions",
      content: {
        items: [
          {
            title: "For Small Businesses",
            href: "#",
            description: "Tailored automation solutions for growing companies.",
          },
          {
            title: "Enterprise",
            href: "#",
            description: "Scalable AI automation for large organizations.",
          },
          {
            title: "Developers",
            href: "#",
            description: "API access and integration tools for developers.",
          },
          {
            title: "Healthcare",
            href: "#",
            description: "Specialized automation for healthcare workflows.",
          },
          {
            title: "Finance",
            href: "#",
            description: "AI-driven process automation for financial services.",
          },
          {
            title: "Education",
            href: "#",
            description:
              "Streamline administrative tasks in educational institutions.",
          },
        ],
      },
    },
    {
      variant: "button",
      buttonVariant: "navigation",
      href: ROUTE_BLOG,
      label: "Blog",
    },
  ],
  hero: {
    title: ["It's Your Brand.", "Make Sure It's No One Else's."],
    description:
      "We make trademarks effortless and affordable so your brand stays yours, and no one else will profit from your hard work. One form is all it takes to start securing your brand today.",
    cta: {
      href: "/registration",
      label: "Protect Your Brand Today",
      buttonVariant: "default",
      subtitle: "or your money back.",
    },
    showcase: {
      videoSrc: undefined,
      thumbnailSrc: "/dashboard.png",
      thumbnailAlt: "Hero video",
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
    subtitle:
      "Without a Trademark, Your Brand and Your Customers Are Up for Grabs.",
    items: [
      {
        title: "Imitators",
        description:
          "Imitators can deceive your customers and damage your credibility.",
        icon: Brain,
      },
      {
        title: "Expensive Disputes",
        description:
          "Expensive disputes to reclaim your brand will incur unnecessary cost and effort.",
        icon: Zap,
      },
      {
        title: "No Protection",
        description:
          "An unprotected brand cannot confidently compete or expand.",
        icon: Shield,
      },
    ],
  },
  solution: {
    title: "Trademarks",
    subtitle: "A Small Cost for Substantial Opportunities.",
    items: [
      {
        title: "Ownership and Exclusivity",
        content:
          "A trademark gives you the exclusive right to your name, logo, and identity.",
        image: "/dashboard.png",
        icon: <Upload className="size-6 text-primary" />,
      },
      {
        title: "Enable Growth and Expansion",
        content:
          "Trademarks open doors to new markets, licensing opportunities, and partnerships while safeguarding your identity.",
        image: "/dashboard.png",
        icon: <Zap className="size-6 text-primary" />,
      },
      {
        title: "Build Trust and Recognition",
        content:
          "Customers associate your trademark with quality and consistency, strengthening their loyalty and confidence in your brand.",
        image: "/dashboard.png",
        icon: <Sparkles className="size-6 text-primary" />,
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What our customers say",
    items: [
      {
        name: "John Doe",
        role: "CEO",
        quote: "This is the best service I've ever used.",
        company: "Acme Corp",
      },
    ],
  },
  pricing: {
    title: "Pricing",
    subtitle: "Choose the plan that's right for you",
    description: "Perfect for individuals and small projects",
    items: [
      {
        name: "BASIC",
        href: "#",
        price: "$49",
        billingPeriod: "month",
        period: "month",
        yearlyPrice: "$39",
        yearlyBillingPeriod: "month",
        features: ["Basic Filing", "Realtime Status Updates"],
        description: "Perfect for individuals and small projects",
        buttonText: "Subscribe",
        isPopular: false,
      },
      {
        name: "PRO",
        href: "#",
        price: "$69",
        billingPeriod: "month",
        period: "month",
        yearlyPrice: "$59",
        yearlyBillingPeriod: "month",
        features: ["Everything in Basic", "5 Trademark searches"],
        description: "Ideal for growing businesses and teams",
        buttonText: "Subscribe",
        isPopular: true,
      },
      {
        name: "ENTERPRISE",
        href: "#",
        price: "$99",
        billingPeriod: "month",
        period: "month",
        yearlyPrice: "$82",
        yearlyBillingPeriod: "month",
        features: [
          "Everything in Pro",
          "10 Trademark searches",
          "Priority Support",
        ],
        description: "For large-scale operations and high-volume users",
        buttonText: "Subscribe",
        isPopular: false,
      },
    ],
  },
  faq: {
    title: "FAQ",
    subtitle: "Frequently asked questions",
    items: [
      {
        question: "What is Trademark AI?",
        answer: (
          <span>
            Trademark AI is an advanced AI-powered platform designed to automate
            and enhance trademark applications. It uses machine learning
            algorithms to identify vulnerabilities, simulate attacks, and
            provide actionable insights to improve your security posture.
          </span>
        ),
      },
      {
        question:
          "How does Trademark AI differ from traditional trademark applications?",
        answer: (
          <span>
            Trademark AI leverages artificial intelligence to continuously adapt
            to new threats, automate complex testing processes, and provide more
            comprehensive coverage than traditional methods. It offers faster
            results, ongoing assessments, and intelligent insights that evolve
            with your infrastructure.
          </span>
        ),
      },
      {
        question: "Is Trademark AI suitable for companies of all sizes?",
        answer: (
          <span>
            Yes, Trademark AI is designed to scale with your needs. We offer
            plans suitable for small businesses, growing enterprises, and large
            corporations. Our platform can be customized to fit various
            infrastructure sizes and security requirements.
          </span>
        ),
      },
      {
        question:
          "How does Trademark AI ensure the security of my data during testing?",
        answer: (
          <span>
            Trademark AI adheres to strict security protocols. All tests are
            conducted in a controlled environment, and we never store or access
            your sensitive data. Our platform is designed to identify
            vulnerabilities without compromising your systems or data integrity.
          </span>
        ),
      },
      {
        question:
          "Can Trademark AI integrate with my existing trademark tools?",
        answer: (
          <span>
            Absolutely. Trademark AI is built with integration in mind. We offer
            APIs and pre-built connectors to seamlessly integrate with popular
            trademark tools, enhancing your overall trademark workflow.
          </span>
        ),
      },
    ],
  },
  cta: {
    title:
      "Open doors to growth, safe guard your brand, and defend against costly risks.",
    subtitle: "Invest in a trademark for unmatched value.",
    buttonText: "Protect Your Brand Today",
    href: "/registration",
  },
  footer: {
    termsOfUseAndPrivacyPolicy: ROUTE_TOS,
    items: [
      {
        title: "Product",
        links: [
          { href: "#", text: "Features", icon: null },
          { href: "#", text: "Pricing", icon: null },
          { href: "#", text: "Documentation", icon: null },
          { href: "#", text: "API", icon: null },
        ],
      },
      {
        title: "Company",
        links: [
          { href: "#", text: "About Us", icon: null },
          { href: "#", text: "Careers", icon: null },
          { href: "#", text: "Blog", icon: null },
          { href: "#", text: "Press", icon: null },
          { href: "#", text: "Partners", icon: null },
        ],
      },
      {
        title: "Resources",
        links: [
          { href: "#", text: "Community", icon: null },
          { href: "#", text: "Contact", icon: null },
          { href: "#", text: "Support", icon: null },
          { href: "#", text: "Status", icon: null },
        ],
      },
      {
        title: "Social",
        links: [
          {
            href: "#",
            text: "Twitter",
            icon: <FaTwitter />,
          },
          {
            href: "#",
            text: "Instagram",
            icon: <RiInstagramFill />,
          },
          {
            href: "#",
            text: "Youtube",
            icon: <FaYoutube />,
          },
        ],
      },
    ],
  },
};
