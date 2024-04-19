export default function cleanSet(set, startString) {
  const resultList = [];

  if (typeof startString !== 'string') {
    return ('');
  }

  for (const elem of set) {
    if (elem.startsWith(startString) && startString !== '') {
      resultList.push(elem.slice(3));
    }
  }

  return (resultList.join('-'));
}
