function InsertionSort(alist) {
  for (var i = 1; i <= alist.length - 1; i++) {
    for (var j = i - 1; 0 <= j; j--) {
      if (alist[i] < alist[j]) {
        var temp = alist[i];
        alist[i] = alist[j];
        alist[j] = temp;
        i--;
      } else {
        break;
      }
    }
  }
}

var alist: Array<number> = [91, 921, 1000, 5, 2, 6, 9, 4, 9, 12, 24, 46, 68];
InsertionSort(alist);
