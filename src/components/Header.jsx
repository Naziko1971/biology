import { motion } from "framer-motion";
import { GiDna1 } from "react-icons/gi";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-600 px-6 py-10 text-white">
      <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-screen-2xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
           Биология · Жаратылыстану-ғылыми сауаттылық
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              BioHealth Explorer
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-emerald-50">
              Денсаулыққа бағытталған биологиялық білімнің маңызын интерактивті адам макеті арқылы зерттеңіз.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-2xl bg-white px-4 py-2 font-semibold text-emerald-700">
                Интерактивті макет
              </span>
              <span className="rounded-2xl bg-white/15 px-4 py-2">Органдар</span>
              <span className="rounded-2xl bg-white/15 px-4 py-2">Бұлшықеттер</span>
              <span className="rounded-2xl bg-white/15 px-4 py-2">Қаңқа</span>
            </div>
          </div>

          <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative flex h-[420px] items-center justify-center"
>
  {/* ДНҚ */}
  <motion.div
    animate={{
        y: [0, -15, 0],
    }}
    transition={{
        duration: 4,
        repeat: Infinity,
    }}
    className="relative flex h-[420px] items-center justify-center"
    >
    <img
        src="images/DNA_orbit_animated.gif"
        alt="DNA"
        className="w-[250px] drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
    />
    </motion.div>
  

  {/* Клетка 1 */}
  <motion.div
    animate={{
      y: [0, -25, 0],
      x: [0, 10, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
    }}
    className="absolute left-10 top-20 h-12 w-12 rounded-full bg-cyan-300/60 blur-sm"
  />

  {/* Клетка 2 */}
  <motion.div
    animate={{
      y: [0, 20, 0],
      x: [0, -10, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
    }}
    className="absolute right-12 top-16 h-16 w-16 rounded-full bg-emerald-300/50 blur-sm"
  />

  {/* Клетка 3 */}
  <motion.div
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="absolute bottom-16 left-24 h-10 w-10 rounded-full bg-sky-300/60 blur-sm"
  />
</motion.div>
        </div>
      </div>
    </header>
  );
}