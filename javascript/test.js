export function generateRandomArray(size) {
    const length = size;
    const table = Array(length).fill(0);

    table.forEach((_, i) => { table[i] = Math.floor(Math.random() * 100) });

    return table;
}