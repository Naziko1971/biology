import { useMemo, useState } from "react";

import { bodyData } from "./data/bodyData";

import Header from "./components/Header";
import ModeTabs from "./components/ModeTabs";
import HumanModel from "./components/HumanModel";
import InfoCard from "./components/InfoCard";
import HealthHabits from "./components/HealthHabits";
import LessonStructure from "./components/LessonStructure";

export default function App() {
  const [activeMode, setActiveMode] = useState("organs");
  const [selectedPart, setSelectedPart] = useState(bodyData.organs.parts[0]);

  const mode = bodyData[activeMode];

  const currentPart = useMemo(() => {
    const partExists = mode.parts.find((part) => part.id === selectedPart.id);
    return partExists || mode.parts[0];
  }, [mode, selectedPart]);

  const handleModeChange = (modeKey) => {
    setActiveMode(modeKey);
    setSelectedPart(bodyData[modeKey].parts[0]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <LessonStructure />

      <main className="mx-auto max-w-screen-2xl px-6 py-8">
        <ModeTabs activeMode={activeMode} setActiveMode={handleModeChange} />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <HumanModel
            mode={mode}
            selectedPart={currentPart}
            setSelectedPart={setSelectedPart}
          />

          <div className="space-y-8">
            <InfoCard selectedPart={currentPart} />
            <HealthHabits />
          </div>
        </div>

        
      </main>
    </div>
  );
}