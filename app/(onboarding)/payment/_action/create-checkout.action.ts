"use server";

import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-12-18.acacia",
});

export async function createCheckoutSession(registrationId: string) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "paynow", "grabpay"],
      line_items: [
        {
          price_data: {
            currency: "sgd",
            unit_amount: 69900,
            product_data: {
              name: "Trademark Registration",
              description: `Registration ID: ${registrationId}`,
            },
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:6969"}/payment/complete?status=success&registrationId=${registrationId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:6969"}/payment/complete?status=cancelled&registrationId=${registrationId}`,
      metadata: {
        registrationId,
      },
    });

    return { url: session.url };
  } catch (error) {
    console.error("Failed to create checkout session:", error);
    return { error: "Failed to create checkout session" };
  }
}
