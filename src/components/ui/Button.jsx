const variants = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg',
  outline:
    'border-2 border-brand-600 text-brand-600 bg-white hover:bg-brand-50',
  ghost:
    'border border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm',
  'outline-light':
    'border-2 border-brand-500 text-brand-600 bg-transparent hover:bg-brand-50',
}

const sizes = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
