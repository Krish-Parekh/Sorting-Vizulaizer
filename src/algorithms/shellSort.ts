import { AnimationArrayType } from "@/lib/types";

function runShellSort(array: number[], animations: AnimationArrayType) {
  const n = array.length;

  for (let gap = Math.floor(n / 4); gap > 0; gap = Math.floor(gap / 4)) {
    for (let i = gap; i < n; i++) {
      animations.push([[i], false]);
      const temp = array[i];
      let j;
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        animations.push([[j - gap, j], false]);
        array[j] = array[j - gap];
        animations.push([[j, array[j - gap]], true]);
      }
      array[j] = temp;
      animations.push([[j, temp], true]);
    }
  }
}

export function generateShellSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runShellSort(auxiliaryArray, animations);
  runAnimation(animations);
}
