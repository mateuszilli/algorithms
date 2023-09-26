import { expect, test } from "bun:test"
import { bubble_sort } from "./bubble_sort"

test("bubble_sort", () => {
    expect(bubble_sort([1])).toEqual([1])
    expect(bubble_sort([1, 3])).toEqual([1, 3])
    expect(bubble_sort([3, 1])).toEqual([1, 3])
    expect(bubble_sort([10, 1, 5, 7, 2, 3])).toEqual([1, 2, 3, 5, 7, 10])
    expect(bubble_sort([3, 1, 2, 10, 7, 5, 2])).toEqual([1, 2, 2, 3, 5, 7, 10])
    expect(bubble_sort([3, 1, 10, 2, 5, 7, 2, 1])).toEqual([1, 1, 2, 2, 3, 5, 7, 10])
    expect(bubble_sort([3, 1, 2, 5, 10, 7, 2, 11])).toEqual([1, 2, 2, 3, 5, 7, 10, 11])

    const amount = 1_000;
    const array = Array.from({length: amount}, () => Math.floor(Math.random() * amount))
    expect(bubble_sort(array)).toEqual(array.sort((a, b) => a - b))
})