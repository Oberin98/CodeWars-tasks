function isValidWalk(walk) {
  let countNS = 0;
  let countWE = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') countNS++
    else if (walk[i] === 's') countNS--
    else if (walk[i] === 'w') countWE++
    else if (walk[i] === 'e') countWE--
  }

  if (walk.length == 10 && countNS === 0 && countWE === 0) return true
  else return false
}
