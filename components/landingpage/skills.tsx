import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import {
  IconBrandWalmart,
  IconBrandGoogle,
  IconBrandApple,
  IconBrandAirbnb,
  IconBrandAdobe,
  IconBrandBlackberry
} from "@tabler/icons-react";

const reviews = [
  {
    name: "Google",
    icon: <IconBrandGoogle size={55} />,
  },
  {
    name: "Apple",
    icon: <IconBrandApple size={55} />,
  },
  {
    name: "Walmart",
    icon: <IconBrandWalmart size={55} />,
  },
  {
    name: "Airbnb",
    icon: <IconBrandAirbnb size={55} />,
  },
  {
    name: "Adobe",
    icon: <IconBrandAdobe size={55} />,
  },
  {
    name: "Blackberry",
    icon: <IconBrandBlackberry size={55} />,
  },
];

// const firstRow = reviews.slice(0, reviews.length / 2);
const firstRow = reviews;

const TechCard = ({ name, icon }: { name: string; icon: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "relative h-full w-44 cursor-pointer overflow-hidden rounded-xl p-4",
        "bg-white dark:bg-black"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="text-black dark:text-white">{icon}</div>
        <p className="text-xl font-medium text-black dark:text-neutral-500">
          {name}
        </p>
      </div>
    </div>
  );
};

export function Skills() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      {/* First row scroll left to right */}
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review, index) => (
          <TechCard key={index} {...review} />
        ))}
      </Marquee>

      {/* Second row scroll right to left */}
      {/* <Marquee reverse pauseOnHover className="[--duration:35s]">
        {secondRow.map((review, index) => (
          <TechCard key={index} {...review} />
        ))}
      </Marquee> */}

      {/* Gradient fades on both sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-black to-transparent" />
    </div>
  );
}
