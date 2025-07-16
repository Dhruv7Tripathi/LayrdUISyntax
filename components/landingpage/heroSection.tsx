"use client"

// import { CardHoverEffectDemo } from "../ui/card"
import { Navbar } from "../navbar"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Skills } from "./skills"
import { features } from "@/contants"
import { FeatureCard } from "../grid-feature-cards"
import { PricingCard } from "../ui/dark-gradient-pricing"
const HeroSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="bg-gradient-to-t from-[#110b03] via-[#0c0c0c] to-[#181105]">
      <div className="">
        <Navbar />

        {/* Hero Section */}
        <motion.section
          className="flex items-center justify-center h-screen text-black dark:text-white"
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto text-center space-y-6 px-4">
            <h1 className="text-4xl md:text-7xl font-sans font-bold">
              Optimize Your Workflow
              <br />
              with Cutting-Edge Solutions
            </h1>
            <p className="max-w-4xl mx-auto font-medium text-primary md:text-xl">
              Lorem ipsum dolor Quasi enim illum quod odit veritatis fugit
              reprehenderit, neque, magnam quas officiis inventore excepturi,
              deleniti earum hic voluptatum laudantium ratione omnis sit.
            </p>
            <div className="flex justify-center items-center gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 font-semibold rounded-3xl transition duration-300">
                Start Free Trial
              </button>
              <button className="border-b text-white px-6 py-3 font-semibold rounded-3xl">
                Book a Demo
              </button>
            </div>
            <div className="m-4 p-4 bottom-4 w-full z-20 text-center text-sm text-white">
              <p className="flex justify-center gap-4">
                <span className="text-yellow-400">✓</span> No credit card
                <span className="text-yellow-400">✓</span> 14-day trial
                <span className="text-yellow-400">✓</span> Cancel anytime
              </p>
            </div>
          </div>
        </motion.section>

        {/* Beams Collide ONLY With Image */}
        <BackgroundBeamsWithCollision>
          <div className="relative z-10 rounded-2xl w-[1300px] h-[800px] border-b-2 border-neutral-800/50 bg-neutral-900/40 shadow-lg backdrop-blur-md mx-auto mt-8 overflow-hidden">
            <Image
              src="/hero.webp"
              alt="Hero Image"
              fill
              className="rounded-lg shadow-amber-500 object-cover"
              priority
            />
            <div className="opacity-0" />
            <BorderBeam className="absolute top-0 left-0 w-full h-full" />
          </div>
        </BackgroundBeamsWithCollision>

        <div className="opacity-10 mb-5" />
      </div>

      {/* Skills Section */}
      <div className="mt-12 p-12 mb-12 opacity-55">
        <Skills />
      </div>

      {/* Projects Section */}
      {/* <section className="py-16 md:py-32">
        <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
          <AnimatedContainer className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
              Power. Speed. Control.
            </h2>
            <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
              Everything you need to build fast, secure, scalable apps.
            </p>
          </AnimatedContainer>

          <AnimatedContainer
            delay={0.4}
            className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
          >
            {features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </AnimatedContainer>
        </div>
      </section> */}


      {/* CTA Section */}
      <motion.section
        className="px-6 py-12 h-100 rounded-2xl pb-12 mb-12 w-300 border-2 border-neutral-800/50 bg-neutral-900/40 shadow-lg backdrop-blur-md mx-auto mt-8 overflow-hidden flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl w-full flex items-center justify-center">
          <motion.h2
            className="text-5xl text-center md:text-4xl font-bold text-white leading-tight mb-6"
            variants={itemVariants}
          >
            Ready to take your project to the{" "}
            <span className="text-amber-500 font-serif">next level</span>?
          </motion.h2>
        </div>
      </motion.section>
      <section className="relative overflow-hidden bg-background text-foreground">
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
          <div className="mb-12 space-y-3">
            <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Pricing
            </h2>
            <p className="text-center text-base text-muted-foreground md:text-lg">
              Use it for free for yourself, upgrade when your team needs advanced
              control.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <PricingCard
              tier="Free"
              price="$0/mo"
              bestFor="Best for 1-5 users"
              CTA="Get started free"
              benefits={[
                { text: "One workspace", checked: true },
                { text: "Email support", checked: true },
                { text: "1 day data retention", checked: false },
                { text: "Custom roles", checked: false },
                { text: "Priority support", checked: false },
                { text: "SSO", checked: false },
              ]}
            />
            <PricingCard
              tier="Pro"
              price="$79/mo"
              bestFor="Best for 5-50 users"
              CTA="14-day free trial"
              benefits={[
                { text: "Five workspaces", checked: true },
                { text: "Email support", checked: true },
                { text: "7 day data retention", checked: true },
                { text: "Custom roles", checked: true },
                { text: "Priority support", checked: false },
                { text: "SSO", checked: false },
              ]}
            />
            <PricingCard
              tier="Enterprise"
              price="Contact us"
              bestFor="Best for 50+ users"
              CTA="Contact us"
              benefits={[
                { text: "Unlimited workspaces", checked: true },
                { text: "Email support", checked: true },
                { text: "30 day data retention", checked: true },
                { text: "Custom roles", checked: true },
                { text: "Priority support", checked: true },
                { text: "SSO", checked: true },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection


type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>['className'];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
