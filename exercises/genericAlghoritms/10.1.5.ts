import { BinaryTreeNode, inOrderIterator } from "../genericDataStructures/9.3";
import { reduce } from "./10.1.3";
import { filter } from "./10.1.2";
import { map } from "./10.1.1";

let root: BinaryTreeNode<string> = new BinaryTreeNode("Hello");
root.left = new BinaryTreeNode("");
root.left.right = new BinaryTreeNode("World");
root.right = new BinaryTreeNode("!!!");

const iter = filter(inOrderIterator(root), (item) => {
  return item !== "";
});

const result: string = reduce(iter, "", (x, y) => {
  return x + y;
});

// console.log("NOT_EMPTY_STRING: ", result);

let root2: BinaryTreeNode<number> = new BinaryTreeNode(1);
root2.left = new BinaryTreeNode(3);
root2.left.right = new BinaryTreeNode(4);
root2.right = new BinaryTreeNode(6);
root2.right.left = new BinaryTreeNode(113);

const iter2 = filter(inOrderIterator(root2), (item) => {
  return item % 2 === 1;
});

const mapped = map(iter2, (item) => {
  return item ** 2;
});

console.log("EVEN: ", mapped?.next());
