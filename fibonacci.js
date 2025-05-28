console.log(fibs(8));
console.log(fibsRec(8));
console.log(`Eight number of fibonacci sequence is : ${fibonacciTerms(8)}`);

function fibs(n) {
  if (n === 0) return [0];

  const sequence = [0, 1];
  if (n === 1) return sequence;
  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

function fibonacciTerms(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciTerms(n - 1) + fibonacciTerms(n - 2);
}

function fibsRec(n) {
  if (n === 0) return [0];
  if (n < 2) return [0, 1];
  const fibonacciSequence = fibRec(n - 1);
  fibonacciSequence[n] =
    fibonacciSequence[fibonacciSequence.length - 1] +
    fibonacciSequence[fibonacciSequence.length - 2];
  return fibonacciSequence;
}