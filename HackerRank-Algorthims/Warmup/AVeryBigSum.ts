function aVeryBigSum(ar: number[]): number {
  // Write your code here
  let result = 0;
  ar.forEach((val) => (result += val));
  return result;
}
