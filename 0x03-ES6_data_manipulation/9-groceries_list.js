export default function groceriesList() {
  const gList = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  const groceriesMap = new Map(gList);
  return groceriesMap;
}
