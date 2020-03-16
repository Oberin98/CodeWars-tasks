function getScore(arr) {
  const points = {
    0: 0,
    1: 40,
    2: 100,
    3: 300,
    4: 1200
  }

  let level = 0;
  let lines = 0;
  let score = 0;

  score = arr.reduce((accum, char) => {
    let result = accum + (points[char] * (level + 1));
    lines += char;
    level = Math.floor(lines / 10);
    return result
  }, 0)
  return score
}
