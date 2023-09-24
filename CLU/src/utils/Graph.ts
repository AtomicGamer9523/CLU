import Bag from "./Bag.ts";

export interface Graph {
    /**
     * Return the number of vertices in the graph.
    */
    getNumberOfVertecies(): number;

    /**
     * Return the number of edges in the graph.
    */
    getNumberOfEdges(): number;

    /**
     * Add the undirected edge v-w to graph.
     * @throws {RangeError} unless both 0 <= v < V and 0 <= w < V
    */
    addEdge(v: number, w: number): void;

    /**
     * Return the list of neighbors of vertex v as in Iterable.
     * @throws {RangeError} unless 0 <= v < V
    */
    getAdj(v: number): Iterable<number>;
}

export function Graph(V: number): Graph;
export function Graph(V: number, E: number): Graph;
export function Graph(G: Graph): Graph;
export function Graph(VorG: number | Graph, maybeE?: number): Graph {
    return new GraphImpl(VorG, maybeE);
}

export default Graph;

/** An undirected graph. */
class GraphImpl implements Graph {
    private readonly V: number;
    private E: number;
    private adj: Array<Bag<number>>;
    constructor(VorG: number | Graph, maybeE?: number) {
        const V = typeof VorG === "number" ? VorG : VorG.getNumberOfVertecies();
        if (V < 0) throw new RangeError("Number of vertices must be nonnegative");
        this.V = V;
        const E = typeof VorG === "number" ? (
            typeof maybeE !== "undefined" ? maybeE : 0
        ) : VorG.getNumberOfEdges();
        if (E < 0) throw new RangeError("Number of edges must be nonnegative");
        this.E = E;
        this.adj = new Array<Bag<number>>(V);
        for (let v = 0; v < V; v++)
            this.adj[v] = Bag<number>();
        if (typeof maybeE !== "undefined") {
            for (let i = 0; i < E; i++) {
                const v = Math.floor(Math.random() * V);
                const w = Math.floor(Math.random() * V);
                this.addEdge(v, w);
            }
            return;
        }
        if (typeof VorG !== "number") {
            for (let v = 0; v < VorG.getNumberOfVertecies(); v++) {
                // reverse so that adjacency list is in same order as original
                const reverse: number[] = [];
                for (const w of VorG.getAdj(v))
                    reverse.push(w);
                for (const w of reverse)
                    this.adj[v].add(w);
            }
        }
    }
    public getNumberOfVertecies(): number { return this.V; }
    public getNumberOfEdges(): number { return this.E; }
    public addEdge(v: number, w: number): void {
        if (v < 0 || v >= this.V) throw new RangeError();
        if (w < 0 || w >= this.V) throw new RangeError();
        this.E++;
        this.adj[v].add(w);
        this.adj[w].add(v);
    }
    public getAdj(v: number): Iterable<number> {
        if (v < 0 || v >= this.V) throw new RangeError();
        return this.adj[v];
    }
}
