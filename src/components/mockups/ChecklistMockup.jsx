const categories = [
  'Design & Creative',
  'Development & IT',
  'Marketing & Sales',
  'Writing & Translation',
  'Admin & Support',
]

export default function ChecklistMockup() {
  return (
    <div
      className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
      role="img"
      aria-label="Job categories checklist mockup"
    >
      <h4 className="mb-4 text-lg font-bold text-slate-800">Job Categories</h4>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li
            key={category}
            className="flex items-center gap-3 rounded-xl bg-brand-50 px-4 py-3 transition-colors hover:bg-brand-100"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-sm font-medium text-slate-700">{category}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
