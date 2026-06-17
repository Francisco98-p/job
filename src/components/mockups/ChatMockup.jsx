export default function ChatMockup() {
  const messages = [
    { name: 'Sarah K.', role: 'Designer', side: 'left', text: 'Available for remote work!' },
    { name: 'James L.', role: 'Developer', side: 'right', text: 'Looking for full-time role' },
    { name: 'Maria G.', role: 'Marketing', side: 'left', text: 'Open to global opportunities' },
  ]

  return (
    <div
      className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
      role="img"
      aria-label="Chat interface mockup showing candidate conversations"
    >
      <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-4">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-2 text-sm font-medium text-slate-500">Messages</span>
      </div>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.name}
            className={`flex items-start gap-3 ${msg.side === 'right' ? 'flex-row-reverse' : ''}`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-600">
              {msg.name.charAt(0)}
            </div>
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2.5 ${
                msg.side === 'right'
                  ? 'rounded-tr-sm bg-brand-600 text-white'
                  : 'rounded-tl-sm bg-slate-100 text-slate-700'
              }`}
            >
              <p className="text-xs font-semibold opacity-80">{msg.name}</p>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
