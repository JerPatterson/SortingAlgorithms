from typing import List
from array_generation import generateRandomTable


def main():
    for _ in range(15):
        test_table = generateRandomTable(10000)
        test_table = quicksort(test_table)
        print(test_table)


def quicksort(table) -> List:
    if len(table) < 2:
        return table

    pivot_index = generatePivotIndex(table)
    pivot = table[pivot_index]

    left = []
    right = []

    for i, e in enumerate(table):
        if i != pivot_index:
            if e <= pivot:
                left.append(e)
            else:
                right.append(e)

    left = quicksort(left)
    right = quicksort(right)

    table = left
    table.append(pivot)
    table.extend(right)

    return table


def generatePivotIndex(table):
    return len(table) // 2


if __name__ == "__main__":
    main()