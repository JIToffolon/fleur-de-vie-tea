"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Moon,
  Zap,
  Leaf,
  Sun,
  Sparkles,
  Flower2,
  Apple,
  Feather,
  Coffee,
  Flame,
  Check,
  RotateCcw,
} from "lucide-react";
import { Question } from "@/types/tea";
import { MatchResult } from "@/hooks/useTeaTest";
import ResultScreen from "./ResultScreen";

interface TestWizardProps {
  questions: Question[];
  onCancel: () => void;
  onComplete: (answers: Record<string, string>) => void;
  matchResult?: MatchResult | null;
}

// Conceptual Lucide React icons mapping with strokeWidth={1.5}
const getOptionIcon = (option: string, isSelected: boolean) => {
  const iconProps = {
    strokeWidth: 1.5,
    className: `w-5 h-5 transition-colors ${
      isSelected ? "text-[#D4AF37]" : "text-[#0F382C]"
    }`,
  };

  switch (option) {
    case "Relajarme":
      return <Moon {...iconProps} />;
    case "Energía":
      return <Zap {...iconProps} />;
    case "Digestivo":
      return <Leaf {...iconProps} />;
    case "Sí, quiero energía":
      return <Sun {...iconProps} />;
    case "No, sin cafeína":
      return <Moon {...iconProps} />;
    case "No me importa":
      return <Sparkles {...iconProps} />;
    case "Florales":
      return <Flower2 {...iconProps} />;
    case "Frutales":
      return <Apple {...iconProps} />;
    case "Herbales":
      return <Leaf {...iconProps} />;
    case "Suave":
      return <Feather {...iconProps} />;
    case "Media":
      return <Coffee {...iconProps} />;
    case "Intensa":
      return <Flame {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
};

// Subtitle labels for each step / screen
const STEP_SUBTITLES: Record<number, string> = {
  1: "Pantalla 16 • Beneficio Principal",
  2: "Pantalla 17 • Nivel de Cafeína",
  3: "Pantalla 18 • Perfil de Sabor",
  4: "Pantalla 19 • Intensidad Deseada",
};

export default function TestWizard({
  questions,
  onCancel,
  onComplete,
  matchResult,
}: TestWizardProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentStepIndex];
  const totalSteps = questions.length;
  const progressPercentage = Math.round(
    ((currentStepIndex + 1) / totalSteps) * 100
  );

  const selectedOption = answers[currentQuestion?.id];

  const handleSelectOption = (option: string) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: option };
    setAnswers(updatedAnswers);

    // Auto-advance to next step after brief delay for smooth interaction feedback
    setTimeout(() => {
      if (currentStepIndex < totalSteps - 1) {
        setCurrentStepIndex((prev) => prev + 1);
      } else {
        setIsFinished(true);
        onComplete(updatedAnswers);
      }
    }, 200);
  };

  const handleBack = () => {
    if (isFinished) {
      setIsFinished(false);
      return;
    }
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    } else {
      onCancel();
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setIsFinished(false);
  };

  // If test is completed, render Pantalla 21 (ResultScreen)
  if (isFinished && matchResult) {
    return (
      <ResultScreen matchResult={matchResult} onRestart={handleRestart} />
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="flex-1 flex flex-col justify-between p-6 max-w-md mx-auto w-full select-none">
      {/* Top Header: Back Button with Lucide ArrowLeft & Step Counter */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#0F382C] hover:text-[#D4AF37] transition-transform duration-150 active:scale-95 cursor-pointer"
          >
            <ArrowLeft strokeWidth={1.5} className="w-4 h-4 text-[#0F382C]" />
            <span>Volver</span>
          </button>
          <span className="text-xs font-semibold text-[#0F382C]/60 uppercase tracking-widest">
            Paso {currentStepIndex + 1} de {totalSteps}
          </span>
        </div>

        {/* Progress Bar (Paso 2.1) */}
        <div className="w-full h-1.5 bg-[#E5C365]/30 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-[#D4AF37] transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Question & Card Options (Pasos 2.2 a 2.5 - Pantallas 16 a 19) */}
      <div className="my-auto space-y-6">
        <div className="text-center">
          <span className="inline-block text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
            {STEP_SUBTITLES[currentStepIndex + 1] || "Asesor Virtual"}
          </span>
          <h2 className="font-serif text-2xl text-[#0F382C] font-bold">
            {currentQuestion.title}
          </h2>
        </div>

        {/* Cards container */}
        <div className="space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOption === option;

            return (
              <button
                key={option}
                onClick={() => handleSelectOption(option)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-transform duration-150 active:scale-95 flex items-center justify-between shadow-sm select-none cursor-pointer ${
                  isSelected
                    ? "bg-[#0F382C] text-[#FDFBF7] border-[#D4AF37] shadow-md"
                    : "bg-white text-[#1A2521] border-transparent hover:border-[#D4AF37]/50"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                        : "bg-[#F7F3E9] text-[#0F382C]"
                    }`}
                  >
                    {getOptionIcon(option, isSelected)}
                  </div>
                  <span className="font-sans font-medium text-base">
                    {option}
                  </span>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected
                      ? "border-[#D4AF37] bg-[#D4AF37]"
                      : "border-gray-300"
                  }`}
                >
                  {isSelected && (
                    <Check strokeWidth={2.5} className="w-3 h-3 text-[#0F382C]" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer step hint */}
      <div className="text-center mt-6 text-xs text-[#1A2521]/40">
        Elegí una opción para avanzar al siguiente paso
      </div>
    </div>
  );
}
