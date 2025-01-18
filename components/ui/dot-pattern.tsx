import type { SVGProps } from "react";

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: {
  width?: string | number;
  height?: string | number;
  x?: string | number;
  y?: string | number;
  cx?: string | number;
  cy?: string | number;
  cr?: string | number;
  className?: string;
} & SVGProps<SVGSVGElement>) {
  const id = "pattern-circle";

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full fill-neutral-400/80"
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;
