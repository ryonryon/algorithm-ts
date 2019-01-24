function SelectionSort(alist) {
  console.log(alist);

  var findMinVal = true;

  for (var i = 0; i <= alist.length - 1; i++) {
    findMinVal = false;

    for (var j = i + 1; j <= alist.length - 1; j++) {
      if (alist[j] < alist[i]) {
        var temp = alist[i];
        alist[i] = alist[j];
        alist[j] = temp;

        findMinVal = true;
      }
    }
    console.log(alist);

    if(!findMinVal){
        break
    }
  }
}

var alist: Array<number> = [5, 2, 6, 9, 4, 9, 12, 24, 46, 68];

SelectionSort(alist);
