export default class Words {
  count(phrase: string): Map<string, number> {
    return phrase
      .trim()
      .toLowerCase()
      .split(/\s+/u)
      .reduce((acc, word) => {
        return acc.set(word, (acc.get(word) ?? 0) + 1);
      }, new Map<string, number>());
  }
}
