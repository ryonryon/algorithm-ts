function string_count(str, sub){
  if (str.length < sub.length){
    return 0;
  }
  if (str.slice(0,sub.length == sub)){
    return 1 + string_count(str.slice(sub.length), sub)
  }
}
export default string_count;