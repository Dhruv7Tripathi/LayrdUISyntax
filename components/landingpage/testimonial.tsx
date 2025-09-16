import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Research and Analysis",
    description:
      "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
  },
  {
    id: "process-2",
    title: "Wireframing and Prototyping",
    description:
      "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual indigoprints allow us to test and refine the user experience before diving into design.",
  },
  {
    id: "process-3",
    title: "Design Creation",
    description:
      "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
  },
  {
    id: "process-4",
    title: "Development and Testing",
    description:
      "In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.",
  },
  {
    id: "process-5",
    title: "Launch and Support",
    description:
      "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts.",
  },
]

const Process = () => {
  return (
    <div className="container min-h-svh place-content-center bg-white dark:bg-black dark:text-gray-100 text-gray-900 px-4 sm:px-6 md:px-8 xl:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-12">
        {/* Header Section - Mobile: Full width, Desktop: Sticky left column */}
        <div className="md:sticky md:top-1/2 md:-translate-y-1/2 md:self-start">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="mb-4 md:mb-6 mt-8 md:mt-24 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Planning your{" "}
              <span className="text-orange-400 font-serif block sm:inline">
                Project Development
              </span>{" "}
              <span className="hidden sm:inline">journey</span>
              <span className="block sm:hidden">journey</span>
            </h2>
            <p className="max-w-prose mx-auto md:mx-0 text-sm sm:text-base md:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Our journey begins with a deep dive into your vision. In the
              Discovery phase, we engage in meaningful conversations to grasp your
              brand identity, goals, and the essence you want to convey. This
              phase sets the stage for all that follows.
            </p>
          </div>
        </div>

        {/* Cards Section - Mobile: Full width, Desktop: Right column */}
        <div className="w-full">
          <ContainerScroll className="min-h-[100vh] md:min-h-[200vh] space-y-4 md:space-y-8 py-4 md:py-12">
            {PROCESS_PHASES.map((phase, index) => (
              <CardSticky
                key={phase.id}
                index={index + 2}
                className="rounded-xl md:rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-6 md:p-8 shadow-md backdrop-blur-2xl bg-white/50 dark:bg-black/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-3 md:space-y-4">
                  {/* Mobile: Stacked layout, Desktop: Side by side */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tighter text-gray-900 dark:text-gray-100 leading-tight">
                      {phase.title}
                    </h3>
                    <div className="flex items-center justify-between sm:justify-end">
                      <span className="text-2xl sm:text-3xl font-bold text-orange-400 font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {phase.description}
                  </p>
                </div>

                {/* Optional: Progress indicator for mobile */}
                <div className="mt-4 sm:hidden flex justify-center">
                  <div className="flex space-x-1">
                    {PROCESS_PHASES.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors ${i <= index
                            ? 'bg-orange-400'
                            : 'bg-neutral-300 dark:bg-neutral-600'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </div>
  )
}

export { Process }