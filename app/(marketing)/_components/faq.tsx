import Section from "~/app/(marketing)/_components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { siteConfig } from "~/lib/config";

export default function FAQ() {
  return (
    <Section title="FAQ" subtitle="Frequently asked questions">
      <div className="mx-auto my-12 md:max-w-[800px]">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col items-center justify-center space-y-2"
        >
          {siteConfig.faqs.map((faq) => (
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
      <h4 className="mb-12 text-center font-medium text-foreground/80 text-sm tracking-tight">
        Still have questions? Email us at{" "}
        <a href={`mailto:${siteConfig.links.email}`} className="underline">
          {siteConfig.links.email}
        </a>
      </h4>
    </Section>
  );
}
