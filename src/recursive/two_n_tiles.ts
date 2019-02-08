let tiles_pattern = new Map([[1,1],[2,2]])
function two_n_tiles(n){
  if(tiles_pattern.get(n)){
      return tiles_pattern[n];
  }

  tiles_pattern[n] = tiles_pattern[n-1] + tiles_pattern[n-2];

  return tiles_pattern[n];
}
