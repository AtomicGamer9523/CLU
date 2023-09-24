import { Graph } from "./Graph.ts";

export class DepthFirstSearch {
    /** marked[v] = is there an s-v path? */
    private marked: boolean[];
    /** number of vertices connected to s */
    private count = 0;

    // single source
    public constructor(G: Graph, s: number) {
        this.marked = new Array<boolean>(G.getNumberOfVertecies());
        this.dfs(G, s);
    }

    // depth first search from v
    private dfs(G: Graph, v: number): void {
        this.count++;
        this.marked[v] = true;
        //const adj = ;
        for (const w of G.getAdj(v)) {
            if (!this.marked[w]) {
                this.dfs(G, w);
            }
        }
    }

    // is there an s-v path?
    public isMarked(v: number): boolean {
        return this.marked[v];
    }

    // number of vertices connected to s
    public getCount(): number {
        return this.count;
    }

}