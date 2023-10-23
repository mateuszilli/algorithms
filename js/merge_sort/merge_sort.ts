function merge(left: number[], right: number[]): number[] {
    let array: number[] = []

    while (left.length && right.length) {
        if (left[0] < right[0]) array.push(left.shift() as number)
        else array.push(right.shift() as number)
    }

    return [...array, ...left, ...right]
}

export function merge_sort(arr: number[]): number[] {
    if (arr.length < 2) return arr

    const mid = arr.length / 2
    const left = arr.splice(0, mid)
    return merge(merge_sort(left), merge_sort(arr))
}
