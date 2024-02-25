import { generateBubbleSortAnimationArray } from "@/algorithms/bubbleSort";
import { AnimationArrayType, SortingAlgorithmType } from "./types";
import { generateSelectionSortAnimationArray } from "@/algorithms/selectionSort";
import { generateQuickSortAnimationArray } from "@/algorithms/quickSort";
import { generateInsertionSortAnimationArray } from "@/algorithms/insertionSort";
import { generateMergeSortAnimationArray } from "@/algorithms/mergeSort";

export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export function generateRandomNumberFromInterval(
  min: number,
  max: number
): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const algorithmOptions = [
  { label: "Bubble", value: "bubble" },
  { label: "Quick", value: "quick" },
  { label: "Merge", value: "merge" },
  { label: "Insertion", value: "insertion" },
  { label: "Selection", value: "selection" },
];

export function generateAnimationArray(
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animation: AnimationArrayType) => void
) {
  if (isSorting) return;
  switch (selectedAlgorithm) {
    case "bubble":
      return generateBubbleSortAnimationArray(isSorting, array, runAnimation);
    case "quick": 
      return generateQuickSortAnimationArray(isSorting, array, runAnimation);
    case "insertion":
      return generateInsertionSortAnimationArray(isSorting, array, runAnimation);
    case "merge":
      return generateMergeSortAnimationArray(isSorting, array, runAnimation);
    case "selection": 
      return generateSelectionSortAnimationArray(isSorting, array, runAnimation);
    default:
      return;
  }
}
