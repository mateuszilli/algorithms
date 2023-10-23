import { expect, test } from "bun:test"
import { merge_sort } from "./merge_sort"

test("merge_sort", () => {
    expect(merge_sort([1])).toEqual([1])
    expect(merge_sort([1, 3])).toEqual([1, 3])
    expect(merge_sort([3, 1])).toEqual([1, 3])
    expect(merge_sort([10, 1, 5, 7, 2, 3])).toEqual([1, 2, 3, 5, 7, 10])
    expect(merge_sort([3, 1, 2, 10, 7, 5, 2])).toEqual([1, 2, 2, 3, 5, 7, 10])
    expect(merge_sort([3, 1, 10, 2, 5, 7, 2, 1])).toEqual([1, 1, 2, 2, 3, 5, 7, 10])
    expect(merge_sort([3, 1, 2, 5, 10, 7, 2, 11])).toEqual([1, 2, 2, 3, 5, 7, 10, 11])

    const amount = 1_000_000;
    const array = Array.from({length: amount}, () => Math.floor(Math.random() * amount))
    const n_array = [...array]

    expect(merge_sort(array)).toEqual(n_array.sort((a, b) => a - b))
})
