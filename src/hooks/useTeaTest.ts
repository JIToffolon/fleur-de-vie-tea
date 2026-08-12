"use client";

import { useState, useMemo } from "react";
import teaData from "@/mocks/teaData.json";
import { Product, TeaData } from "@/types/tea";

const data = teaData as TeaData;

// Normalization map for options that don't match tag strings 1-to-1
const OPTION_TO_TAG_MAP: Record<string, string | null> = {
  "Sí, quiero energía": "Con cafeína",
  "No, sin cafeína": "Sin cafeína",
  "No me importa": null,
};

export interface MatchResult {
  winningProduct: Product;
  score: number;
  matchedTags: string[];
  allProductScores: { product: Product; score: number }[];
}

export function useTeaTest() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const setAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const resetTest = () => {
    setAnswers({});
  };

  // Convert selected option values to comparable tag strings
  const targetTags = useMemo(() => {
    const tags: string[] = [];
    Object.values(answers).forEach((option) => {
      if (option in OPTION_TO_TAG_MAP) {
        const mapped = OPTION_TO_TAG_MAP[option];
        if (mapped) tags.push(mapped);
      } else if (option) {
        tags.push(option);
      }
    });
    return tags;
  }, [answers]);

  // Matching algorithm: counts matches between targetTags and product.tags
  const matchResult = useMemo<MatchResult | null>(() => {
    if (Object.keys(answers).length === 0) return null;

    const scoredProducts = data.products.map((product) => {
      const matched = product.tags.filter((tag) => targetTags.includes(tag));
      return {
        product,
        score: matched.length,
        matchedTags: matched,
      };
    });

    // Sort by highest score first
    scoredProducts.sort((a, b) => b.score - a.score);

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
  }, [answers, targetTags]);

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
