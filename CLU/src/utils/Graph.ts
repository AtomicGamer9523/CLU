import { Bag } from "./Bag.ts";

/**
 * An undirected graph.
*/
export class Graph {
    private readonly V: number;
    private E: number;
    private adj: Array<Bag<number>>;
    
    /**
     * Create an empty graph with V vertices.
     * @throws {RangeError} if V < 0
    */
    public constructor(V: number);

    /**
     * Create a random graph with V vertices and E edges.
     * Expected running time is proportional to V + E.
     * @throws {RangeError} if either V < 0 or E < 0
    */
    public constructor(V: number, E: number);

    /**
     * Copy constructor.
    */
    public constructor(G: Graph);

    constructor(VorG: number | Graph, maybeE?: number) {
        const V = typeof VorG === "number" ? VorG : VorG.V;
        if (V < 0) throw new RangeError("Number of vertices must be nonnegative");
        this.V = V;
        const E = typeof VorG === "number" ? (typeof maybeE !== "undefined" ? maybeE : 0) : VorG.E;
        if (E < 0) throw new RangeError("Number of edges must be nonnegative");
        this.E = E;
        this.adj = new Array<Bag<number>>(V);
        for (let v = 0; v < V; v++) {
            this.adj[v] = new Bag<number>();
        }

        if (typeof maybeE !== "undefined") {
            for (let i = 0; i < E; i++) {
                const v = Math.floor(Math.random() * V);
                const w = Math.floor(Math.random() * V);
                this.addEdge(v, w);
            }
            return;
        }
        if (typeof VorG !== "number") {
            for (let v = 0; v < VorG.V; v++) {
                // reverse so that adjacency list is in same order as original
                const reverse: number[] = [];
                for (const w of VorG.adj[v]) {
                    reverse.push(w);
                }
                for (const w of reverse) {
                    this.adj[v].add(w);
                }
            }
        }
    }

    /**
     * Return the number of vertices in the graph.
    */
    public getNumberOfVertecies(): number { return this.V; }

    /**
     * Return the number of edges in the graph.
    */
    public getNumberOfEdges(): number { return this.E; }


    /**
     * Add the undirected edge v-w to graph.
     * @throws {RangeError} unless both 0 <= v < V and 0 <= w < V
    */
    public addEdge(v: number, w: number): void {
        if (v < 0 || v >= this.V) throw new RangeError();
        if (w < 0 || w >= this.V) throw new RangeError();
        this.E++;
        this.adj[v].add(w);
        this.adj[w].add(v);
    }


    /**
     * Return the list of neighbors of vertex v as in Iterable.
     * @throws {RangeError} unless 0 <= v < V
    */
    public getAdj(v: number): Iterable<number> {
        if (v < 0 || v >= this.V) throw new RangeError();
        return this.adj[v];
    }
}
