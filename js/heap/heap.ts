abstract class Heap {
    protected heap: Array<number> = []

    protected abstract heapifyUp(): void
    protected abstract heapifyDown(): void
    
    protected getLeftChildIndex(parentIndex: number): number { return 2 * parentIndex + 1 }
    
    protected getRightChildIndex(parentIndex: number): number { return 2 * parentIndex + 2 }
    
    protected getParentIndex(childIndex: number): number { return Math.floor((childIndex - 1) / 2) }
    
    protected hasLeftChild(index: number): boolean { return this.getLeftChildIndex(index) < this.heap.length }
    
    protected hasRightChild(index: number): boolean { return this.getRightChildIndex(index) < this.heap.length }
    
    protected hasParent(index: number): boolean { return this.getParentIndex(index) >= 0 }
    
    protected leftChild(index: number): number { return this.heap[this.getLeftChildIndex(index)] }
    
    protected rightChild(index: number): number { return this.heap[this.getRightChildIndex(index)] }
    
    protected parent(index: number): number { return this.heap[this.getParentIndex(index)] }
    
    protected swap(indexOne: number, indexTwo: number): void {
        const temp = this.heap[indexOne]
        this.heap[indexOne] = this.heap[indexTwo]
        this.heap[indexTwo] = temp
    }
    
    public peek(): number | null {
        if (this.heap.length === 0) return null
        return this.heap[0]
    }
    
    public remove(): number | null {
        if (this.heap.length === 0) return null

        const item = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        this.heapifyDown()
        return item
    }

    public add(item: number): void {
		this.heap.push(item)
		this.heapifyUp()
	}

    public print(): void {
		let heap =`| ${this.heap[0]} |`
		for (let i = 1; i < this.heap.length; i++)
			heap += ` - ${this.heap[i]}`

		console.log(heap)
	}
}

export class MaxHeap extends Heap {
    protected heapifyUp(): void {
        let index = this.heap.length - 1
        while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
            this.swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }
    
    protected heapifyDown(): void {
        let index = 0
        while (this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index)

            if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
                largerChildIndex = this.getRightChildIndex(index)
            }

            if (this.heap[index] > this.heap[largerChildIndex]) break
            else this.swap(index, largerChildIndex)

            index = largerChildIndex
        }
    }
}
    
export class MinHeap extends Heap {
	protected heapifyUp(): void {
		let index = this.heap.length - 1
		while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
			this.swap(this.getParentIndex(index), index)
			index = this.getParentIndex(index)
		}
	}

	protected heapifyDown(): void {
		let index = 0
		while (this.hasLeftChild(index)) {
			let smallerChildIndex = this.getLeftChildIndex(index)

			if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
				smallerChildIndex = this.getRightChildIndex(index)
			}

			if (this.heap[index] < this.heap[smallerChildIndex]) break
			else this.swap(index, smallerChildIndex)

            index = smallerChildIndex
		}
	}
}
