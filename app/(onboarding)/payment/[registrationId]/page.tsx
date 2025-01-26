import { Star } from "lucide-react";
import { notFound } from "next/navigation";
import { BrandButton } from "~/components/brand-button";
import { Card } from "~/components/ui/card";
import { Spacer } from "~/components/ui/spacer";
import { siteConfig } from "~/lib/config";
import { getRegistration } from "../../registration/_action/get-registration-detail.action";

import { PaymentButton } from "./_component/payment-button";
export default async function PaymentPage({
  params,
}: {
  params: Promise<{ registrationId: string }>;
}) {
  const { registrationId } = await params;
  const registration = await getRegistration(registrationId);
  if (!registration) {
    return notFound();
  }
  console.log("registration", registration);
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
            <h1 className="font-bold text-3xl">Review Your Application</h1>
            <p className="mt-2 text-muted-foreground">
              Registration ID: {registration.registrationId}
            </p>
          </div>

          {/* Business Information */}
          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">Business Information</h2>
            <dl className="space-y-4">
              {registration.businessInfo.haveSocials ? (
                <>
                  {registration.businessInfo.website && (
                    <div>
                      <dt className="font-medium text-muted-foreground text-sm">
                        Website
                      </dt>
                      <dd className="mt-1">
                        {registration.businessInfo.website}
                      </dd>
                    </div>
                  )}
                  {registration.businessInfo.instagram && (
                    <div>
                      <dt className="font-medium text-muted-foreground text-sm">
                        Instagram
                      </dt>
                      <dd className="mt-1">
                        {registration.businessInfo.instagram}
                      </dd>
                    </div>
                  )}
                  {registration.businessInfo.facebook && (
                    <div>
                      <dt className="font-medium text-muted-foreground text-sm">
                        Facebook
                      </dt>
                      <dd className="mt-1">
                        {registration.businessInfo.facebook}
                      </dd>
                    </div>
                  )}
                </>
              ) : (
                <div>
                  <dt className="font-medium text-muted-foreground text-sm">
                    Business Description
                  </dt>
                  <dd className="mt-1">
                    {registration.businessInfo.productDescription}
                  </dd>
                </div>
              )}
            </dl>
          </Card>

          {/* Trademark Owner Information */}
          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">Trademark Owner</h2>
            <dl className="space-y-4">
              {registration.trademarkOwner.isCompany ? (
                <>
                  <div>
                    <dt className="font-medium text-muted-foreground text-sm">
                      Company Name
                    </dt>
                    <dd className="mt-1">
                      {registration.trademarkOwner.companyName}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground text-sm">
                      Registration Country
                    </dt>
                    <dd className="mt-1">
                      {registration.trademarkOwner.registrationCountry}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground text-sm">
                      Registration Number
                    </dt>
                    <dd className="mt-1">
                      {registration.trademarkOwner.registrationNumber}
                    </dd>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <dt className="font-medium text-muted-foreground text-sm">
                      Owner Name
                    </dt>
                    <dd className="mt-1">
                      {registration.trademarkOwner.ownerName}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground text-sm">
                      Nationality
                    </dt>
                    <dd className="mt-1">
                      {registration.trademarkOwner.nationality}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground text-sm">
                      Country of Residence
                    </dt>
                    <dd className="mt-1">
                      {registration.trademarkOwner.residenceCountry}
                    </dd>
                  </div>
                </>
              )}
              <div>
                <dt className="font-medium text-muted-foreground text-sm">
                  Contact Name
                </dt>
                <dd className="mt-1">
                  {registration.trademarkOwner.contactName}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground text-sm">
                  Contact Email
                </dt>
                <dd className="mt-1">
                  {registration.trademarkOwner.contactEmail}
                </dd>
              </div>
            </dl>
          </Card>

          {/* Trademark Filing Information */}
          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">Trademark Details</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-medium text-muted-foreground text-sm">
                  Type
                </dt>
                <dd className="mt-1">
                  {registration.trademarkFiling.isWordMark
                    ? "Word Mark"
                    : "Logo Mark"}
                </dd>
              </div>
              {registration.trademarkFiling.isWordMark ? (
                <div>
                  <dt className="font-medium text-muted-foreground text-sm">
                    Word Mark
                  </dt>
                  <dd className="mt-1">
                    {registration.trademarkFiling.wordMark}
                  </dd>
                </div>
              ) : registration.logoUrl ? (
                <div>
                  <dt className="font-medium text-muted-foreground text-sm">
                    Logo
                  </dt>
                  <dd className="mt-1">
                    <img
                      src={registration.logoUrl}
                      alt="Trademark Logo"
                      className="h-32 w-auto object-contain"
                    />
                  </dd>
                </div>
              ) : null}
              <div>
                <dt className="font-medium text-muted-foreground text-sm">
                  Countries
                </dt>
                <dd className="mt-1">
                  {registration.trademarkFiling.countries.join(", ")}
                </dd>
              </div>
            </dl>
          </Card>

          {/* Payment Section */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-xl">Total Amount</h2>
                <p className="text-muted-foreground">
                  Including all filing fees
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-2xl">$699</p>
                <p className="text-muted-foreground text-sm">SGD</p>
              </div>
            </div>
            <div className="pt-6">
              <PaymentButton
                registrationId={registrationId}
                className="w-full"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
