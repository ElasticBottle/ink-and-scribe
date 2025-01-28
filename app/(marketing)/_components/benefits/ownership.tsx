import { Shield, Sword, User } from "lucide-react";
import DotPattern from "~/components/ui/dot-pattern";
import { OrbitingCircles } from "~/components/ui/orbiting-circles";

export function Ownership() {
  return (
    <>
      <DotPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]" />
      <div className="relative mt-10 h-full min-h-32 w-full overflow-visible ">
        <OrbitingCircles iconSize={60} radius={120}>
          <Shield />
          <User />
          <Sword />
        </OrbitingCircles>
      </div>
    </>
  );
}
