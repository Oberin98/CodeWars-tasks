function solution(number) {
  let arr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push(i)
    } else if (i % 3 == 0) {
      arr.push(i)
    } else if (i % 5 == 0) {
      arr.push(i)
    }
  }

  if (arr.length == 0) return 0
  else return arr.reduce((a, b) => a + b)
}
