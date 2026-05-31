import BodyPoint from "./BodyPoint";

export default function HumanModel({ mode, selectedPart, setSelectedPart }) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Адам макеті</h2>
          <p className="text-sm text-slate-500">Нүктеге басыңыз немесе тышқанды апарыңыз</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
          {mode.title}
        </span>
      </div>

      <div className="relative mx-auto h-[620px] max-w-[420px] rounded-[2rem] bg-gradient-to-b from-emerald-50 to-cyan-50 p-6">
        <img
        src="/images/3.jpg"
        alt="Human Body"
        className="h-full w-full object-contain"
        />

        {mode.parts.map((part) => (
          <BodyPoint
            key={part.id}
            part={part}
            isSelected={selectedPart?.id === part.id}
            setSelectedPart={setSelectedPart}
            color={mode.color}
          />
        ))}
      </div>
    </section>
  );
}