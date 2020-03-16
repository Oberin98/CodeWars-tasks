function accum(s) {
  let arr = s.toUpperCase().split('');
  for(let i=0; i < arr.length; i++){
    arr[i] += arr[i].toLowerCase().repeat(i)
  }

  return arr.join('-')
}
