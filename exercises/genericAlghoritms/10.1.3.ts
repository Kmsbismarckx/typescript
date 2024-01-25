// function reduce<T>(items: T[], init: T, callback: (x: T, y: T) => T): T {
//   let result = init;
//
//   for (const item of items) {
//     result = callback(result, item);
//   }
//
//   return result;
// }

export function reduce<T>(
  iter: Iterable<T>,
  init: T,
  callback: (x: T, y: T) => T,
): T {
  let result = init;

  for (const value of iter) {
    result = callback(result, value);
  }

  return result;
}
