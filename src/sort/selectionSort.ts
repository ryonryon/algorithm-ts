import { OnSwap } from "./event";
import { swap } from "./utility";

function SelectionSort<Value>({
  array,
  OnSwap = () => {}
}: {
  array: Value[];
  OnSwap?: OnSwap<Value>;
}): void {
  for (let i = 0; i <= array.length - 1; i++) {
    let minValIndex = i;

    for (let j = i + 1; j <= array.length - 1; j++) {
      if (array[minValIndex] > array[j]) {
        minValIndex = j;
      }
    }
    if (array[i] === array[minValIndex]) {
      continue;
    }
    swap(array,i,minValIndex,OnSwap);
  }
}

export default SelectionSort;
