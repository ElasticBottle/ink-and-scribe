import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import type { NotUndefined, SiteConfig } from "~/lib/config";
import { Section } from "./section";

export function FAQ({
  faq,
  supportEmail,
}: {
  faq: NotUndefined<SiteConfig["faq"]>;
  supportEmail: string | undefined;
}) {
  return (
    <Section title={faq.title} subtitle={faq.subtitle}>
      <div className="mx-auto my-12 md:max-w-[800px]">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col items-center justify-center space-y-2"
        >
          {faq.items.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="w-full overflow-hidden rounded-lg border"
            >
              <AccordionTrigger className="px-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {supportEmail && (
        <p className="text-center font-medium text-muted-foreground text-sm tracking-tight">
          Still have questions? Email us at{" "}
          <a href={`mailto:${supportEmail}`} className="underline">
            {supportEmail}
          </a>
        </p>
      )}
    </Section>
  );
}
