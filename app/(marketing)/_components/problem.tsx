import BlurFade from "~/components/ui/blur-fade";
import { Card, CardContent } from "~/components/ui/card";
import { siteConfig } from "~/lib/config";
import { Section } from "./section";

export default function Component() {
  return (
    <Section
      title={siteConfig.problems.title}
      subtitle={siteConfig.problems.subtitle}
    >
      <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3 md:p-12">
        {siteConfig.problems.items.map((problem, index) => (
          <BlurFade key={problem.title} delay={0.2 + index * 0.2} inView>
            <Card className="border-none bg-background shadow-none">
              <CardContent className="flex flex-col items-center space-y-4 p-0 md:items-start md:p-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <problem.icon className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">{problem.title}</h3>
                <p className="text-center text-muted-foreground md:text-left">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
