import { expect, test } from "bun:test"
import { binary_search } from "./binary_search"

test("binary_search", () => {
    expect(binary_search([1, 3, 5, 7, 10], 11)).toBe(null)
    expect(binary_search([1, 3, 5, 7, 10], 7)).toBe(3)
    expect(binary_search([1, 3, 5, 7, 10, 42, 90, 91, 103, 111, 150], 103)).toBe(8)
})
