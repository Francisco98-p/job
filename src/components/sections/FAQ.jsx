import AnimatedSection from '../ui/AnimatedSection'
import { faqItems } from '../../data/faq'

export default function FAQ() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2
            id="faq-heading"
            className="text-center text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Common Questions
          </h2>

          <dl className="mt-10 space-y-8 sm:mt-12">
            {faqItems.map((item) => (
              <div key={item.id}>
                <dt className="text-lg font-bold text-slate-900">{item.question}</dt>
                <dd className="mt-2 text-base leading-relaxed text-slate-500">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors duration-300 hover:text-brand-700 hover:underline"
            >
              View all FAQs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
