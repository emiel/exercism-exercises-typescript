class ReverseString {
  static reverse(input: string): string {
    let result = "";
    for (let idx = input.length - 1; idx >= 0; idx--) {
      result += input[idx];
    }
    return result;
  }
}

export default ReverseString;
