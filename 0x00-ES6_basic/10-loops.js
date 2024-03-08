export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  let i = 0;
  for (let idx of array) {
    idx = appendString + idx;
    newArray[i] = idx;
    i += 1;
  }

  return newArray;
}
