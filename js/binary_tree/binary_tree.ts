class BinaryTreeNode {
    public left: BinaryTreeNode | null = null
    public right: BinaryTreeNode | null = null

    constructor (public value: number) {}
}

export class BinaryTree {
    private root: BinaryTreeNode | null = null

    public add(data: number): BinaryTreeNode | null {
        const binaryTreeNode = new BinaryTreeNode(data)

        if (!this.root) {
            return this.root = binaryTreeNode
        } else {
            let current = this.root
            while (true) {
                if (binaryTreeNode.value === current.value) return null
                if (binaryTreeNode.value < current.value) {
                    if (!current.left) return current.left = binaryTreeNode
                    current = current.left
                }
                if (binaryTreeNode.value > current.value) {
                    if (!current.right) return current.right = binaryTreeNode
                    current = current.right
                }
            }
        }
	}


    public DFSinOrderTraversal(root = this.root): number[] {
        const result: number[] = []

        inOrderTraversal(root)

        return result
        
        function inOrderTraversal(node: BinaryTreeNode | null): void {
            if (!node) return
            if (node.left) inOrderTraversal(node.left)
            result.push(node.value)
            if (node.right) inOrderTraversal(node.right)
        }
    }
    
    public DFSpostOrderTraversal(root = this.root) {
        const result: number[] = []

        postOrderTraversal(root)

        return result

        function postOrderTraversal(node: BinaryTreeNode | null): void {
            if (!node) return
            if (node.left) postOrderTraversal(node.left)
            if (node.right) postOrderTraversal(node.right)
            result.push(node.value)
        }
    }
    
    public DFSpreOrderTraversal(root = this.root) {
        const result: number[] = []

        preOrderTraversal(root)

        return result

        function preOrderTraversal(node: BinaryTreeNode | null): void {
            if (!node) return
            result.push(node.value)
            if (node.left) preOrderTraversal(node.left)
            if (node.right) preOrderTraversal(node.right)
        }
    }

    public BFSlevelOrderTraversal(root = this.root) {
        const result: number[] = []
        const queue = [root]

        while (queue.length) {
            const node = queue.shift()

            if (!node) continue
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)

            result.push(node.value)

        }

        return result
    }
}
