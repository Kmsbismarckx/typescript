class NumberBinaryTreeNode {
  value: number;
  left: NumberBinaryTreeNode | undefined;
  right: NumberBinaryTreeNode | undefined;

  constructor(value: number) {
    this.value = value;
  }
}

class StringLinkedListNode {
  value: string;
  next: StringLinkedListNode | undefined;
  constructor(value: string) {
    this.value = value;
  }
}

class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | undefined;
  right: BinaryTreeNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | undefined;
  constructor(value: T) {
    this.value = value;
  }
}
