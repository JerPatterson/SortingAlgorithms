export function switchValues(table, first, second) {
    let temp = table[first];
    table[first] = table[second];
    table[second] = temp;
}


export function getPivotIndex(length) {
    return Math.floor((length) / 2);
}