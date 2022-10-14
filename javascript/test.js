
export function generateRandomArray(size) {
    let length = size;
    let table = Array(length).fill(0);

    table.forEach((_, i) => { table[i] = Math.floor(Math.random() * 100) });

    return table;
}