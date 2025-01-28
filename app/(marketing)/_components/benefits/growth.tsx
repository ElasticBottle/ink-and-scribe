import FlickeringGrid from "~/components/ui/flickering-grid";

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
      <div className="relative flex min-h-32 w-full items-end justify-center md:h-full md:pb-12 xl:h-48 xl:pb-0">
        <img src="/globe.png" alt="growth" className="w-fit xl:max-w-md" />
      </div>
    </>
  );
}
