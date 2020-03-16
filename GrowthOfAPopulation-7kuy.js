function nbYear(p0, percent, aug, p) {
  let currentIhabitants = p0;
  let years = 0;
  while (currentIhabitants < p) {
    currentIhabitants += currentIhabitants / 100 * percent;
    currentIhabitants += aug;
    years++;
  }
  return years
};
