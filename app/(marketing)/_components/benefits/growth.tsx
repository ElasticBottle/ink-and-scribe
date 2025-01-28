import FlickeringGrid from "~/components/ui/flickering-grid";
import { Globe } from "~/components/ui/globe";

export function Growth() {
  return (
    <>
      <FlickeringGrid
        className="absolute inset-0 z-0 "
        squareSize={4}
        gridGap={6}
        color="#000"
        maxOpacity={0.1}
        flickerChance={0.1}
        height={1200}
        width={1200}
      />
      <div className="relative min-h-32">
        <Globe className="xl:-top-6 md:top-52" />
      </div>
    </>
  );
}
