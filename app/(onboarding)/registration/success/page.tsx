"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center py-10">
      <div className="text-center">
        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
        <h1 className="mb-4 font-bold text-3xl">Application Submitted!</h1>
        <p className="mb-8 text-muted-foreground">
          Thank you for submitting your trademark registration application.
          We'll review your submission and get back to you shortly.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
