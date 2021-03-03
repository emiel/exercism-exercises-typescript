type Input = (number | undefined | Input)[];

export default class FlattenArray {
  static flatten(input: Input): number[] {
    return input.reduce<number[]>((acc, value) => {
      if (typeof value === "number") {
        acc.push(value);
      } else if (Array.isArray(value)) {
        return acc.concat(FlattenArray.flatten(value));
      }
      return acc;
    }, []);
  }
}
