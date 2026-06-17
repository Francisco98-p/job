import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'
import { pricingPlans } from '../../data/pricing'

function PricingCard({ plan }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        plan.highlighted
          ? 'border-brand-600 bg-brand-900 text-white'
          : 'border-slate-200 bg-white'
      }`}
    >
      <h3
        className={`text-xl font-bold ${
          plan.highlighted ? 'text-white' : 'text-slate-900'
        }`}
      >
        {plan.name}
      </h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span
          className={`text-4xl font-extrabold ${
            plan.highlighted ? 'text-white' : 'text-slate-900'
          }`}
        >
          {plan.price}
        </span>
        <span
          className={`text-sm ${
            plan.highlighted ? 'text-brand-200' : 'text-slate-500'
          }`}
        >
          {plan.period}
        </span>
      </div>

      <ul className="mt-8 flex-1 space-y-3" aria-label={`${plan.name} plan features`}>
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                plan.highlighted ? 'bg-brand-600' : 'bg-brand-100'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill={plan.highlighted ? 'white' : '#2563eb'}
                className="h-3 w-3"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span
              className={`text-sm ${
                plan.highlighted ? 'text-brand-100' : 'text-slate-600'
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={plan.highlighted ? 'primary' : 'outline'}
        size="lg"
        className={`mt-8 w-full ${
          plan.highlighted
            ? 'bg-white text-brand-900 hover:bg-brand-50'
            : ''
        }`}
      >
        Get Started
      </Button>
    </div>
  )
}

export default function Pricing() {
  return (
    <section
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2
            id="pricing-heading"
            className="text-center text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Help Is One Click Away
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-500 sm:text-lg">
            Choose the plan that fits your needs. Start for free and upgrade when
            you are ready.
          </p>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
