function tribonacci(signature, n) {
  if (n == 0) {
    return singnature = [];
  } else if (n == 1) {
    return signature = [1];
  } else if (signature.length < n) {
    signature.push(signature.slice(-3).reduce((a, b) => a + b));
    tribonacci(signature, n);
  }
  return signature
}
