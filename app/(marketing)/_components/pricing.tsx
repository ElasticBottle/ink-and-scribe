"use client";
import { motion } from "framer-motion";
import { Check, StarIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";
import { siteConfig } from "~/lib/config";
import useMediaQuery from "~/lib/hooks/use-window-size";
import { cn } from "~/lib/utils";
import { Section } from "./section";

export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const { isDesktop } = useMediaQuery();

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  if (siteConfig.pricing.variant === "one-time") {
    return (
      <Section
        title={siteConfig.pricing.title}
        subtitle={siteConfig.pricing.subtitle}
        description={siteConfig.pricing.description}
      >
        <div className="mx-auto grid max-w-md items-start gap-8 lg:max-w-none ">
          {siteConfig.pricing.items.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="relative overflow-hidden border-primary/50">
                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-primary/5 to-transparent" />

                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </div>
                  <div className="flex items-end justify-end gap-1">
                    <span className="font-bold text-3xl">{plan.price}</span>
                    <span className="mb-1 text-muted-foreground">
                      /{plan.unit}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  {plan.features && (
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-4">
                          <Check className="size-5 shrink-0 text-primary" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-6">
                    <Link
                      href={plan.href}
                      className={cn(
                        buttonVariants({ variant: "default", size: "lg" }),
                        "w-full",
                      )}
                    >
                      {plan.buttonText}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section
      title={siteConfig.pricing.title}
      subtitle={siteConfig.pricing.subtitle}
      description={siteConfig.pricing.description}
    >
      <div className="mb-10 flex items-center justify-center">
        <span className="mr-2 font-semibold">Monthly</span>
        <Switch checked={!isMonthly} onCheckedChange={handleToggle} />
        <span className="ml-2 font-semibold">Yearly</span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {siteConfig.pricing.items.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 50 }}
            whileInView={
              isDesktop
                ? {
                    y: 0,
                    // Move the plan on the left (index 0) to the right, and the plan on the right (index 2) to the left
                    x: index === 0 ? 30 : index === 2 ? -30 : 0,
                    // Scale all plans down to 0.94 except for the middle plan (index 1) which is kept at 1
                    scale: index === 1 ? 1 : 0.94,
                  }
                : { y: 0 }
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
              "relative rounded-2xl border bg-background p-6 text-center",
              plan.isPopular ? "border-2 border-primary" : "border-border",
              index === 1 && "z-10",
              index === 0 && "origin-right",
              index === siteConfig.pricing.items.length - 1 && "origin-left",
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 flex items-center rounded-tr-xl rounded-bl-xl bg-primary px-2 py-1">
                <StarIcon className="text-primary-foreground" />
                <span className="ml-1 font-sans font-semibold text-primary-foreground">
                  Popular
                </span>
              </div>
            )}
            <div>
              <p className="font-semibold text-muted-foreground">{plan.name}</p>
              <p className="flex items-center justify-center gap-x-2 pt-6">
                <span className="font-bold text-5xl text-foreground tracking-tight">
                  {isMonthly ? plan.price : plan.yearlyPrice}
                </span>
                <span className="font-semibold text-muted-foreground text-sm leading-6 tracking-wide">
                  / {plan.period}
                </span>
              </p>

              <p className="text-muted-foreground text-xs leading-5">
                {isMonthly ? plan.billingPeriod : plan.yearlyBillingPeriod}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <Check className="size-4 text-primary" />
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
                  "w-full font-semibold text-lg tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground hover:ring-2 hover:ring-primary hover:ring-offset-1",
                  plan.isPopular
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground",
                )}
              >
                {plan.buttonText}
              </Link>
              <p className="pt-6 text-muted-foreground text-xs leading-5">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
