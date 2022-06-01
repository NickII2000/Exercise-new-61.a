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