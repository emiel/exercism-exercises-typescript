export default class RotationalCipher {
  static rotate(input: string, key: number): string {
    const rot = (ch: number, key: number): number => {
      // uppercase letters
      if (ch >= 65 && ch <= 90) {
        return ((ch - 65 + key) % 26) + 65;
      }

      // lowercase letters
      if (ch >= 97 && ch <= 122) {
        return ((ch - 97 + key) % 26) + 97;
      }

      // pass through unchanged
      return ch;
    };

    let result = "";

    for (let i = 0; i < input.length; i++) {
      const code = input.charCodeAt(i);
      result += String.fromCharCode(rot(code, key));
    }

    return result;
  }
}
