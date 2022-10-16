import { switchValues, getPivotIndex } from "./utils.js"


export default function optimizedQuicksort(table, start, end) {
    const length = end - start + 1;

    if (length > 2) {
        switchValues(table, start - 1 + getPivotIndex(length), end);
        const pivot = table[end];

        let left = start;
        let right = end - 1;
        while (left < right) {
            while (table[left] < pivot && left < right) { ++left; }
            while (table[right] >= pivot && left < right) { --right; }

            if (left < right)
                switchValues(table, left, right);
        }

        if (table[left] < pivot)
            ++left;
        
        switchValues(table, end, left);
        optimizedQuicksort(table, start, (left - 1 > 0) ? left - 1 : 0);
        optimizedQuicksort(table, (left + 1 < end) ? left + 1 : end, end);
        return table;
    }

    else if (length == 2) {
        if (table[start] > table[end])
            switchValues(table, start, end);
    }
}