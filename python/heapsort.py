from typing import List
from array_generation import generateRandomTable

def main():
    for _ in range(1):
        test_table = generateRandomTable(20)
        print(test_table)
        test_table = Heap.sort(Heap(), test_table)
        print(test_table)

    
class Heap:
    def __init__(self) -> None:
        self.array = []


    def heapify(self, table) -> None:
        self.array = [0] + table
        for i in range(len(table) // 2, 0, -1):
            self.percolateDown(i)

        print(self.array)


    def percolateDown(self, hole: int) -> None:
        temp = self.array[hole]

        while hole * 2 < len(self.array) - 1:
            child = hole * 2
            if child < len(self.array) - 1 and self.array[child] > self.array[child + 1]:
                child += 1
            if temp > self.array[child]:
                self.array[hole] = self.array[child]
            else:
                break
            hole = child

        self.array[hole] = temp


    def sort(self, table) -> List[int]:
        self.heapify(table)
        for i in range(len(table)):
            table[i] = self.delete()

        return table


    def delete(self) -> int:
        root = self.array[1]
        last_element = self.array[len(self.array) - 1]
        self.array = self.array[:-1]

        if len(self.array) > 2:
            self.array[1] = last_element
            self.percolateDown(1)

        return root


if __name__ == "__main__":
    main()