export function switchValues(table, first, second) {
    const temp = table[first];
    table[first] = table[second];
    table[second] = temp;
}


export function getPivotIndex(length) {
    return Math.floor((length) / 2);
}