


def bracket(thebs):
    curl = []
    par = []
    sqr = []

    for i in thebs:
        if i == "{":
            curl.append(i)
        elif i == "}":
            curl.append(i)
        elif i == "(":
            par.append(i)
        elif i == ")":
            par.append(i)
        elif i == "[":
            sqr.append(i)
        elif i == "]":
            sqr.append(i)
    if len(curl) % 2 == 0:
        return True
    elif len(par) % 2 == 0:
        return True
    elif len(sqr) % 2 == 0:
        return True
    else: 
        return False
    
   




# print(bracket("{[()]}"))
print(bracket("{{(}"))
# print(bracket("[({})](]"))