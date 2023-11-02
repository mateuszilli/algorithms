import { expect, test } from "bun:test"
import { Trie } from "./trie"

const trie = new Trie()

trie.add("trie")
trie.add("tree")

test("trie", () => {
    expect(trie.search("try")).toEqual(false)
    expect(trie.search("tre")).toEqual(false)
    expect(trie.search("trie")).toEqual(true)
    expect(trie.search("tree")).toEqual(true)
})