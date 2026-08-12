"use client";

import { useState } from "react";
import { useTeaTest } from "@/hooks/useTeaTest";
import PromoBanner from "@/components/PromoBanner";
import Splash from "@/components/Splash";
import Onboarding from "@/components/Onboarding";
import TestWizard from "@/components/TestWizard";

export default function Home() {
  const {
    questions,
    promotions,
    setAnswers,
    resetTest,
    matchResult,
  } = useTeaTest();

  const [showSplash, setShowSplash] = useState(true);
  const [currentView, setCurrentView] = useState<"onboarding" | "test">(
    "onboarding"
  );

  const handleStartTest = () => {
    resetTest();
    setCurrentView("test");
  };

  const handleCompleteAnswers = (answers: Record<string, string>) => {
    setAnswers(answers);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1A2521] relative overflow-hidden">
      {/* Promotion banner at the top */}
      <PromoBanner promotions={promotions} />

      {/* Splash overlay screen (Pantalla 00) */}
      {showSplash ? (
        <Splash onStart={() => setShowSplash(false)} />
      ) : (
        <div className="flex-1 flex flex-col items-center justify-start w-full">
          {/* Header branding bar */}
          <header className="w-full bg-[#0F382C] text-[#FDFBF7] p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37] font-serif text-lg font-bold tracking-wider">
                FLEUR DE VIE
              </span>
            </div>
            <button
              onClick={() => {
                setShowSplash(true);
                setCurrentView("onboarding");
                resetTest();
              }}
              className="text-xs text-[#D4AF37] hover:underline uppercase tracking-wider font-semibold"
            >
              Inicio
            </button>
          </header>

          {currentView === "onboarding" ? (
            /* Onboarding Screen (Pantalla 02) */
            <Onboarding onStartTest={handleStartTest} />
          ) : (
            /* Test Wizard & Match Engine (Feature 2 & Feature 3) */
            <TestWizard
              questions={questions}
              onCancel={() => {
                setCurrentView("onboarding");
                resetTest();
              }}
              onComplete={handleCompleteAnswers}
              matchResult={matchResult}
            />
          )}
        </div>
      )}
    </main>
  );
}
