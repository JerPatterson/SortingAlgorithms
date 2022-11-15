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
        pass


    def heapify(table) -> None:
        pass


    def percolateDown(hole: int):
        pass


    def sort() -> List[int]:
        pass


    def delete() -> int:
        pass


if __name__ == "__main__":
    main()