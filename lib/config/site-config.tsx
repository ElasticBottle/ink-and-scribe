import { Icons } from "components/icons";
import { Brain, Shield, Sparkles, Upload, Zap } from "lucide-react";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import type { SiteConfig } from "./type";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig: SiteConfig = {
  name: "Trademark AI",
  description:
    "Trademark AI is an advanced AI-powered platform designed to automate and enhance trademark applications.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:6969",
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
  socialProof: {
    title: "With a team you can trust",
    icons: [
      {
        href: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOj-PJ7_F-RpOkFwiIxrvgue_UDHs_lJbyQ&s",
        name: "Oxford",
      },
      {
        href: "https://i0.wp.com/thecustodian.ca/wp-content/uploads/2022/02/waterloo.png?fit=600%2C600&ssl=1",
        name: "Waterloo",
      },
      {
        href: "https://upload.wikimedia.org/wikipedia/en/b/b9/NUS_coat_of_arms.svg",
        name: "NUS",
      },
    ],
  },
  problems: {
    // title: "Problem",
    subtitle: "Trademark applications don't have to be hard.",
    items: [
      {
        title: "Opposition",
        description:
          "Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.",
        icon: Brain,
      },
      {
        title: "Slow Decision-Making",
        description:
          "Traditional data processing methods are too slow, causing businesses to lag behind market changes and miss crucial opportunities.",
        icon: Zap,
      },
      {
        title: "Data Security Concerns",
        description:
          "With increasing cyber threats, businesses worry about the safety of their sensitive information when adopting new technologies.",
        icon: Shield,
      },
    ],
  },
  solution: {
    title: "We help you handle all the complexities of trademark applications",
    subtitle: "so you can focus on your business",
    items: [
      {
        title: "1. Upload Your Data",
        content:
          "Simply upload your data to our secure platform. We support various file formats and data types to ensure a seamless integration with your existing systems.",
        image: "/dashboard.png",
        icon: <Upload className="size-6 text-primary" />,
      },
      {
        title: "2. Click Start",
        content:
          "Our advanced AI algorithms automatically process and analyze your data, extracting valuable insights and patterns that would be difficult to identify manually.",
        image: "/dashboard.png",
        icon: <Zap className="size-6 text-primary" />,
      },
      {
        title: "3. Get Actionable Insights",
        content:
          "Receive clear, actionable insights and recommendations based on the AI analysis. Use these insights to make data-driven decisions and improve your business strategies.",
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
    title: "Ready to get started?",
    subtitle: "Start your free trial today.",
    buttonText: "Get started for free",
    href: "/signup",
  },
  footer: {
    privacyPolicy: "#",
    termsOfService: "#",
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
