import { BinaryTreeNode, inOrderIterator } from "../genericDataStructures/9.3";
import { reduce } from "./10.1.3";
import { filter } from "./10.1.2";

let root: BinaryTreeNode<number> = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.left.right = new BinaryTreeNode(3);
root.right = new BinaryTreeNode(4);

console.log("BEFORE: ", root);

const result: number = reduce(
  filter(inOrderIterator(root), (value) => value % 2 === 0),
  0,
  (x, y) => x + y,
);

console.log("AFTER: ", result);
