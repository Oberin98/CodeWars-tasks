function printerError(s) {
  let arr = s.toString().split('');
  let allDigits = arr.length;
  let errors = 0;
  for (let item of arr) {
    if (item.charCodeAt() > 'm'.charCodeAt()) {
      errors++;
    }
  }
  return `${errors}/${allDigits}`
}
