export default class Converter {
  convert(input: number[], inputBase: number, outputBase: number): number[] {
    // Reject invalid input base
    if (inputBase < 2) {
      throw Error("Wrong input base");
    }

    // Reject invalid output base
    if (outputBase < 2 || Math.floor(outputBase) !== outputBase) {
      throw Error("Wrong output base");
    }

    // Reject invalid input
    if (input.length === 0) {
      throw Error("Input has wrong format");
    }

    // Reject input with leading zeros
    if (input.length > 1 && input[0] === 0) {
      throw Error("Input has wrong format");
    }

    // Reject negative digits and invalid digits
    input.forEach((digit) => {
      if (digit < 0 || digit >= inputBase) {
        throw Error("Input has wrong format");
      }
    });

    // Convert input to decimal
    let n = input
      .reverse()
      .reduce((acc, digit, idx) => acc + digit * inputBase ** idx, 0);

    // Handle special case where input is zero.
    if (n === 0) {
      return [0];
    }

    // Convert to output base
    const result = [];
    while (n > 0) {
      result.unshift(n % outputBase);
      n = Math.floor(n / outputBase);
    }

    return result;
  }
}
