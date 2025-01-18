import { type IconProps, Icons } from "components/icons";
import type React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import type { ButtonProps } from "~/components/ui/button";

export const BLUR_FADE_DELAY = 0.15;

export type HeaderButtonConfig = {
  variant: "button";
  buttonVariant: ButtonProps["variant"] | "navigation";
  target?: "_blank" | "_self" | "_parent" | "_top";
  href: string;
  label: string;
};

export type HeaderDropdownConfig = {
  variant: "dropdown";
  label: string;
  content: {
    main?: {
      icon: React.ReactNode;
      title: string;
      description: string;
      href: string;
    };
    items: {
      href: string;
      title: string;
      description: string;
    }[];
  };
};

type SiteConfig = {
  name: string;
  description: string;
  icon: (props: IconProps) => React.ReactNode;
  url: string;
  keywords: string[];
  links: {
    email?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
  header: (HeaderButtonConfig | HeaderDropdownConfig)[];
  announcement?: {
    title: string;
    href: string;
  };
  hero: {
    title: string[];
    description: string;
    cta: {
      href: string;
      label: string;
      buttonVariant: ButtonProps["variant"];
      subtitle?: string;
    };
    showcase: {
      videoSrc?: string | undefined;
      thumbnailSrc: string;
      thumbnailAlt: string;
    };
  };
};

export const siteConfig: SiteConfig = {
  name: "Trademark AI",
  description:
    "Trademark AI is an advanced AI-powered platform designed to automate and enhance trademark applications.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  icon: Icons.logo,
  keywords: ["Trademark", "AI", "Patent", "IP"],
  links: {
    email: "support@trademark.ai",
    twitter: "https://twitter.com/trademark-ai",
  },
  announcement: {
    href: "/blog",
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
      target: "_blank",
      buttonVariant: "navigation",
      href: "/blog",
      label: "Blog",
    },
  ],
  hero: {
    title: ["Trademark applications", "in days", "not months"],
    description:
      "Secure your brand identity with confidence. Our agency helps you file trademarks quickly and accurately, eliminating paperwork and reducing registration time by up to 90%.",
    cta: {
      href: "/signup",
      label: "Protect your brand now",
      buttonVariant: "default",
      subtitle: "Lowest rates guaranteed or your money back.",
    },
    showcase: {
      videoSrc: undefined,
      thumbnailSrc: "/dashboard.png",
      thumbnailAlt: "Hero video",
    },
  },
  pricing: [
    {
      name: "BASIC",
      href: "#",
      price: "$49",
      period: "month",
      yearlyPrice: "$39",
      features: ["Basic Filing", "Realtime Status Updates"],
      description: "Perfect for individuals and small projects",
      buttonText: "Subscribe",
      isPopular: false,
    },
    {
      name: "PRO",
      href: "#",
      price: "$69",
      period: "month",
      yearlyPrice: "$59",
      features: ["Everything in Basic", "5 Trademark searches"],
      description: "Ideal for growing businesses and teams",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "#",
      price: "$99",
      period: "month",
      yearlyPrice: "$82",
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
  faqs: [
    {
      question: "What is Trademark AI?",
      answer: (
        <span>
          Trademark AI is an advanced AI-powered platform designed to automate
          and enhance trademark applications. It uses machine learning
          algorithms to identify vulnerabilities, simulate attacks, and provide
          actionable insights to improve your security posture.
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
          Yes, Trademark AI is designed to scale with your needs. We offer plans
          suitable for small businesses, growing enterprises, and large
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
      question: "Can Trademark AI integrate with my existing trademark tools?",
      answer: (
        <span>
          Absolutely. Trademark AI is built with integration in mind. We offer
          APIs and pre-built connectors to seamlessly integrate with popular
          trademark tools, enhancing your overall trademark workflow.
        </span>
      ),
    },
  ],
  footer: [
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
};
