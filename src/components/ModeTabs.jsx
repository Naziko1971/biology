import { bodyData } from "../data/bodyData";

export default function ModeTabs({ activeMode, setActiveMode }) {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-3">
      {Object.entries(bodyData).map(([key, mode]) => {
        const isActive = activeMode === key;

        return (
          <button
            key={key}
            onClick={() => setActiveMode(key)}
            className={`rounded-3xl border p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
              isActive ? "border-emerald-500 bg-white" : "border-transparent bg-white"
            }`}
          >
            <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${mode.color} p-3 text-3xl text-white`}>
              {mode.emoji}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{mode.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{mode.subtitle}</p>
          </button>
        );
      })}
    </div>
  );
}