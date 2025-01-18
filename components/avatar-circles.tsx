import { cn } from "lib/utils";
import type { HTMLAttributes } from "react";

export interface AvatarCirclesProps extends HTMLAttributes<HTMLDivElement> {
  numPeople?: number;
  avatarUrls: string[];
}

export default function AvatarCircles({
  numPeople,
  avatarUrls,
  className,
}: AvatarCirclesProps) {
  return (
    <div className={cn("-space-x-4 z-10 flex rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="size-10 rounded-full border-2 border-white dark:border-gray-800"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-black text-center font-medium text-white text-xs dark:border-gray-800 dark:bg-white dark:text-black">
        +{numPeople}
      </div>
    </div>
  );
}
