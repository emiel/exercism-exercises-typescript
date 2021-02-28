export default class Squares {
  readonly n: number;
  constructor(n: number) {
    this.n = n;
  }

  get sumOfSquares(): number {
    let sum = 0;
    for (let i = 1; i <= this.n; i++) {
      sum += i * i;
    }
    return sum;
  }

  get squareOfSum(): number {
    let sum = 0;
    for (let i = 1; i <= this.n; i++) {
      sum += i;
    }
    return sum * sum;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
