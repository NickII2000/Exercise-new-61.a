'use strict';

function amountOfPages(summary) {
    let i = 0;
    while (summary > 0) {
        summary -= String(++i).length;
    }

    return i;
}

console.log(amountOfPages(1095));