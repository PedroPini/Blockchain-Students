# console.log alternative
# print("Hello World")


# Indentation **Best practise: Use 4 spaces per indentation level. Use tab

def greet(name): 
    if name:
        print("Hello, " + name)
        print("Tell me all about you!")
    else:
        print("What is your name?")

greet("Eliza")


# Semicolons are not required


# Variables
a = [5, 8, 7, 9]
print(a)
name = "John"
print(a , name)


# Casting
age = int(2)
agemultiple = age*20
nameNew = str("NewName")
print(age, type(age))
print(agemultiple, type(agemultiple))
print(nameNew, type(nameNew))


# Double or Single Variables. The two below are the same
x = "John"
x = 'John'


# Case Sensitive : a or A is seen as different!
# Ball ~= ball

Ball = 'adidas'
ball = 'adidas'
Balltype = [ball, Ball]

def balltype(Balltype):
    if (Ball == ball): 
        print("Hello, " + name + Ball + ball)
        print("Your balltypes are the same!")
    else:
        print("Your balltypes are different!")

balltype(Balltype)


# Variable nnaming

myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"


# calem case - each word except the first starts with a captial letter:
myVariableName = "John"


# Pascal Case - each word starts with a capital letter
MyVariableName = "John"


# Snake Case - each word is separated by an underscore character:
my_variable_name = "John"

fruit1, fruit2, fruit3 = "Orange", "Banana", "Cherry"
print(fruit1)
print(fruit2)
print(fruit3)


# One value to multiple variables
salad1 = salad2 = salad3 = "Lettuce"
print(salad1)
print(salad2)
print(salad3)

# Unpack the variables into python

fruits = ["apple", "banana", "cherry"]

fruit1, fruit2, fruit3 = fruits

print(fruit1)
print(fruit2)
print(fruit3)

# multiple lines assigning to a var. 
# auto break 

a = "really long text that takes forever " \
"to see on a page so it's really really long"

a = '''
type a hyge long amount of text regardless of how long it is,
the whole thing will still print
helpful for sql queries and breaking queries.
'''

print(a)


# string as an array
a = "Hello World"
print(a[1])


