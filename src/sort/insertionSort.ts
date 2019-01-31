import { OnSwap } from "./event";
import { swap } from "./utility";

function InsertionSort<Value>({
  array,
  OnSwap = () => {}
}: {
  array: Value[];
  OnSwap?: OnSwap<Value>;
}): void {
  for (var i = 1; i <= array.length - 1; i++) {
    for (var j = i - 1; 0 <= j; j--) {
      if (array[i] < array[j]) {
        swap(array, i, j, OnSwap);
        i--;
      } else {
        break;
      }
    }
  }
}

export default InsertionSort;