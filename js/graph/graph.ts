type Vertex = number | string

export class Graph {
    private list: Set<Vertex[]>

    constructor(graph: Set<Vertex[]>) {
        this.list = graph
    }

    BFS(root: Vertex): Vertex[] {
        const visited = new Set<Vertex>()
        const queue: Vertex[] = [root]
        const result: Vertex[] = []
      
        while (queue.length) {
          const vertex = queue.shift() as Vertex
      
          if (!visited.has(vertex)) {
            visited.add(vertex)
            result.push(vertex)
      
            for (const neighbor of (this.list as any)[vertex]) {
              queue.push(neighbor)
            }
          }
        }
      
        return result
    }
    
    DFS(root: Vertex): Vertex[] {
        const visited = new Set<Vertex>()
        const stack: Vertex[] = [root]
        const result: Vertex[] = []
      
        while (stack.length) {
            const vertex = stack.pop() as Vertex
            if (!visited.has(vertex)) {
                visited.add(vertex)
                result.push(vertex)

                for (const neighbor of (this.list as any)[vertex]) {
                    stack.push(neighbor)
                }
            }
        }
      
        return result
    }
}
