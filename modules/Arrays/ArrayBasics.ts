class ArraysBasics {
  public static findFactorial(n: number): number {
    if (n === 1) return 1;
    return n * this.findFactorial(n - 1);
  }
}

const basics = () => {
  const factorial = ArraysBasics.findFactorial(5);
  console.log(factorial);
};

basics();
