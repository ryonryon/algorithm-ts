function ShellSort(alist) {
    for (var gap = Math.floor(alist.length / 2) - 1;1 <= gap;gap = Math.floor(gap / 2)) {
        
        for(var i = 0;alist.length > i + gap;i++){

            if(alist[i + gap] < alist[i]){

                var temp = alist[i];
                alist[i] = alist[i + gap];
                alist[i + gap] = temp;
                console.log(alist);
            }
            for(var j = i; 0 <= j - gap; j = j - gap){

                if(alist[j] < alist[j-gap]){

                    var temp = alist[j-gap];
                    alist[j-gap] = alist[j];
                    alist[j] = temp;
                    console.log(alist);
                }else{
                    break
                }
            }
        }
    }
}

var alist: Array<number> = [5, 79, 6, 9, 4, 12, 24, 46, 68, 1, 43, 199, 5000, 533, 3, 9804, 3];
console.log(alist.length);
console.log(alist);
ShellSort(alist);