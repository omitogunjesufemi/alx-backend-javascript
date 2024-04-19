export default function updateUniqueItems(mapArg) {
  if (mapArg instanceof Map) {
    mapArg.forEach((qty, fruit) => {
      if (qty === 1) {
        mapArg.set(fruit, 100);
      }
    });
  } else {
    throw new Error('Cannot process');
  }
}
