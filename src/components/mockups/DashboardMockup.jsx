export default function DashboardMockup() {
  const menuItems = ['Dashboard', 'Jobs', 'Candidates', 'Messages', 'Settings']

  return (
    <div
      className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
      role="img"
      aria-label="Support dashboard mockup"
    >
      <div className="flex">
        <div className="w-36 shrink-0 bg-brand-900 p-4">
          <p className="mb-6 text-sm font-bold text-white">RemoteRecruit</p>
          <nav aria-hidden="true">
            <ul className="space-y-2">
              {menuItems.map((item, i) => (
                <li
                  key={item}
                  className={`rounded-lg px-3 py-2 text-xs font-medium ${
                    i === 0
                      ? 'bg-brand-600 text-white'
                      : 'text-brand-200 hover:bg-brand-800'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex-1 p-5">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-800">Support Center</h4>
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
              Online
            </span>
          </div>

          <div className="mb-3 grid grid-cols-2 gap-3">
            {['Open Tickets', 'Resolved', 'Avg Response', 'Satisfaction'].map(
              (label, i) => (
                <div key={label} className="rounded-lg bg-brand-50 p-3">
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="text-lg font-bold text-brand-700">
                    {[12, 48, '2h', '98%'][i]}
                  </p>
                </div>
              ),
            )}
          </div>

          <div className="space-y-2">
            {['Account setup help', 'Billing question', 'Feature request'].map(
              (ticket) => (
                <div
                  key={ticket}
                  className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2"
                >
                  <span className="text-xs text-slate-600">{ticket}</span>
                  <span className="rounded bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-600">
                    Active
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
