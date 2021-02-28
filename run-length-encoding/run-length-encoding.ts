export default class RunLengthEncoding {
  static encode = (input: string): string => {
    if (input === "") {
      return input;
    }

    let count = 1;
    let prev = input[0];
    let result = "";

    for (let i = 1; i < input.length; i++) {
      if (input[i] !== prev) {
        result += `${count > 1 ? count : ""}${prev}`;
        count = 1;
        prev = input[i];
      } else {
        count++;
      }
    }

    result += `${count > 1 ? count : ""}${prev}`;

    return result;
  };

  static decode = (input: string): string => {
    let result = "";
    let digitBuf = "";

    const isDigit = (c: number): boolean => c >= 49 && c <= 57;

    for (let i = 0; i < input.length; i++) {
      if (isDigit(input.charCodeAt(i))) {
        digitBuf += input[i];
      } else {
        if (digitBuf !== "") {
          for (let j = 0; j < Number(digitBuf); j++) {
            result += input[i];
          }
          digitBuf = "";
        } else {
          result += input[i];
        }
      }
    }

    return result;
  };
}
