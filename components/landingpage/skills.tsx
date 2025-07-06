import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import {
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";
import { SiExpress, SiMongodb } from "react-icons/si";

const reviews = [
  {
    name: "Next.js",
    icon: <IconBrandNextjs size={30} />,
  },
  {
    name: "React",
    icon: <IconBrandReact size={30} />,
  },
  {
    name: "Node.js",
    icon: <IconBrandNodejs size={30} />,
  },
  {
    name: "Tailwind CSS",
    icon: <IconBrandTailwind size={30} />,
  },
  {
    name: "Next.js",
    icon: <IconBrandNextjs size={30} />,
  },
  {
    name: "Tailwind CSS",
    icon: <IconBrandTailwind size={30} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={30} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={30} />,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const TechCard = ({ name, icon }: { name: string; icon: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "relative h-full w-44 cursor-pointer overflow-hidden rounded-xl p-4",
        "bg-white",
        "dark:bg-black "
      )}
    >
      <div className="flex items-center gap-3">
        <div className="text-black dark:text-white">{icon}</div>
        <p className="text-sm font-medium text-black dark:text-white">{name}</p>
      </div>
    </div>
  );
};

export function Skills() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review, index) => (
          <TechCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review, index) => (
          <TechCard key={index} {...review} />
        ))}
      </Marquee>

      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" /> */}
    </div>
  );
}
