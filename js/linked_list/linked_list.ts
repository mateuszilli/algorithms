class LinkedNode<T> {
    prev: LinkedNode<T> | null = null
    next: LinkedNode<T> | null = null

    constructor (public data: T) {}
}

export class LinkedList<T> {
    private head: LinkedNode<T> | null = null
    private tail: LinkedNode<T> | null = null
    private length: number = 0;

    insertAtHead(data: T): LinkedNode<T> {
        const linkedNode = new LinkedNode(data);
        
        if (!this.head) {
            this.head = this.tail = linkedNode
        } else {
           this.head.prev = linkedNode
           linkedNode.next = this.head
           this.head = linkedNode 
        }

        this.length++

        return linkedNode
    }

    insertAtTail(data: T): LinkedNode<T> {
        const linkedNode = new LinkedNode(data);
        
        if (!this.tail) {
            this.tail = this.head = linkedNode
        } else {
           this.tail.next = linkedNode
           linkedNode.prev = this.tail
           this.tail = linkedNode 
        }

        this.length++

        return linkedNode
    }

    removeAtHead(): T | null {
        return null;
    }

    removeAtTail(): T | null {
        return null;
    }

    size(): number {
        return this.length
    }
}
