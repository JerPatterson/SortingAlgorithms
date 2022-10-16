from array_generation import generateRandomTable


def main():
    for _ in range(15):
        test_table = generateRandomTable()
        mergesort(test_table, 0, len(test_table) - 1)
        print(test_table)


def mergesort(table, start, end):
    if end - start + 1 > 2:
        middle = start + (end - start + 1) // 2
        left = table[start : middle][:]

        mergesort(left, 0, len(left) - 1)
        mergesort(table, middle, end)
        mergeSortedArrays(table, left, start, end)

    elif end - start + 1 == 2:
        if table[start] > table[end]:
            temp = table[start]
            table[start] = table[end]
            table[end] = temp


def mergeSortedArrays(table, left, start, end):
    index = start
    l = 0
    r = start + len(left)
    while index < len(table):
        if r == end + 1:
            table[index] = left[l]
            l += 1
        elif l == len(left):
            table[index] = table[r]
            r += 1
        elif table[r] < left[l]:
            table[index] = table[r]
            r += 1
        else:
            table[index] = left[l]
            l += 1

        index += 1


if __name__ == "__main__":
    main()