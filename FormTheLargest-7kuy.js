function maxNumber(n) {
  return +(n.toString().split('').map(i => +i).sort((a, b) => b - a).join(''))
}
