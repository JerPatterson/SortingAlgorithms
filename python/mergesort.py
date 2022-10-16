from array_generation import generateRandomTable


def main():
    for _ in range(15):
        test_table = generateRandomTable()
        mergesort(test_table)
        print(test_table)


def mergesort(table):
    if len(table) > 2:
        left, right = splitArray(table)

        mergesort(right)
        mergesort(left)
        mergeSortedArrays(table, left, right)

    elif len(table) == 2:
        if table[0] > table[1]:
            temp = table[0]
            table[0] = table[1]
            table[1] = temp


def splitArray(table):
    half = len(table) // 2

    return table[:half], table[half:]


def mergeSortedArrays(table, left, right):
    index = l = r = 0
    while index < len(table):
        if r == len(right):
            table[index] = left[l]
            l += 1
        elif l == len(left):
            table[index] = right[r]
            r += 1
        elif right[r] < left[l]:
            table[index] = right[r]
            r += 1
        else:
            table[index] = left[l]
            l += 1

        index += 1


if __name__ == "__main__":
    main()