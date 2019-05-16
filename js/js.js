

function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }


// Example 1

// Create a function.
function f(x) {
    return x * x;
}

// Same function but as an arrow key (=>)
f = f(x) => x * x;

// Use the function.
f(5); // 25


// Example 2
const sum = (a, b) => a + b

const arity = sum.length
console.log(arity) // 2

// The arity of sum is 2


// Example 3
// length :: String -> Number
const length = word => word.length;
length('abcde'); //=> 5


// Example 4

let PI = 3.14;

const calculateArea = (radius, pi) => radius * radius * pi;

calculateArea(10, PI); // returns 314.0


// Example 5
const sum = (a, b) => a + b;

sum(3, sum(5, 8));

sum(3, 13);


// Example 6
let list = [1, 2, 3, 4, 5];
let accumulator = 0;

function sum(list, accumulator) {
    if (list.length == 0) {
        return accumulator;
    }

    return sum(list.slice(1), accumulator + list[0]);
}

sum(list, accumulator); // 15
list; // [1, 2, 3, 4, 5]
accumulator; // 0


//Example 7
// Something to apply
const add3 = (a, b, c) => a + b + c

// Partially applying `2` and `3` to `add3` gives you 
// a one-argument function
const fivePlus = partial(add3, 2, 3) // (c) => 2 + 3 + c

fivePlus(4) // 9


// Example 8
const sum = (a, b) => a + b

const curriedSum = (a) => (b) => a + b

curriedSum(40)(2) // 42.

const add2 = curriedSum(2) // (b) => 2 + b

add2(10) // 12


// Example 9
const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;

const doubleOperator = (f, a, b) => f(a, b) * 2;

doubleOperator(sum, 3, 1); // 8
doubleOperator(subtraction, 3, 1); // 4


// Example 10

const double = n => n.points * 2;

const doubleMap = numbers => numbers.map(double);

console.log(doubleMap([
    { name: 'ball', points: 2 },
    { name: 'coin', points: 3 },
    { name: 'candy', points: 4 }
])); // [ 4, 6, 8 ]



// Example 11
// Arrays that you want to combine
const arg1 = [1, 3]
const arg2 = [4, 5]

// combining function - must be curried for this to work
const add = (x) => (y) => x + y

const partiallyAppliedAdds = [add].ap(arg1) // [(y) => 1 + y, (y) => 3 + y]

partiallyAppliedAdds.ap(arg2) // [5, 6, 7, 8]



//Example 12
// Implementation
Array.prototype.chain = function (f) {
    return this.reduce((acc, it) => acc.concat(f(it)), [])
}

// Usage
Array.of('cat,dog', 'fish,bird').chain((a) => a.split(',')) // ['cat', 'dog', 'fish', 'bird']

// Contrast to map
Array.of('cat,dog', 'fish,bird').map((a) => a.split(',')) // [['cat', 'dog'], ['fish', 'bird']]



//////////////////////////////////////////////////////////////////////////////////////////////////////


// Aplied Functions
// Arrays that you want to combine
const arg1 = [1, 3]
const arg2 = [4, 5]

// combining function - must be curried for this to work
const add = (x) => (y) => x + y

const partiallyAppliedAdds = [add].ap(arg1) // [(y) => 1 + y, (y) => 3 + y]

partiallyAppliedAdds.ap(arg2) // [5, 6, 7, 8]



// Functors
[1, 2, 3].map(x => x) // = [1, 2, 3]

//and

const f = x => x + 1;
const g = x => x * 2;

[1, 2, 3].map(x => f(g(x))) // = [3, 5, 7]
[1, 2, 3].map(g).map(f)     // = [3, 5, 7]