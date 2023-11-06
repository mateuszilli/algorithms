export function binary_search(arr: number[], el: number): number | null {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const guess = arr[mid]

        if (guess === el) return mid
        if (guess > el) high = mid - 1
        else low = mid + 1
    }

    return null
}
