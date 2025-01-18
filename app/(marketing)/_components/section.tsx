import { cn } from "~/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  description,
  children,
  className,
}: SectionProps) {
  const sectionId = title ? title.toLowerCase().replace(/\s+/g, "-") : id;
  return (
    <section
      id={id || sectionId}
      className={cn("container relative max-w-7xl px-4", className)}
    >
      {(title || subtitle || description) && (
        <div className="flex w-full flex-col space-y-4 pb-6 md:items-center ">
          {title && (
            <h2 className="font-medium font-mono text-primary text-sm uppercase tracking-wider">
              {title}
            </h2>
          )}
          {subtitle && (
            <h3 className="max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
              {subtitle}
            </h3>
          )}
          {description && (
            <p className="max-w-2xl text-lg text-muted-foreground leading-8 md:text-center">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
