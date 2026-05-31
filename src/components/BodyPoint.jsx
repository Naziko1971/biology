export default function BodyPoint({ part, isSelected, setSelectedPart, color }) {
  return (
    <button
      onMouseEnter={() => setSelectedPart(part)}
      onClick={() => setSelectedPart(part)}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${part.x}%`, top: `${part.y}%` }}
      aria-label={part.name}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${color} text-2xl text-white shadow-lg ring-4 ring-white transition ${
          isSelected ? "scale-125" : "hover:scale-110"
        }`}
      >
        {part.emoji}
      </span>
    </button>
  );
}
