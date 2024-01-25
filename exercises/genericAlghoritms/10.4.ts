// function* reverse<T>(iter: Iterable<T>): IterableIterator<T> {
//   let stack: T[] = [];
//
//   for (const value of iter) {
//     stack.push(value);
//   }
//
//   while (true) {
//     let value: T | undefined = stack.pop();
//
//     if (value === undefined) {
//       return;
//     }
//
//     yield value;
//   }
// }

function reverse<T>(values: T[]) {
  let begin: number = 0;
  let end: number = values.length;

  while (begin < end) {
    const temp: T = values[begin];
    values[begin] = values[end - 1];
    values[end - 1] = temp;

    begin++;
    end--;
  }
}
