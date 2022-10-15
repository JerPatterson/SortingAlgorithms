import basicsort from "./basicsort.js";
import quicksort from "./quicksort.js";
import mergesort from "./mergesort.js";


function main() {
    let t1, t2;

    let mergeArray = generateRandomArray(50000);
    let quickArray = mergeArray.filter(_ => { return true; });
    const basicArray = mergeArray.filter(_ => { return true; })

    t1 = performance.now();
    basicsort(basicArray);
    t2 = performance.now();
    console.log(basicArray, t2 - t1);

    t1 = performance.now();
    quickArray = quicksort(quickArray);
    t2 = performance.now();
    console.log(quickArray, t2 - t1);
    
    t1 = performance.now();
    mergeArray = mergesort(mergeArray);
    t2 = performance.now();
    console.log(mergeArray, t2 - t1);
}


export function generateRandomArray(size) {
    const length = size;
    const table = Array(length).fill(0);

    table.forEach((_, i) => { table[i] = Math.floor(Math.random() * 100) });

    return table;
}


main();