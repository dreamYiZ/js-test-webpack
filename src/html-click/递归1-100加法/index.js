console.log("start");

function foo(n) {
    return n? (n + foo(--n)) :n
}

console.log(foo(100));
