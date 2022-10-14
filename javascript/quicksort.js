import * as test from "./test.js"

function main() {
    let testArray = test.generateRandomArray(200);
    console.log(testArray);

    quicksort(testArray, 0, testArray.length - 1);
    console.log(testArray);
}


function quicksort(table, start, end) {
    const length = end - start + 1;

    if (length > 2) {
        switchValues(table, getPivotIndex(start, end), end);
        const pivot = table[end];

        let left = start;
        let right = end - 1;
        while (left < right) {
            while (table[left] < pivot && left < right) { ++left; }
            while (table[right] > pivot && left < right) { --right; }

            if (left < right) {
                switchValues(table, left, right);
            }
        }

        if (table[left] > pivot) {
            switchValues(table, end, left);
        }
        else {
            switchValues(table, end, ++left);
        }

        quicksort(table, start, left - 1)
        quicksort(table, left + 1, end)
        console.log(table);
    }
    
    else if (length == 2) {
        if (table[start] > table[end]) {
            switchValues(table, start, end);
        }
    }

    return table;
}


function getPivotIndex(start, end) {
    return start + Math.floor((end - start) / 2);
}


function switchValues(table, first, second) {
    let temp = table[first];
    table[first] = table[second];
    table[second] = temp;
}


function basicsort(table) {
    for (let i = 0; i < table.length; ++i) {
        for (let j = i; j < table.length; ++j) {
            if (table[i] > table[j]) {
                switchValues(table, i, j);
            }
        }
    }
}


main()