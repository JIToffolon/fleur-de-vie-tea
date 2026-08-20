"use client";

import { useState, useMemo, useCallback } from "react";
import teaData from "@/mocks/teaData.json";
import { Product, TeaData } from "@/types/tea";

const data = teaData as TeaData;

const STORAGE_KEY = "fleur_tea_test_answers_v1";

// Question weights based on domain importance
const QUESTION_WEIGHTS: Record<string, number> = {
  q1: 2.5, // Primary Goal / Benefit (Relajarme, Energía, Digestivo)
  q2: 3.0, // Caffeine Requirement (Crucial restriction / preference)
  q3: 1.5, // Flavor Profile (Florales, Frutales, Herbales)
  q4: 1.0, // Intensity (Suave, Media, Intensa)
};

export interface MatchResult {
  winningProduct: Product;
  score: number;
  matchedTags: string[];
  allProductScores: { product: Product; score: number }[];
}

const getInitialAnswers = (): Record<string, string> => {
  if (typeof window === "undefined") return {};
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === "object") {
        return parsed;
      }
    }
  } catch {
    // Ignore storage read errors
  }
  return {};
};

export function useTeaTest() {
  const [answers, setAnswersState] = useState<Record<string, string>>(getInitialAnswers);

  // Save answers to state and sessionStorage
  const setAnswers = useCallback((newAnswers: Record<string, string>) => {
    setAnswersState(newAnswers);
    try {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers));
      }
    } catch {
      // Ignore storage write errors
    }
  }, []);

  const setAnswer = useCallback((questionId: string, value: string) => {
    setAnswersState((prev) => {
      const updated = { ...prev, [questionId]: value };
      try {
        if (typeof window !== "undefined") {
          window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        }
      } catch {
        // Ignore storage write errors
      }
      return updated;
    });
  }, []);

  const resetTest = useCallback(() => {
    setAnswersState({});
    try {
      if (typeof window !== "undefined") {
        window.sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Ignore storage write errors
    }
  }, []);

  // Matching algorithm with weighted scoring, caffeine constraint check, and tie-breaking
  const matchResult = useMemo<MatchResult | null>(() => {
    if (Object.keys(answers).length === 0) return null;

    const scoredProducts = data.products.map((product) => {
      let totalScore = 0;
      const matched: string[] = [];

      // 1. Check Question 1 (Benefit: Relajarme, Energía, Digestivo)
      const q1Answer = answers["q1"];
      if (q1Answer && product.tags.includes(q1Answer)) {
        totalScore += QUESTION_WEIGHTS.q1;
        matched.push(q1Answer);
      }

      // 2. Check Question 2 (Caffeine: "Sí, quiero energía", "No, sin cafeína", "No me importa")
      const q2Answer = answers["q2"];
      if (q2Answer) {
        if (q2Answer === "No, sin cafeína") {
          if (product.tags.includes("No, sin cafeína")) {
            totalScore += QUESTION_WEIGHTS.q2;
            matched.push("No, sin cafeína");
          } else if (product.tags.includes("Sí, quiero energía")) {
            // Strong penalty for products that contradict explicit decaf preference
            totalScore -= 10.0;
          }
        } else if (q2Answer === "Sí, quiero energía") {
          if (product.tags.includes("Sí, quiero energía")) {
            totalScore += QUESTION_WEIGHTS.q2;
            matched.push("Sí, quiero energía");
          } else if (product.tags.includes("No, sin cafeína")) {
            totalScore -= 2.0;
          }
        } else if (q2Answer === "No me importa") {
          // Neutral preference gives a minor balance point
          totalScore += 0.5;
        }
      }

      // 3. Check Question 3 (Flavor: Florales, Frutales, Herbales)
      const q3Answer = answers["q3"];
      if (q3Answer && product.tags.includes(q3Answer)) {
        totalScore += QUESTION_WEIGHTS.q3;
        matched.push(q3Answer);
      }

      // 4. Check Question 4 (Intensity: Suave, Media, Intensa)
      const q4Answer = answers["q4"];
      if (q4Answer && product.tags.includes(q4Answer)) {
        totalScore += QUESTION_WEIGHTS.q4;
        matched.push(q4Answer);
      }

      return {
        product,
        score: Math.max(0, Number(totalScore.toFixed(2))),
        matchedTags: matched,
      };
    });

    // Sort descending by score. In case of tie, prioritize higher matched tag count, then lower price for accessibility
    scoredProducts.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      if (b.matchedTags.length !== a.matchedTags.length) {
        return b.matchedTags.length - a.matchedTags.length;
      }
      return a.product.price - b.product.price;
    });

    const winner = scoredProducts[0];

    return {
      winningProduct: winner.product,
      score: winner.score,
      matchedTags: winner.matchedTags,
      allProductScores: scoredProducts.map((sp) => ({
        product: sp.product,
        score: sp.score,
      })),
    };
  }, [answers]);

  const isCompleted = Object.keys(answers).length >= data.questions.length;

  return {
    answers,
    setAnswer,
    setAnswers,
    resetTest,
    matchResult,
    isCompleted,
    questions: data.questions,
    products: data.products,
    promotions: data.promotions,
  };
}
