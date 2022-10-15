import { getPivotIndex } from "./utils.js";


export default function quicksort(table) {
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