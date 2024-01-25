// function map<T, U>(items: T[], callback: (item: T) => U): U[] {
//   const result: U[] = [];
//
//   for (const item of items) {
//     result.push(callback(item));
//   }
//
//   return result;
// }
//
// const log = map(["2", "3", "1", "12"], (item) => {
//   return `$Count: ${item}`;
// });
//
// console.log(log);

export function* map<T, U>(
  iter: Iterable<T>,
  callback: (item: T) => U,
): IterableIterator<U> {
  for (const value of iter) {
    yield callback(value);
  }
}
