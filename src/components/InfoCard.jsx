import { motion } from "framer-motion";

export default function InfoCard({ selectedPart }) {
  return (
    <motion.section
      key={selectedPart.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl bg-white p-6 shadow-sm"
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="rounded-2xl bg-emerald-100 p-3 text-3xl text-emerald-700">
          {selectedPart.emoji}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{selectedPart.name}</h2>
          <p className="text-sm text-slate-500">{selectedPart.label}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-500">Қысқаша ақпарат</p>
          <p className="mt-2 text-slate-800">{selectedPart.fact}</p>
        </div>

        <div className="rounded-3xl bg-emerald-50 p-4">
          <p className="text-sm font-semibold text-emerald-700">Денсаулық кеңесі</p>
          <p className="mt-2 text-emerald-900">{selectedPart.advice}</p>
        </div>
      </div>
    </motion.section>
  );
}
