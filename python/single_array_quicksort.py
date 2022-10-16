from array_generation import generateRandomTable


def main():
    for _ in range(15):
        test_table = generateRandomTable(15)
        quicksort(test_table, 0, len(test_table) - 1)
        print(test_table)


def quicksort(table, start, end):
    if start < end:
        switchValues(table, end, generatePivotIndex(start, end))
        pivot = table[end]

        left = start
        right = end - 1
        while left < right:
            while table[left] < pivot and left < right:
                left += 1
            while table[right] >= pivot and left < right:
                right -= 1

            switchValues(table, left, right)
        
        if table[left] < pivot: 
            left += 1
        
        switchValues(table, end, left)
        quicksort(table, start, left - 1 if left - 1 >= 0 else 0)
        quicksort(table, left + 1 if left + 1 <= end else end, end)
        return table
        

def generatePivotIndex(start, end):
    return start + (end - start) // 2


def switchValues(table, first, second):
    temp = table[first]
    table[first] = table[second]
    table[second] = temp


if __name__ == "__main__":
    main()