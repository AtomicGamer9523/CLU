import { Option, Some, None } from "types+";

class Node<T> {
    public item: T;
    public next: Option<Node<T>>;
    constructor(item: T, next: Option<Node<T>>) {
        this.item = item;
        this.next = next;
    }
}

export class Bag<T> implements Iterable<T> {
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
