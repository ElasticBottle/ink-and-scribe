import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { siteConfig } from "~/lib/config";
import { censorEmail } from "../_lib/censor-email";
import { getRegistration } from "../_lib/get-registration-detail.action";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { registrationId } = await searchParams;
  if (typeof registrationId !== "string") {
    return notFound();
  }

  const registration = await getRegistration(registrationId);
  if (!registration) {
    return notFound();
  }
  const censoredEmail = censorEmail(registration.trademarkOwner.contactEmail);

  return (
    <div className="container relative mx-auto flex min-h-[80vh] flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-10">
      {/* Background decoration */}
      <div className="-z-10 absolute inset-0 overflow-hidden">
        <div className="-top-1/2 -translate-x-1/2 absolute left-1/2 aspect-square w-1/2 rounded-full bg-green-100/20 blur-3xl dark:bg-green-900/20" />
      </div>

      <Card className="w-full max-w-2xl space-y-6 border-0 bg-background/80 p-4 text-center shadow-lg backdrop-blur-sm sm:space-y-8 sm:border sm:p-8">
        {/* Success icon with animated ring */}
        <div className="relative mx-auto size-16 sm:size-20">
          <div className="absolute inset-0 animate-ping rounded-full bg-green-500/20" />
          <div className="absolute inset-0 animate-pulse rounded-full bg-green-500/10" />
          <CheckCircle className="relative size-full text-green-500" />
        </div>

        {/* Main content */}
        <div className="space-y-2">
          <h1 className="font-bold text-3xl tracking-tight sm:text-4xl">
            Application Submitted!
          </h1>
          <p className="text-muted-foreground sm:text-lg">
            We'll review your submission and get back to{" "}
            <span className=" text-foreground">
              {registration.trademarkOwner.contactName}
            </span>{" "}
            at <span className=" text-foreground">{censoredEmail}</span>
          </p>
        </div>

        {/* Registration ID section */}
        <div className="rounded-lg bg-muted/50 p-4 shadow-sm sm:p-6">
          <p className="pb-2 font-medium text-muted-foreground text-xs uppercase sm:text-sm">
            Your Registration ID
          </p>
          <p className="font-bold font-mono text-xl tracking-wider sm:text-2xl">
            {registration.registrationId}
          </p>
        </div>

        {/* Follow-up information */}
        <div className="rounded-lg bg-muted/30 p-3 text-muted-foreground text-sm shadow-sm sm:p-4">
          <p>
            If you have any questions, please email us at{" "}
            <a
              href={`mailto:${siteConfig.links.email}?subject=Question about Registration ${registration.registrationId}`}
              className="font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
            >
              {siteConfig.links.email}
            </a>
          </p>
        </div>

        {/* Action button */}
        <div className="pt-2 sm:pt-4">
          <Button asChild size="lg" className="w-full font-medium sm:w-auto">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
