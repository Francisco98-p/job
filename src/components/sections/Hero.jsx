import { motion } from 'framer-motion'
import Navbar from '../layout/Navbar'
import Button from '../ui/Button'

function WaveDivider() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block h-10 w-full sm:h-14 lg:h-16"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0V40Z"
          fill="white"
        />
      </svg>
    </div>
  )
}

function HeroPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 sm:h-80 sm:w-80" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5 sm:h-72 sm:w-72" />
      <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-brand-400/10" />
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700"
      aria-labelledby="hero-heading"
    >
      <HeroPattern />
      <Navbar variant="dark" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pb-16 pt-6 text-center sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1
            id="hero-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            RemoteRecruit&apos;s Difference
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:mt-5 sm:text-lg">
            Discover a hiring platform built for the global remote workforce. Connect
            with top talent worldwide, post jobs for free, and streamline your
            recruitment with AI-powered tools.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button variant="primary" size="lg" className="min-w-[160px]">
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="min-w-[160px] border-white/30 hover:bg-white/15"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      <WaveDivider />
    </section>
  )
}
