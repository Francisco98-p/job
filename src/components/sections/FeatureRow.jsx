import AnimatedSection from '../ui/AnimatedSection'
import ChatMockup from '../mockups/ChatMockup'
import ChecklistMockup from '../mockups/ChecklistMockup'
import ProfileMockup from '../mockups/ProfileMockup'

const mockupComponents = {
  chat: ChatMockup,
  checklist: ChecklistMockup,
  profile: ProfileMockup,
}

export default function FeatureRow({
  label,
  title,
  description,
  imagePosition = 'right',
  mockup,
  index = 0,
}) {
  const MockupComponent = mockupComponents[mockup]
  const isImageLeft = imagePosition === 'left'

  return (
    <AnimatedSection delay={index * 0.1} className="py-12 sm:py-16 lg:py-20">
      <div
        className={`mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 lg:gap-16 lg:px-8 ${
          isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }`}
      >
        <div className="flex-1 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 sm:text-sm">
            {label}
          </span>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="flex flex-1 justify-center">
          <MockupComponent />
        </div>
      </div>
    </AnimatedSection>
  )
}
