const accumulate = <T, U>(list: T[], f: (item: T) => U): U[] => {
  const result = [];
  for (const item of list) {
    result.push(f(item));
  }
  return result;
};

export default accumulate;
