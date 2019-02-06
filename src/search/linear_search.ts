function linear_search<Value> ({
    array,
    target
}: {
    array: Value[];
    target: Value;
  }): number {

    for (let index=0; index <= array.length; index++){
        if (target == array[index]){
            return index
        }
    }
    return -1
}

export default linear_search;