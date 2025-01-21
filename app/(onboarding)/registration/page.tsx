"use client";

import { Star } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { BrandButton } from "~/components/brand-button";
import { Spacer } from "~/components/ui/spacer";
import { siteConfig } from "~/lib/config";
import { BusinessInfoForm } from "./_components/business-info";
import { TrademarkFilingForm } from "./_components/trademark-filing";
import { TrademarkOwnerForm } from "./_components/trademark-owner";
import {
  type RegistrationStep,
  isStepAccessible,
  redirectToLastStep,
} from "./_lib/steps";

export default function RegistrationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InnerPage />
    </Suspense>
  );
}

function InnerPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = (searchParams.get("step") ?? "1") as RegistrationStep;

  // Handle step access and redirection
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    if (!isStepAccessible(step)) {
      const correctStep = redirectToLastStep();
      router.replace(`/registration?step=${correctStep}`);
    }
  }, [step, router]);

  return (
    <div className="container grid min-h-screen lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden flex-col bg-muted p-10 lg:flex dark:border-r">
        <div className="absolute inset-0" />
        <BrandButton className="z-20" />
        <Spacer className="h-10" />
        <div className="z-20 mt-auto">
          <blockquote className="space-y-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={`${i}-${Math.random()}`}
                  className="h-4 w-4 fill-primary text-primary"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="max-w-lg">
              &ldquo;{siteConfig.name} has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <div>
              <footer className="text-xs">Sofia Davis</footer>
              <footer className="text-muted-foreground text-xs">
                Founder, Design Agency
              </footer>
            </div>
          </blockquote>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center lg:p-8">
        <div className="mx-auto w-full max-w-3xl space-y-8">
          <div>
            <h1 className="font-bold text-3xl">Trademark Registration</h1>
            <p className="mt-2 text-muted-foreground">Step {step} of 3</p>
          </div>

          {step === "1" && <BusinessInfoForm />}
          {step === "2" && <TrademarkOwnerForm />}
          {step === "3" && <TrademarkFilingForm />}
        </div>
      </div>
    </div>
  );
}
