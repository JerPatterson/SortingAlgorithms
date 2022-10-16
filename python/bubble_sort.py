from array_generation import generateRandomTable


def main():
    for _ in range(15):
        test_table = generateRandomTable(15)
        bubbleSort(test_table)
        print(test_table)


def bubbleSort(table):
    for i in range(len(table)):
        switchCount = 0
        for j in range(0, len(table) - i - 1):
            if table[j] > table[j + 1]:
                switchValues(table, j, j + 1)
                switchCount += 1

        if switchCount == 0:
            break


def switchValues(table, first, second):
    temp = table[first]
    table[first] = table[second]
    table[second] = temp


if __name__ == "__main__":
    main()