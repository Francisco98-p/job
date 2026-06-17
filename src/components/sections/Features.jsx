import { features } from '../../data/features'
import FeatureRow from './FeatureRow'

export default function Features() {
  return (
    <section aria-label="Platform features">
      {features.map((feature, index) => (
        <FeatureRow key={feature.id} {...feature} index={index} />
      ))}
    </section>
  )
}
