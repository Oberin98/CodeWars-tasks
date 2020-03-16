function uniqueInOrder(iterible) {
  let result = [];
  for (let i = 0; i < iterible.length; i++) {
    if (iterible[i] !== iterible[i + 1]) {
      result.push(iterible[i])
    }
  }
  return result
};
