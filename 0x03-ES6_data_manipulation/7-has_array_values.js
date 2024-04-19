export default function hasValuesFromArray(set, array) {
  if (Array.isArray(array)) {
    for (const elem of array) {
      if (set.has(elem) === false) {
        return (false);
      }
    }
    return (true);
  }
  return (false);
}
