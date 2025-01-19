import { BrandButton } from "~/components/brand-button";
import { siteConfig } from "~/lib/config";
import { BasicForm } from "./_components/form";

export default function RegistrationPage() {
  return (
    <div className="container grid min-h-screen lg:max-w-none lg:grid-cols-2 lg:items-center lg:px-0">
      <div className="relative flex h-full flex-col bg-muted p-10 dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <BrandButton className="z-20" />
        <div className="z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;{siteConfig.name} has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <BasicForm />
      </div>
    </div>
  );
}
