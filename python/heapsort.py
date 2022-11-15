from typing import List
from array_generation import generateRandomTable

def main():
    for _ in range(1):
        test_table = generateRandomTable(20)
        print(test_table)
        test_table = Heap.sort(test_table)
        print(test_table)

    
class Heap:
    def __init__(self) -> None:
        self.array = []


    def heapify(self, table) -> None:
        pass


    def percolateDown(self, hole: int):
        pass


    def sort(self) -> List[int]:
        pass


    def delete(self) -> int:
        pass


if __name__ == "__main__":
    main()