export default function ProfileMockup() {
  return (
    <div
      className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
      role="img"
      aria-label="User profile card mockup with analytics"
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-2xl font-bold text-white">
          JD
        </div>
        <div>
          <h4 className="text-lg font-bold text-slate-800">Jane Doe</h4>
          <p className="text-sm text-slate-500">Full Stack Developer</p>
          <div className="mt-1 flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#fbbf24"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {['React', 'Node.js', 'TypeScript'].map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <button
        type="button"
        className="mb-5 w-full rounded-full bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        tabIndex={-1}
        aria-hidden="true"
      >
        Hire Me
      </button>

      <div className="rounded-xl bg-slate-50 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Profile Views
        </p>
        <div className="flex items-end gap-1.5">
          {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-brand-500 transition-all hover:bg-brand-600"
              style={{ height: `${height}px` }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
