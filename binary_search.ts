export function binary_search(arr: number[], el: number): number | null {
    let lo = 0
    let hi = arr.length - 1

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2)
        const guess = arr[mid]

        if (guess == el)
            return mid
        
        if (guess > el)
            hi = mid - 1
        else
            lo = mid + 1

    }

    return null
}
