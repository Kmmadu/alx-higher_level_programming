#!/usr/bin/python3

"""a function that divides all elements of a matrix"""

def matrix_divided(matrix, div):
    """Divide all elements of a matrix
    
    Args:
        matrix (a list): the dividend
        div: the divisor
    
    Raises:
        TypeError: matrix must be a matrix (list of lists) of integers/floats
        TypeError: Each row of the matrix must have the same size
        TypeError: div must be a number
        ZeroDivisionError: division by zero
    
    Returns:
        a new matrix 
    """
    if not all(isinstance(i, (int, float)) for j in matrix for i in j):
        raise TypeError("matrix must be a matrix (list of lists) of integers/floats")

    if not all(len(i) == len(matrix[0]) for i in matrix):
        raise TypeError("Each row of the matrix must have the same size")

    if not isinstance(div, (int, float)):
        raise TypeError("div must be a number")

    if div == 0:
        raise ZeroDivisionError("division by zero")

    return [[round(i / div, 2) for i in row] for row in matrix]

