export const toggleArrayValue = <T>(array: T[], value: T): T[] => {
  const copy = [...array];
  const index = copy.indexOf(value);
  if (index === -1) {
    copy.push(value);
  } else {
    copy.splice(index, 1);
  }
  return copy;
};
