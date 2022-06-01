'use strict';

function amountOfPages(summary) {
    let i = 0;
    while (summary > 0) {
        summary -= String(++i).length;
    }
    return i;
}

console.log(amountOfPages(5));
console.log(amountOfPages(25));
console.log(amountOfPages(1095));
console.log(amountOfPages(185));

function isPangram(string) {
    const string2 = Array.from(string.toUpperCase());
    const string3 = [];
    string2.forEach((element, i, arr) => {
        if (element !== ' ') {
            string3.push(element);
        }
    });

    // console.log(string3);
    // console.log(new Set(string3));
    // console.log(string3.length);
    // console.log((new Set(string3)).size);

    if ((new Set(string3)).size === 26) {
        return true;
    } else {
        return false;
    }
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
// console.log(isPangram('The quick'));
console.log(isPangram('Hello world'));


let lengthArr = 0;
function deepCount(a) {
    for (let i = 0; i < a.length; i++) {
        lengthArr++;
        if (Array.isArray(a)) {
            deepCount(a[i]);
        }
    }
    return lengthArr;
}

// console.log(deepCount([]));
// console.log(deepCount([[]]));
// console.log(deepCount([1, 2, [1, [2, 4]]]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));