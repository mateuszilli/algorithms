import { expect, test } from "bun:test"
import { Graph } from "./graph"

const graphString = new Graph({
    A: ['B', 'D'],                          //      
    B: ['A', 'C', 'E'],                     //      A . . B . . C
    C: ['B'],                               //      .     .
    D: ['A', 'E'],                          //      .     .
    E: ['B', 'D', 'F'],                     //      D . . E . . F
    F: ['E'],                               //
});

const graphNumber = new Graph({
    0: [1, 3],                              //
    1: [0, 2, 4],                           //      0 . . 1 . . 2
    2: [1],                                 //      .     .
    3: [0, 4],                              //      .     .
    4: [1, 3, 5],                           //      3 . . 4 . . 5
    5: [4],                                 //
});

test('graph_bfs', () => {
    expect(graphString.BFS('A')).toEqual(['A', 'B', 'D', 'C', 'E', 'F'])
    expect(graphString.BFS('C')).toEqual(['C', 'B', 'A', 'E', 'D', 'F'])
    expect(graphString.BFS('F')).toEqual(['F', 'E', 'B', 'D', 'A', 'C'])
    expect(graphString.BFS('E')).toEqual(['E', 'B', 'D', 'F', 'A', 'C'])

    expect(graphNumber.BFS(0)).toEqual([0, 1, 3, 2, 4, 5])
    expect(graphNumber.BFS(2)).toEqual([2, 1, 0, 4, 3, 5])
    expect(graphNumber.BFS(5)).toEqual([5, 4, 1, 3, 0, 2])
    expect(graphNumber.BFS(4)).toEqual([4, 1, 3, 5, 0, 2])
})

test('graph_dfs', () => {
    expect(graphString.DFS('A')).toEqual(['A', 'D', 'E', 'F', 'B', 'C'])
    expect(graphString.DFS('C')).toEqual(['C', 'B', 'E', 'F', 'D', 'A'])
    expect(graphString.DFS('F')).toEqual(['F', 'E', 'D', 'A', 'B', 'C'])
    expect(graphString.DFS('E')).toEqual(['E', 'F', 'D', 'A', 'B', 'C'])

    expect(graphNumber.DFS(0)).toEqual([0, 3, 4, 5, 1, 2])
    expect(graphNumber.DFS(2)).toEqual([2, 1, 4, 5, 3, 0])
    expect(graphNumber.DFS(5)).toEqual([5, 4, 3, 0, 1, 2])
    expect(graphNumber.DFS(4)).toEqual([4, 5, 3, 0, 1, 2])
})
