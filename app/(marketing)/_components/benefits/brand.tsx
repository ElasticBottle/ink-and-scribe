import Ripple from "~/components/ui/ripple";
import { ScratchToReveal } from "~/components/ui/scratch-to-reveal";

export function Brand() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Ripple className="-bottom-full" />
      <ScratchToReveal
        width={300}
        height={145}
        minScratchPercentage={70}
        className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-background"
        gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
      >
        <p className="text-4xl text-foreground">Your Brand</p>
      </ScratchToReveal>
    </div>
  );
}
