#!/usr/bin/python3

"""Function that prints sqaure with #"""

def print_square(size):
    """Prints size as a square
    Args:
        size(int): The integer to print as square
    Raises:
        TypeError: if size is not an integer
        TypeError: if size is float and less than 0
        ValueError: if size is less than 0

    Prints:
        square of size with #
    """
    if not isinstance(size, int):
        raise TypeError("size must be an integer")
    if size < 0:
        raise ValueError("size must be >= 0")
    
    for i in range(size):
        print('#' * size)
