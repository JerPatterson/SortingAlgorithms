import basicsort from "./basicsort.js";
import { generateRandomArray } from "./test.js"
import { getPivotIndex } from "./utils.js";


function main() {
    let t1, t2;

    const array = generateRandomArray(1000);
    const copyArray = array.filter(_ => { return true; })

    t1 = performance.now();
    basicsort(copyArray);
    t2 = performance.now();
    console.log(copyArray, t2 - t1);

    t1 = performance.now();
    quicksort(array, 0, array.length - 1);
    t2 = performance.now();
    console.log(array, t2 - t1);
}


function quicksort(table) {
    if (table.length < 2) {
        return table;
    }

    const pivot_index = getPivotIndex(table.length);
    const pivot = table[pivot_index];

    const left = Array(0);
    const right = Array(0);

    for (let i = 0; i < table.length; ++i) {
        if (i != pivot_index) {
            if (table[i] <= pivot) {
                left.push(table[i]);
            }
            else {
                right.push(table[i]);
            }
        }
    }

    quicksort(left);
    quicksort(right);
    
    table = left;
    table.push(pivot);
    table.concat(right);

    return table;
}


main()