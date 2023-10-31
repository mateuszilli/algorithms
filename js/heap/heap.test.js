import { expect, test } from "bun:test"
import { MaxHeap, MinHeap } from "./heap"

test("max_heap", () => {
    var heap = new MaxHeap()

    heap.add(10)
    heap.add(15)
    heap.add(30)
    heap.add(40)
    heap.add(50)
    heap.add(100)
    heap.add(40)

    expect(heap.peek()).toEqual(100)
    expect(heap.remove()).toEqual(100)
    expect(heap.peek()).toEqual(50)
})

test("min_heap", () => {
    var heap = new MinHeap();

    heap.add(10)
    heap.add(15)
    heap.add(30)
    heap.add(40)
    heap.add(50)
    heap.add(100)
    heap.add(40)

    expect(heap.peek()).toEqual(10)
    expect(heap.remove()).toEqual(10)
    expect(heap.peek()).toEqual(15)
})
