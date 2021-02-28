const _filter = <T>(collection: T[], predicate: (item: T) => boolean): T[] => {
  const result: T[] = [];

  for (const item of collection) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};
export const keep = <T>(
  collection: T[],
  predicate: (item: T) => boolean
): T[] => {
  return _filter(collection, predicate);
};

export const discard = <T>(
  collection: T[],
  predicate: (item: T) => boolean
): T[] => {
  return _filter(collection, (item) => !predicate(item));
};
