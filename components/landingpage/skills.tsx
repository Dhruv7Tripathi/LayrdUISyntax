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
    icon: <IconBrandNextjs size={55} />,
  },
  {
    name: "React",
    icon: <IconBrandReact size={55} />,
  },
  {
    name: "Node.js",
    icon: <IconBrandNodejs size={55} />,
  },
  {
    name: "Tailwind CSS",
    icon: <IconBrandTailwind size={55} />,
  },
  {
    name: "Next.js",
    icon: <IconBrandNextjs size={55} />,
  },
  {
    name: "Tailwind CSS",
    icon: <IconBrandTailwind size={55} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={55} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={55} />,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const TechCard = ({ name, icon }: { name: string; icon: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "relative h-full w-44 cursor-pointer overflow-hidden rounded-xl p-4",
        "bg-white",
        "dark:bg-[#0c0c0c] "
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
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review, index) => (
          <TechCard key={index} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:55s]">
        {secondRow.map((review, index) => (
          <TechCard key={index} {...review} />
        ))}
      </Marquee> */}

      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0a0a0a]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0a0a0a]" />
    </div>
  );
}
