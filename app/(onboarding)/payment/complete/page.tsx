"use client";

import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export default function PaymentCompletePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentComplete />
    </Suspense>
  );
}

function PaymentComplete() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const registrationId = searchParams.get("registrationId");

  const isSuccess = status === "success";

  return (
    <div className="container relative mx-auto flex min-h-[80vh] flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-10">
      {/* Background decoration */}
      <div className="-z-10 absolute inset-0 overflow-hidden">
        <div
          className={`-top-1/2 -translate-x-1/2 absolute left-1/2 aspect-square w-1/2 rounded-full ${isSuccess ? "bg-green-100/20 dark:bg-green-900/20" : "bg-red-100/20 dark:bg-red-900/20"} blur-3xl`}
        />
      </div>

      <Card className="w-full max-w-2xl space-y-6 border-0 bg-background/80 p-4 text-center shadow-lg backdrop-blur-sm sm:space-y-8 sm:border sm:p-8">
        {/* Status icon with animated ring */}
        <div className="relative mx-auto size-16 sm:size-20">
          <div
            className={`absolute inset-0 animate-ping rounded-full ${isSuccess ? "bg-green-500/20" : "bg-red-500/20"}`}
          />
          <div
            className={`absolute inset-0 animate-pulse rounded-full ${isSuccess ? "bg-green-500/10" : "bg-red-500/10"}`}
          />
          {isSuccess ? (
            <CheckCircle className="relative size-full text-green-500" />
          ) : (
            <XCircle className="relative size-full text-red-500" />
          )}
        </div>

        {/* Main content */}
        <div className="space-y-2">
          <h1 className="font-bold text-3xl tracking-tight sm:text-4xl">
            {isSuccess ? "Payment Successful!" : "Payment Failed"}
          </h1>
          <p className="text-muted-foreground sm:text-lg">
            {isSuccess
              ? "Your trademark application has been submitted for processing."
              : "There was an issue processing your payment. Please try again."}
          </p>
          {registrationId && (
            <p className="font-mono text-muted-foreground text-sm">
              Registration ID: {registrationId}
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-center sm:pt-4">
          {isSuccess ? (
            <Button asChild size="lg">
              <Link href="/">Return to Home</Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="outline" size="lg">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button asChild size="lg">
                <Link href={`/payment/${registrationId}`}>Try Again</Link>
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
