import basicsort from "./basicsort.js";
import { generateRandomArray } from "./test.js"
import { switchValues } from "./utils.js";


function main() {
    let t1, t2;

    let array = generateRandomArray(50000);
    const basicArray = array.filter(_ => { return true; })

    t1 = performance.now();
    basicsort(basicArray);
    t2 = performance.now();
    console.log(basicArray, t2 - t1);

    t1 = performance.now();
    array = mergesort(array);
    t2 = performance.now();
    console.log(array, t2 - t1);
}


function mergesort(table) {
    if (table.length > 2) {
        let left = table.slice(0, Math.floor(table.length / 2));
        let right = table.slice(Math.floor(table.length / 2), table.length);
    
        left = mergesort(left);
        right = mergesort(right);
        table = mergeSortedArray(left, right);
    }
    else if (table.length == 2) {
        if (table.length == 2) {
            if (table[0] > table[1]) 
                switchValues(table, 0, 1);
        }
    }

    return table;
}


function mergeSortedArray(left, right) {
    let table = [];

    let index = 0, l = 0, r = 0;
    while (index < (left.length + right.length)) {
        if (l == left.length) {
            table.push(right.at(r));
            ++r;
        }
        else if (r == right.length) {
            table.push(left.at(l));
            ++l
        }
        else if (left.at(l) <= right.at(r)) {
            table.push(left.at(l));
            ++l;
        }
        else if (left.at(l) > right.at(r)) {
            table.push(right.at(r));
            ++r;
        }
        ++index;
    }      
    
    return table;
}


main();