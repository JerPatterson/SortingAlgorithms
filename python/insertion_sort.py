from array_generation import generateRandomTable


def main():
    for _ in range(15):
        test_table = generateRandomTable(15)
        insertionSort(test_table)
        print(test_table)


def insertionSort(table):
    for i in range(1, len(table)):
        temp = table[i]
        for j in reversed(range(0, i + 1)):
            if j >= 0 and temp < table[j - 1]:
                table[j] = table[j - 1]
            else:
                break
        
        table[j] = temp
        

if __name__ == "__main__":
    main()