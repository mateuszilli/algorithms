export function quick_sort(arr: number[]): number[] {
    if (arr.length < 2) return arr

    const left: number[] = []
    const right: number[] = []
    const length = arr.length - 1
    const pivot = arr[length]

    for (let i = 0; i < length; i++) {
        if (arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i])
    }

    return [...quick_sort(left), pivot, ...quick_sort(right)]
}
