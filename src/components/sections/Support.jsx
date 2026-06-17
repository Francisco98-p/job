import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'
import DashboardMockup from '../mockups/DashboardMockup'

export default function Support() {
  return (
    <section
      className="bg-brand-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="support-heading"
    >
      <AnimatedSection>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
          <div className="flex flex-1 justify-center">
            <DashboardMockup />
          </div>

          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-500 sm:text-sm">
              Support
            </span>
            <h2
              id="support-heading"
              className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl"
            >
              Help is only a few clicks away!
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
              Our dedicated support team is available around the clock to help you
              with account setup, billing questions, and platform features.
            </p>
            <Button variant="outline-light" size="lg" className="mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Get Help
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
