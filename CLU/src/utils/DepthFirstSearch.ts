import Graph from "./Graph.ts";

interface DepthFirstSearch {
    /**
     * Is there an s-v path?
     * @param {number} v vertex
     * @returns {boolean} true if there is an s-v path; false otherwise
     * @throws {RangeError} unless 0 <= v < V
    */
    isMarked(v: number): boolean;
    /**
     * Number of vertices connected to s
     * @returns {number} number of vertices connected to s
     * @throws {RangeError} unless 0 <= v < V
    */
    getCount(): number;
}

export function DepthFirstSearch(G: Graph, s: number): DepthFirstSearch {
    return new DepthFirstSearchImpl(G, s);
}

export default DepthFirstSearch;

class DepthFirstSearchImpl implements DepthFirstSearch {
    /** marked[v] = is there an s-v path? */
    private marked: boolean[];
    /** number of vertices connected to s */
    private count = 0;
    constructor(G: Graph, s: number) {
        this.marked = new Array<boolean>(G.getNumberOfVertecies());
        this.dfs(G, s);
    }
    // depth first search from v
    private dfs(G: Graph, v: number): void {
        this.count++;
        this.marked[v] = true;
        for (const w of G.getAdj(v)) {
            if (!this.marked[w]) {
                this.dfs(G, w);
            }
        }
    }
    isMarked(v: number): boolean { return this.marked[v]; }
    getCount(): number { return this.count; }
}