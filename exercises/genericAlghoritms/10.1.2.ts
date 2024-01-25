// function filter<T>(items: T[], callback: (item: T) => boolean): T[] {
//   const result: T[] = [];
//
//   for (const item of items) {
//     if (callback(item)) {
//       result.push(item);
//     }
//   }
//
//   return result;
// }

export function* filter<T>(
  iter: Iterable<T>,
  callback: (item: T) => boolean,
): IterableIterator<T> {
  for (const value of iter) {
    if (callback(value)) {
      yield value;
    }
  }
}
