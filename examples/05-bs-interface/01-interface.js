"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let u1 = {
    name: 'alpha',
    age: 18,
    sayHello() {
    }
};
let u2 = {
    name: 'alpha',
    age: 18,
    sayHello() {
    }
};
function typeSum(numbers, callback) {
    let s = 0;
    numbers.forEach(n => {
        if (callback(n)) {
            s += n;
        }
    });
    return s;
}
const typeRes = typeSum([1, 2, 3, 4, 5, 6], n => n % 2 === 0);
let c1 = {
    T1: 'str',
    T2: 11,
    T3: true
};
let c2 = {
    T1: "str",
    T2: 11,
    T3: true
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
