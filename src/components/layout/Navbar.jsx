import Button from '../ui/Button'

export default function Navbar({ variant = 'dark' }) {
  const isDark = variant === 'dark'

  return (
    <header
      className={`relative z-10 ${
        isDark ? 'text-white' : 'border-b border-slate-200 bg-white text-slate-800'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
          aria-label="RemoteRecruit home"
        >
          RemoteRecruit
        </a>

        <Button variant={isDark ? 'ghost' : 'outline'} size="sm">
          Log In
        </Button>
      </nav>
    </header>
  )
}
