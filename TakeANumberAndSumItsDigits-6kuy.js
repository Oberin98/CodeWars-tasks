function sumDigPow(a, b) {
  let result = [];
  let start = a;
  while (start < b) {
    if (start === start.toString().split('').map(n => +n).reduce((a, b, index) => a + Math.pow(b, 1 + index))) result.push(start);
    start++
  }

  return result
}
