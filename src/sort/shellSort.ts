import { OnSwap } from "./event";
import { swap } from "./utility";

function ShellSort<Value>({
    array,
    OnSwap = () => {}
  }: {
    array: Value[];
    OnSwap?: OnSwap<Value>;
  }): void {
  for (
    var gap = Math.floor(array.length / 2) - 1;
    1 <= gap;
    gap = Math.floor(gap / 2)
  ) {
    for (var i = 0; array.length > i + gap; i++) {
      if (array[i + gap] < array[i]) {
        swap(array,i,i + gap,OnSwap);
      }
      for (var j = i; 0 <= j - gap; j = j - gap) {
        if (array[j] < array[j - gap]) {
          swap(array,j,j - gap,OnSwap);
        } else {
          break;
        }
      }
    }
  }
}

export default ShellSort;
