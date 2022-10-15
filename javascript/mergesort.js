import { switchValues } from "./utils.js";


export default function mergesort(table) {
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