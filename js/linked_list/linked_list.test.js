import { expect, test } from "bun:test"
import { LinkedList } from "./linked_list"

test('linked_list', () => {
    const linked_list = new LinkedList()

    linked_list.insertAtHead(2)
    linked_list.insertAtTail(3)
    linked_list.insertAtTail(4)
    linked_list.insertAtHead(1)

    let listFromHeadToTail = []
    let listFromTailToHead = []
    let { head, tail } = linked_list;

    while (head && tail) {
        listFromHeadToTail.push(head.data)
        listFromTailToHead.push(tail.data)
        head = head.next
        tail = tail.prev
    }

    expect(listFromHeadToTail).toEqual([1, 2, 3, 4])
    expect(listFromTailToHead).toEqual([4, 3, 2, 1])
})