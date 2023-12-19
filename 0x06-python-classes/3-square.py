#!/usr/bin/python3

"""Represents a new class"""

class Square:
    """Defines an instance of a square"""

    def __init__(self, size=0):
        """
        Args:
        size: size of the integer
        """
        if type(size) is not int:
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size
    
    """ 
    public instance method that returns
    the area of the square
    """

    def area(self):
        return self.__size**2
