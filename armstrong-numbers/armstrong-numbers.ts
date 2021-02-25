export default class ArmstrongNumbers {
  static isArmstrongNumber(n: number): boolean {
    if (n < 10) {
      return true;
    }

    const digits = [];
    let i = n;
    while (i > 0) {
      digits.push(i % 10);
      i = Math.floor(i / 10);
    }

    const sum = digits.reduce(
      (acc, val, _, arr) => acc + Math.pow(val, arr.length),
      0
    );

    return sum === n;
  }
}
