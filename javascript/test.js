import mergesort from "./mergesort.js";
import quicksort from "./quicksort.js";
import optimizedQuicksort from "./single_array_quicksort.js";
import basicsort from "./basicsort.js";


function main() {
    let t1, t2;

    let mergeArray = generateRandomArray(50000);
    let quickArray = mergeArray.filter(_ => { return true; });
    let quickArrayOptimized = mergeArray.filter(_ => { return true; });
    const basicArray = mergeArray.filter(_ => { return true; })

    t1 = performance.now();
    mergeArray = mergesort(mergeArray);
    t2 = performance.now();
    console.log("\nTest MERGESORT :", mergeArray, t2 - t1);

    t1 = performance.now();
    quickArray = quicksort(quickArray);
    t2 = performance.now();
    console.log("\nTest QUICKSORT (avec mémoire supplémentaire) :", quickArray, t2 - t1);

    t1 = performance.now();
    quickArrayOptimized = optimizedQuicksort(quickArrayOptimized, 0, quickArrayOptimized.length);
    t2 = performance.now();
    console.log("\nTest QUICKSORT (sans mémoire supplémentaire) :", quickArrayOptimized, t2 - t1);

    t1 = performance.now();
    basicsort(basicArray);
    t2 = performance.now();
    console.log("\nTest SELECTION-SORT :", basicArray, t2 - t1);
}


export function generateRandomArray(size) {
    const length = size;
    const table = Array(length).fill(0);

    table.forEach((_, i) => { table[i] = Math.floor(Math.random() * 100) });

    return table;
}


main();