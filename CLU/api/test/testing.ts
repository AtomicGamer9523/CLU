class Test {
    public name: string;
    public f: () => void;
    constructor(name: string, f: () => void) {
        this.name = name;this.f = f;
    }
}

const TESTS: Test[] = [];

Object.defineProperty(globalThis, "__addBaritoneTest$$", {
    value: (name: string, f: () => void) => {
        TESTS.push(new Test(name, f));
    }
});

export function runTests() {
    TESTS.forEach(test => {
        try {
            test.f();
        } catch(e) {
            console.error(`Test ${test.name} Failed!`, e);
        }
    });
}

export function Test$(name: string, f: () => void): void {
    const gF = globalThis["__addBaritoneTest$$"];
    if(!gF) return;
    gF(name, f);
}