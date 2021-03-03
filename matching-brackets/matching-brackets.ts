type Bracket = "{" | "}" | "[" | "]" | "(" | ")";

export default class MatchingBrackets {
  input: string;
  brackets: Bracket[];

  constructor(input: string) {
    this.input = input;
    this.brackets = [];
  }

  isPaired(): boolean {
    for (const ch of this.input) {
      switch (ch) {
        case "{":
        case "[":
        case "(":
          this.brackets.push(ch);
          break;
        case "}":
          if (this.brackets.pop() !== "{") {
            return false;
          }
          break;
        case "]":
          if (this.brackets.pop() !== "[") {
            return false;
          }
          break;
        case ")":
          if (this.brackets.pop() !== "(") {
            return false;
          }
          break;
      }
    }
    return this.brackets.length === 0;
  }
}
