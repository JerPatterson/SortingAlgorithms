import basicsort from "./basicsort.js";
import { generateRandomArray } from "./test.js"
import { switchValues, getPivotIndex } from "./utils.js"


function main() {
    let t1, t2;

    const array = generateRandomArray(30);
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


function quicksort(table, start, end) {
    const length = end - start + 1;

    if (length > 2) {
        switchValues(table, start - 1 + getPivotIndex(length), end);
        const pivot = table[end];

        let left = start;
        let right = end - 1;
        while (left < right) {
            while (table[left] < pivot && left < right) { ++left; }
            while (table[right] > pivot && left < right) { --right; }

            if (left < right)
                switchValues(table, left, right);
        }

        if (table[left] < pivot)
            ++left;
        
        switchValues(table, end, left);
        quicksort(table, start, (left - 1 > 0) ? left - 1 : 0);
        quicksort(table, (left + 1 < end) ? left + 1 : end, end);
        return table;
    }

    else if (length == 2) {
        if (table[start] > table[end])
            switchValues(table, start, end);
    }
}


main()