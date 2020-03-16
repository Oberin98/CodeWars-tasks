function persistence(num) {
  let counter = 0;
  while (num.toString().length !== 1) {
    num = num.toString().split('').reduce((a, b) => a * b)
    counter++;
  }
  return counter;
}
