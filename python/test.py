from random import randint


def generateRandomTable(size = -1):
    random_table = []
    table_length = size if size >= 0 else randint(0, 30)

    for _ in range(table_length):
        random_table.append(randint(-100, 100))

    return random_table
