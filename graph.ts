type GraphType = number | string

export class Graph {
    private list: Set<Array<GraphType>>

    constructor(graph: Set<Array<GraphType>>) {
        this.list = graph
    }

    BFS(root: GraphType): Array<GraphType> {
        const visited = new Set<GraphType>()
        const queue: Array<GraphType> = [root]
        const result: Array<GraphType> = []
      
        while (queue.length) {
          const vertex = queue.shift() as GraphType
      
          if (!visited.has(vertex)) {
            visited.add(vertex)
            result.push(vertex)
      
            for (const neighbor of this.list[vertex]) {
              queue.push(neighbor)
            }
          }
        }
      
        return result
    }
    
    DFS(root: GraphType): Array<GraphType> {
        const visited = new Set<GraphType>()
        const stack: Array<GraphType> = [root]
        const result: Array<GraphType> = []
      
        while (stack.length) {
            const vertex = stack.pop() as GraphType
            if (!visited.has(vertex)) {
                visited.add(vertex)
                result.push(vertex)

                for (const neighbor of this.list[vertex]) {
                    stack.push(neighbor)
                }
            }
        }
      
        return result
    }
}
