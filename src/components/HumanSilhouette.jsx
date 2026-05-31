export default function HumanSilhouette({ activeMode }) {
  return (
    <svg viewBox="0 0 260 560" className="h-full w-full drop-shadow-sm">
      <defs>
        <linearGradient id="bodyGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="100%" stopColor="#cffafe" />
        </linearGradient>
      </defs>

      <circle cx="130" cy="55" r="42" fill="url(#bodyGradient)" stroke="#10b981" strokeWidth="3" />
      <rect x="92" y="98" width="76" height="178" rx="38" fill="url(#bodyGradient)" stroke="#10b981" strokeWidth="3" />
      <path d="M92 120 C55 150 45 225 52 290" fill="none" stroke="#10b981" strokeWidth="24" strokeLinecap="round" />
      <path d="M168 120 C205 150 215 225 208 290" fill="none" stroke="#10b981" strokeWidth="24" strokeLinecap="round" />
      <path d="M106 270 C95 340 82 430 75 520" fill="none" stroke="#10b981" strokeWidth="28" strokeLinecap="round" />
      <path d="M154 270 C165 340 178 430 185 520" fill="none" stroke="#10b981" strokeWidth="28" strokeLinecap="round" />

      {activeMode === "Органдар" && (
        <>
          <path d="M112 45 C110 25 150 25 148 48 C160 55 153 78 130 78 C107 78 100 55 112 45Z" fill="#fb7185" opacity="0.9" />
          <path d="M118 170 C105 145 80 155 85 195 C91 220 118 210 123 190Z" fill="#38bdf8" opacity="0.85" />
          <path d="M142 170 C155 145 180 155 175 195 C169 220 142 210 137 190Z" fill="#38bdf8" opacity="0.85" />
          <path d="M118 205 C130 190 150 207 140 229 C130 250 105 224 118 205Z" fill="#ef4444" opacity="0.9" />
          <ellipse cx="132" cy="265" rx="26" ry="18" fill="#f59e0b" opacity="0.9" />
        </>
      )}

      {activeMode === "Бұлшықеттер" && (
        <>
          <path d="M86 130 C62 160 60 220 64 280" stroke="#f97316" strokeWidth="8" strokeLinecap="round" />
          <path d="M174 130 C198 160 200 220 196 280" stroke="#f97316" strokeWidth="8" strokeLinecap="round" />
          <path d="M110 120 C120 150 118 235 108 270" stroke="#fb923c" strokeWidth="7" strokeLinecap="round" />
          <path d="M150 120 C140 150 142 235 152 270" stroke="#fb923c" strokeWidth="7" strokeLinecap="round" />
          <path d="M106 310 C95 370 88 430 82 510" stroke="#f97316" strokeWidth="8" strokeLinecap="round" />
          <path d="M154 310 C165 370 172 430 178 510" stroke="#f97316" strokeWidth="8" strokeLinecap="round" />
        </>
      )}

      {activeMode === "Қаңқа" && (
        <>
          <circle cx="130" cy="55" r="30" fill="none" stroke="#0284c7" strokeWidth="5" />
          <line x1="130" y1="100" x2="130" y2="275" stroke="#0284c7" strokeWidth="5" />
          <path d="M93 145 C118 130 142 130 167 145" fill="none" stroke="#0284c7" strokeWidth="5" />
          <path d="M95 175 C118 160 142 160 165 175" fill="none" stroke="#0284c7" strokeWidth="5" />
          <line x1="85" y1="130" x2="55" y2="285" stroke="#0284c7" strokeWidth="5" />
          <line x1="175" y1="130" x2="205" y2="285" stroke="#0284c7" strokeWidth="5" />
          <line x1="112" y1="275" x2="78" y2="520" stroke="#0284c7" strokeWidth="5" />
          <line x1="148" y1="275" x2="182" y2="520" stroke="#0284c7" strokeWidth="5" />
        </>
      )}
    </svg>
  );
}