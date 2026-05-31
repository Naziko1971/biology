import { healthHabits } from "../data/healthHabits";

export default function HealthHabits() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Салауатты әдеттер</h2>
      <p className="mt-1 text-sm text-slate-500">Кейін бұл бөлімге көбірек мәлімет қосуға болады</p>

      <div className="mt-5 grid gap-4">
        {healthHabits.map((habit) => (
          <div key={habit.title} className="flex gap-4 rounded-3xl bg-slate-50 p-4">
            <div className="h-fit rounded-2xl bg-white p-3 text-2xl shadow-sm">
              {habit.emoji}
            </div>
            <div>
              <p className="font-bold text-slate-900">{habit.title}</p>
              <p className="mt-1 text-sm text-slate-600">{habit.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}