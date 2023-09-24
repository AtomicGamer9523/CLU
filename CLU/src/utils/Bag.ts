import { Option, Some, None } from "types+";

export interface Bag<T> extends Iterable<T> {
    /**
     * Is this bag empty?
     * @returns {boolean} true if this bag is empty; false otherwise
    */
    isEmpty(): boolean;
    /**
     * Returns the number of items in this bag.
     * @returns {number} the number of items in this bag
    */
    size(): number;
    /**
     * Adds item to bag.
     * @param {T} item item to add to bag
     * @returns {void}
    */
    add(item: T): void;
}

export function Bag<T>(): Bag<T> {
    return new BagImpl<T>();
}

export default Bag;

class Node<T> {
    public item: T;
    public next: Option<Node<T>>;
    constructor(item: T, next: Option<Node<T>>) {
        this.item = item;
        this.next = next;
    }
}

class BagImpl<T> implements Bag<T> {
    /** Number of elements in bag */
    private N: number;
    /** beginning of bag */
    private first: Option<Node<T>>;

    public constructor() {
        this.first = None();
        this.N = 0;
    }
    
    public isEmpty(): boolean {
        return this.first.isNone();
    }

    public size(): number {
        return this.N;
    }

    public add(item: T): void {
        this.first = Some(new Node(item, this.first));
        this.N++;
        return;
    }

    [Symbol.iterator](): Iterator<T> {
        let current = this.first;
        return {
            next: () => {
                if (current.isNone()) {
                    return { done: true, value: undefined };
                } else {
                    const value = current.$.item;
                    current = current.$.next;
                    return { done: false, value };
                }
            }
        };
    }
}
