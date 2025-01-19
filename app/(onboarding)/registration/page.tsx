import { Star } from "lucide-react";
import { BrandButton } from "~/components/brand-button";
import { Spacer } from "~/components/ui/spacer";
import { siteConfig } from "~/lib/config";
import { BasicForm } from "./_components/form";

export default function RegistrationPage() {
  return (
    <div className="container grid min-h-screen lg:max-w-none lg:grid-cols-2 lg:items-center lg:px-0">
      <div className="relative flex h-full flex-col bg-muted p-10 dark:border-r">
        <div className="absolute inset-0 " />
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
      <div className="flex w-full flex-col items-center justify-center gap-4 lg:p-8">
        <div className="hidden flex-col items-center justify-center gap-2 md:flex">
          <h1 className="font-bold text-2xl md:text-4xl">
            Register your trademark
          </h1>
          <p className="text-muted-foreground">
            You'll be able to track progress, register additional trademarks,
            and more.
          </p>
        </div>
        <Spacer className="h-4 lg:h-10" />
        <BasicForm />
      </div>
    </div>
  );
}
