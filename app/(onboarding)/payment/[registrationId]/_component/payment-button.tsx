"use client";

import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { createCheckoutSession } from "../../_action/create-checkout.action";

export function PaymentButton({
  registrationId,
  className,
}: {
  registrationId: string;
  className?: string;
}) {
  const router = useRouter();
  const handlePayment = async () => {
    const result = await createCheckoutSession(registrationId);
    if (result.url) {
      router.push(result.url);
    } else {
      // Handle error
      console.error("Failed to create checkout session", result);
    }
  };
  return (
    <Button onClick={handlePayment} className={className} size="lg">
      Proceed to Payment
    </Button>
  );
}
