import { BinaryTreeNode, inOrderIterator } from "../genericDataStructures/9.3";

// console.log("10.2.2", result);

class FluentIterable<T> {
  iter: Iterable<T>;

  constructor(iter: Iterable<T>) {
    this.iter = iter;
  }

  map<U>(func: (item: T) => U): FluentIterable<U> {
    return new FluentIterable(this.mapImpl(func));
  }

  private *mapImpl<U>(func: (item: T) => U): IterableIterator<U> {
    for (const value of this.iter) {
      yield func(value as T);
    }
  }

  filter(pred: (item: T) => boolean): FluentIterable<T> {
    return new FluentIterable(this.filterImpl(pred));
  }

  private *filterImpl<T>(pred: (item: T) => boolean): IterableIterator<T> {
    for (const value of this.iter) {
      if (pred(value as T)) {
        yield value;
      }
    }
  }

  reduce(init: T, op: (x: T, y: T) => T): T {
    let result = init;

    for (const value of this.iter) {
      result = op(result, value);
    }

    return result;
  }
}

let root: BinaryTreeNode<number> = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.left.right = new BinaryTreeNode(3);
root.right = new BinaryTreeNode(4);

const result: number = new FluentIterable(inOrderIterator(root))
  .filter((value) => value % 2 === 0)
  .reduce(0, (x, y) => x + y);

console.log("10.2.2: ", result);
