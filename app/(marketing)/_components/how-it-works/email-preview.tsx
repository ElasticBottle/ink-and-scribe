"use client";

import { CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { siteConfig } from "~/lib/config";

export function EmailPreview() {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  return (
    <Card className="h-full w-full max-w-2xl overflow-hidden overflow-y-auto bg-card text-sm sm:text-base">
      {/* Email Header */}
      <div className="border-b px-3 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 sm:h-6 sm:w-6">
            <img
              src="/android-chrome-192x192.png"
              alt={siteConfig.name}
              className="h-full w-full object-contain"
            />
          </div>
          <h3 className="font-semibold">{siteConfig.name}</h3>
        </div>
      </div>

      {/* Email Content */}
      <div className="space-y-4 px-3 py-3 sm:space-y-6 sm:px-6 sm:py-4">
        <div className="flex items-center gap-2 text-green-500 sm:gap-3">
          <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
          <p className="font-medium text-base sm:text-lg">
            Good News! Your Trademark is Ready
          </p>
        </div>

        <div className="space-y-3 text-muted-foreground sm:space-y-4">
          <p className="text-pretty">
            We've reviewed your trademark application for Singapore and we're
            happy to inform you that it meets all the initial requirements for
            filing.
          </p>

          <div className="rounded-lg bg-muted/50 p-3 sm:p-4">
            <p className="font-medium text-foreground">Application Details:</p>
            <ul className="mt-1.5 space-y-0.5 sm:mt-2 sm:space-y-1">
              <li>• Registration ID: TM{currentDate.getTime()}</li>
              <li>• Country: Singapore</li>
              <li>• Status: Ready for Filing</li>
              <li>• Filing Fee: $350 SGD</li>
            </ul>
          </div>

          <p className="text-pretty">
            To proceed with the registration, please click the button below to
            review your application and complete the payment process.
          </p>
        </div>

        <Button className="group w-full" size="sm">
          Proceed to Payment
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 sm:ml-2" />
        </Button>

        <div className="text-muted-foreground text-xs sm:text-sm">
          <p>
            If you have any questions, please don't hesitate to contact us at{" "}
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="text-primary hover:underline"
            >
              {siteConfig.links.email}
            </a>
          </p>
        </div>
      </div>

      {/* Email Footer */}
      <div className="border-t bg-muted/30 px-3 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between text-muted-foreground text-xs">
          <span>{siteConfig.name}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </Card>
  );
}
