import basicsort from "./basicsort.js";
import { generateRandomArray } from "./test.js"
import { getPivotIndex } from "./utils.js";


function main() {
    let t1, t2;

    let array = generateRandomArray(50000);
    const copyArray = array.filter(_ => { return true; })

    t1 = performance.now();
    basicsort(copyArray);
    t2 = performance.now();
    console.log(copyArray, t2 - t1);

    t1 = performance.now();
    array = quicksort(array);
    t2 = performance.now();
    console.log(array, t2 - t1);
}


export function quicksort(table) {
    if (table.length < 2) {
        return table;
    }

    const pivot_index = getPivotIndex(table.length);
    const pivot = table[pivot_index];

    let left = [];
    let right = [];

    for (let i = 0; i < table.length; ++i) {
        if (i != pivot_index) {
            if (table.at(i) <= pivot) {
                left.push(table.at(i));
            }
            else {
                right.push(table.at(i));
            }
        }
    }

    left = quicksort(left);
    right = quicksort(right);
    
    left.push(pivot);
    table = left.concat(right);

    return table;
}


main()