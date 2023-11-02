class TrieNode {
    public children = new Map()
    public isEnd = false
}

export class Trie {
    private root: TrieNode = new TrieNode()
    
    public add(data: string): void {
        let current = this.root

        for (const char of data) {
            if (!current.children.has(char)) current.children.set(char, new TrieNode())

            current = current.children.get(char)
        }

        current.isEnd = true
    }

    public search(data: string): boolean {
        let current = this.root

        for (const char of data) {
            if (!current.children.has(char)) return false

            current = current.children.get(char)
        }

        return current.isEnd
    }
}
