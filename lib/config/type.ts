import type { IconProps } from "~/components/icons";
import type { ButtonProps } from "~/components/ui/button";

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

export type SiteConfig = {
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
  socialProof?: {
    title: string;
    icons: {
      href: string;
      name: string;
    }[];
  };
  problems: {
    title?: string;
    subtitle: string;
    description?: string;
    items: {
      title: string;
      description: string;
      icon: (props: IconProps) => React.ReactNode;
    }[];
  };
  solution: {
    title?: string;
    subtitle: string;
    description?: string;
    items: {
      title: string;
      content: string;
      image?: string;
      video?: string;
      icon?: React.ReactNode;
    }[];
  };
  testimonials?: {
    title?: string;
    subtitle: string;
    description?: string;
    items: {
      name: string;
      role: string;
      quote: string;
      company: string;
    }[];
  };
  pricing: {
    title?: string;
    subtitle: string;
    description?: string;
    items: {
      name: string;
      href: string;
      price: string;
      billingPeriod: string;
      period: string;
      yearlyPrice: string;
      yearlyBillingPeriod: string;
      features: string[];
      description: string;
      buttonText: string;
      isPopular: boolean;
    }[];
  };
  faq?: {
    title?: string;
    subtitle?: string;
    items: {
      question: string;
      answer: React.ReactNode;
    }[];
  };
  cta?: {
    title?: string;
    subtitle: string;
    buttonText: string;
    href: string;
  };
  footer: {
    privacyPolicy: string;
    termsOfService: string;
    items: {
      title: string;
      links: {
        href: string;
        text: string;
        icon?: React.ReactNode;
      }[];
    }[];
  };
};
