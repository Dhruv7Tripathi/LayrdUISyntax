import React from 'react'
import Link from 'next/link'

export default function CTA() {
  return (
    <div className="bg-white dark:bg-black flex flex-col justify-center items-center min-h-screen p-4 md:p-6 rounded-lg shadow-lg">
      <div className='text-center bg-neutral-50 dark:bg-neutral-950 justify-center w-full max-w-8xl rounded-xl p-6 sm:p-8 md:p-12 border border-dashed border-neutral-200 dark:border-neutral-800 flex flex-col items-center mx-auto'>

        <h2 className="bg-gradient-stop mx-auto max-w-6xl text-balance bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 via-50% dark:to-neutral-100/30 bg-clip-text py-2 px-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tighter text-transparent">
          Ready to get started?
        </h2>

        <p className="mt-4 md:mt-6 mb-6 sm:mb-8 max-w-xl text-center text-neutral-800 dark:text-neutral-200 text-sm sm:text-base md:text-lg leading-relaxed px-2">
          Join thousands of users who&apos;ve already boosted their productivity with our tools.
          Whether you&apos;re managing tasks or planning big projects — we&apos;ve got you covered.
          Sign up now and take control of your time.
        </p>

        <Link
          href={"/createTodo"}
          className="group w-full sm:w-48 md:w-40 flex items-center justify-center gap-2 rounded-xl border border-neutral-300  dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-950 px-5 py-3 sm:py-4 text-sm sm:text-base md:text-[1rem] font-semibold text-neutral-950 dark:text-white shadow-[inset_0px_0px_7px_1px_#535353] transition-all duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-800/50 hover:shadow-[inset_0px_0px_10px_2px_#636363] active:scale-95"
        >
          <TextGlitch text={"Get Started"} />
        </Link>

      </div>
    </div>
  )
}

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible">{text}</span>
      <span className="absolute left-0 top-0 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
        {text}
      </span>
    </div>
  )
}