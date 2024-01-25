class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | undefined;
  right: BinaryTreeNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }

  [Symbol.iterator](): Iterator<T> {
    return inOrderIterator(this);
  }
}

class LinkedListNode<T> implements Iterable<T> {
  value: T;
  next: LinkedListNode<T> | undefined;
  constructor(value: T) {
    this.value = value;
  }

  [Symbol.iterator](): Iterator<T> {
    return linkedListIterator(this);
  }
}

function printInOrder<T>(root: BinaryTreeNode<T>) {
  if (root.left !== undefined) {
    printInOrder(root.left);
  }

  console.log(root.value);

  if (root.right !== undefined) {
    printInOrder(root.right);
  }
}

let root: BinaryTreeNode<number> = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.left.right = new BinaryTreeNode(3);
root.right = new BinaryTreeNode(4);

printInOrder(root);

function printLinkedList<T>(head: LinkedListNode<T>) {
  let current: LinkedListNode<T> | undefined = head;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

let head: LinkedListNode<string> = new LinkedListNode("Hello");
head.next = new LinkedListNode("World");
head.next.next = new LinkedListNode("!!!");

printLinkedList(head);

type IteratorResult<T> = {
  done: boolean;
  value: T;
};

interface Iterator<T> {
  next(): IteratorResult<T>;
}

class BinaryTreeIterator<T> implements Iterator<T> {
  private values: T[];
  private root: BinaryTreeNode<T>;

  constructor(root: BinaryTreeNode<T>) {
    this.values = [];
    this.root = root;

    this.inOrder(root);
  }

  next(): IteratorResult<T> {
    const result: T | undefined = this.values.shift();

    if (!result) {
      return { done: true, value: this.root.value };
    }

    return { done: false, value: result };
  }

  private inOrder(node: BinaryTreeNode<T>): void {
    if (node.left !== undefined) {
      this.inOrder(node.left);
    }

    this.values.push(node.value);

    if (node.right !== undefined) {
      this.inOrder(node.right);
    }
  }
}

class LinkedListIterator<T> implements Iterator<T> {
  private head: LinkedListNode<T>;
  private current: LinkedListNode<T>;

  constructor(head: LinkedListNode<T>) {
    this.head = head;
    this.current = head;
  }

  next(): IteratorResult<T> {
    if (!this.current) {
      return { done: true, value: this.head.value };
    }

    const result: T = this.current.value;
    this.current = this.current.next;
    return { done: false, value: result };
  }
}

function print<T>(iterable: Iterable<T>) {
  for (const item of iterable) {
    console.log(item);
  }
}

function contains<T>(value: T, iterable: Iterable<T>) {
  for (const item of iterable) {
    if (item === value) {
      return true;
    }
  }
  return false;
}

interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

function* inOrderIterator<T>(root: BinaryTreeNode<T>): IterableIterator<T> {
  if (root.left) {
    for (const value of inOrderIterator(root.left)) {
      yield value;
    }
  }

  yield root.value;

  if (root.right) {
    for (const value of inOrderIterator(root.right)) {
      yield value;
    }
  }
}

function* linkedListIterator<T>(head: LinkedListNode<T>): IterableIterator<T> {
  let current: LinkedListNode<T> | undefined = head;

  while (current) {
    yield current.value;
    current = current.next;
  }
}
