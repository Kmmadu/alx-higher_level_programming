#!'/usr/bin/python3

"""prints a text with 2 new lines after each of these characters: ., ? and :
"""
def text_indentation(text):
    """prints text
       Args:
           text(str): words to be printed
       Raises:
           TypeError: if text is not string
       Prints:
           no space at the beginning or at the end of each printed line
    
    """
    if not isinstance(text, str):
        raise TypeError("text must be a string")

    characters = ".?:"
    for char in text:
        print(char, end="")
        if char in characters:
            print("\n\n", end="")
