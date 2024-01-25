export interface IReadable<T> {
  get(): T;
}

export interface IIncrementable<T> {
  increment(): void;
}

interface IInputIterator<T> extends IReadable<T>, IIncrementable<T> {
  equals(other: IInputIterator<T>): boolean;
}

class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | undefined;
  constructor(value: T) {
    this.value = value;
  }
}

class LinkedListInputIterator<T> implements IInputIterator<T> {
  private node: LinkedListNode<T> | undefined;

  constructor(node: LinkedListNode<T> | undefined) {
    this.node = node;
  }

  equals(other: IInputIterator<T>): boolean {
    return this.node === (<LinkedListInputIterator<T>>other).node;
  }
  get(): T {
    if (!this.node) {
      throw Error;
    }
    return this.node.value;
  }
  increment(): void {
    if (!this.node) {
      throw Error;
    }

    this.node = this.node.next;
  }
}

const head: LinkedListNode<number> = new LinkedListNode(0);
head.next = new LinkedListNode(1);
head.next.next = new LinkedListNode(2);

let begin: IInputIterator<number> = new LinkedListInputIterator(head);
let end: IInputIterator<number> = new LinkedListInputIterator(undefined);

export interface IWritable<T> {
  set(value: T): void;
}

interface IOutputIterator<T> extends IWritable<T>, IIncrementable<T> {
  equals(other: IOutputIterator<T>): boolean;
}

class ConsoleOutputIterator<T> implements IOutputIterator<T> {
  equals(other: IOutputIterator<T>): boolean {
    return false;
  }
  set(value: T): void {
    console.log(value);
  }
  increment(): void {}
}

function map<T, U>(
  begin: IInputIterator<T>,
  end: IInputIterator<T>,
  out: IOutputIterator<U>,
  func: (value: T) => U,
) {
  while (!begin.equals(end)) {
    out.set(func(begin.get()));

    begin.increment();
    out.increment();
  }
}
