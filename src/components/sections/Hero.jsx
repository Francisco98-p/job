import { motion } from 'framer-motion'
import Navbar from '../layout/Navbar'
import LazyImage from '../ui/LazyImage'

function WaveDivider() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block h-16 w-full sm:h-24 lg:h-28"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 60C240 100 480 20 720 60C960 100 1200 20 1440 60V120H0V60Z"
          fill="white"
        />
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700"
      aria-labelledby="hero-heading"
    >
      <Navbar variant="dark" />

      <LazyImage
        src="/images/hero-pattern.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-8 text-center sm:px-6 sm:pb-32 sm:pt-12 lg:px-8 lg:pb-36 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            id="hero-heading"
            className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            RemoteRecruit&apos;s Difference
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg md:text-xl">
            Discover a hiring platform built for the global remote workforce. Connect
            with top talent worldwide, post jobs for free, and streamline your
            recruitment with AI-powered tools.
          </p>
        </motion.div>
      </div>

      <WaveDivider />
    </section>
  )
}
