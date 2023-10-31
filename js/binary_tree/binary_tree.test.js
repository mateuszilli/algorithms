import { expect, test } from "bun:test"
import { BinaryTree } from "./binary_tree"

const binaryTree = new BinaryTree()

binaryTree.add(4)           //            4
binaryTree.add(2)           //           / \
binaryTree.add(8)           //          /   \
binaryTree.add(6)           //         /     \
binaryTree.add(3)           //        2       8
binaryTree.add(9)           //       / \     / \
binaryTree.add(7)           //      1   3   6   9
binaryTree.add(1)           //     /       / \
binaryTree.add(5)           //    0       5   7
binaryTree.add(0)           //

test("graph_dfs", () => {
    expect(binaryTree.DFSinOrderTraversal()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(binaryTree.DFSpostOrderTraversal()).toEqual([0, 1, 3, 2, 5, 7, 6, 9, 8, 4])
    expect(binaryTree.DFSpreOrderTraversal()).toEqual([4, 2, 1, 0, 3, 8, 6, 5, 7, 9])
})

test("graph_bfs", () => {
    expect(binaryTree.BFSlevelOrderTraversal()).toEqual([4, 2, 8, 1, 3, 6, 9, 0, 5, 7])
})