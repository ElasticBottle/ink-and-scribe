"use client";

import { buttonVariants } from "components/ui/button";
import { Label } from "components/ui/label";
import { Switch } from "components/ui/switch";
import { motion } from "framer-motion";
import { siteConfig } from "lib/config";
import useWindowSize from "lib/hooks/use-window-size";
import { cn } from "lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Section from "~/app/(marketing)/_components/section";

export default function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  const { isDesktop } = useWindowSize();

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Section title="Pricing" subtitle="Choose the plan that's right for you">
      <div className="mb-10 flex justify-center">
        <span className="mr-2 font-semibold">Monthly</span>
        <label className="relative inline-flex cursor-pointer items-center">
          <Label>
            <Switch checked={!isMonthly} onCheckedChange={handleToggle} />
          </Label>
        </label>
        <span className="ml-2 font-semibold">Yearly</span>
      </div>
      <div className="sm:2 grid grid-cols-1 gap-4 md:grid-cols-3">
        {siteConfig.pricing.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: 0,
                    opacity: 1,
                    x:
                      index === siteConfig.pricing.length - 1
                        ? -30
                        : index === 0
                          ? 30
                          : 0,
                    scale:
                      index === 0 || index === siteConfig.pricing.length - 1
                        ? 0.94
                        : 1.0,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `relative rounded-2xl border bg-background p-6 text-center lg:flex lg:flex-col lg:justify-center`,
              plan.isPopular ? "border-2 border-primary" : "border-border",
              index === 0 || index === siteConfig.pricing.length - 1
                ? "-translate-z-[50px] z-0 translate-x-0 translate-y-0 rotate-y-[10deg]"
                : "z-10",
              index === 0 && "origin-right",
              index === siteConfig.pricing.length - 1 && "origin-left",
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 flex items-center rounded-tr-xl rounded-bl-xl bg-primary px-2 py-0.5">
                <FaStar className="text-white" />
                <span className="ml-1 font-sans font-semibold text-white">
                  Popular
                </span>
              </div>
            )}
            <div>
              <p className="font-semibold text-base text-muted-foreground">
                {plan.name}
              </p>
              <p className="mt-6 flex items-center justify-center gap-x-2">
                <span className="font-bold text-5xl text-foreground tracking-tight">
                  {isMonthly ? plan.price : plan.yearlyPrice}
                </span>
                {plan.period !== "Next 3 months" && (
                  <span className="font-semibold text-muted-foreground text-sm leading-6 tracking-wide">
                    / {plan.period}
                  </span>
                )}
              </p>

              <p className="text-muted-foreground text-xs leading-5">
                {isMonthly ? "billed monthly" : "billed annually"}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="mr-2 size-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-4 w-full" />

              <Link
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden font-semibold text-lg tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:bg-primary hover:text-white hover:ring-2 hover:ring-primary hover:ring-offset-1",
                  plan.isPopular
                    ? "bg-primary text-white"
                    : "bg-white text-black",
                )}
              >
                {plan.buttonText}
              </Link>
              <p className="mt-6 text-muted-foreground text-xs leading-5">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
