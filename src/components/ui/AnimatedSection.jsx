import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  as: Component = 'section',
}) {
  return (
    <Component className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: variants.hidden,
          visible: {
            ...variants.visible,
            transition: { ...variants.visible.transition, delay },
          },
        }}
      >
        {children}
      </motion.div>
    </Component>
  )
}
