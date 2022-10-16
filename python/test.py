from time import process_time_ns
from array_generation import generateRandomTable
from insertion_sort import insertionSort
from bubble_sort import bubbleSort
from mergesort import mergesort as mergesortA
from less_memory_mergesort import mergesort as mergesortB
from quicksort import quicksort as quicksortA
from single_array_quicksort import quicksort as quicksortB


def main() -> None:
    initial_table = generateRandomTable(10000)

    test_table = initial_table[:]
    begin = process_time_ns()
    insertionSort(test_table)
    print(f"Insertion sort                   : {process_time_ns() - begin:,} ns")

    test_table = initial_table[:]
    begin = process_time_ns()
    bubbleSort(test_table)
    print(f"Bubble sort                       : {process_time_ns() - begin:,} ns")

    test_table = initial_table[:]
    begin = process_time_ns()
    quicksortA(test_table)
    print(f"Quicksort (with more memory)      : {process_time_ns() - begin:,} ns")

    test_table = initial_table[:]
    begin = process_time_ns()
    quicksortB(test_table, 0, len(test_table) - 1)
    print(f"Quicksort (with no memory added)  : {process_time_ns() - begin:,} ns")

    test_table = initial_table[:]
    begin = process_time_ns()
    mergesortA(test_table)
    print(f"Mergesort (with 100% more memory) : {process_time_ns() - begin:,} ns")

    test_table = initial_table[:]
    begin = process_time_ns()
    mergesortB(test_table, 0, len(test_table) - 1)
    print(f"Mergesort (with 50% more memory)  : {process_time_ns() - begin:,} ns")


if __name__ == "__main__":
    main()