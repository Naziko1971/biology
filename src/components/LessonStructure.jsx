export default function LessonStructure() {
  return (
    <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Сабақ құрылымы</h2>

      <div className="mt-5 grid gap-4 md:grid-cols-4">
        {[
          ["1", "Макетті зерттеу", "Оқушы органды таңдайды"],
          ["2", "Ақпарат алу", "Қысқа биологиялық түсінік оқиды"],
          ["3", "Кеңес", "Денсаулыққа пайдалы ұсыныс көреді"],
          ["4", "Талдау", "Өмірмен байланысты қорытынды жасайды"],
        ].map(([number, title, text]) => (
          <div key={number} className="rounded-3xl bg-gradient-to-br from-emerald-50 to-cyan-50 p-5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
              {number}
            </div>
            <p className="font-bold text-slate-900">{title}</p>
            <p className="mt-1 text-sm text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}