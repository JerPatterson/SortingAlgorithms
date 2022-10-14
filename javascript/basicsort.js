import { switchValues } from "./utils.js"


export default function basicsort(table) {
    let min;
    for (let i = 0; i < table.length; ++i) {
        min = i;
        for (let j = i; j < table.length; ++j) {
            if (table[min] > table[j]) {
                min = j
            }
        }
        switchValues(table, min, i);
    }
}