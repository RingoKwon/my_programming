from turtle import Turtle , Screen

tim = Turtle() # create a turtle object
screen = Screen() # create a screen object

def move_forwards():
    tim.forward(10) # move forward 10 pixels
def move_backwards():
    tim.backward(10) # move backward 10 pixels
def turn_left():
    tim.left(10) # turn left 10 degrees
def turn_right():
    tim.right(10) # turn right 10 degrees
def turn_right2(): # study this function
    new_heading = tim.heading()-10
    tim.setheading((new_heading)) # turn right 10 degrees
def clear():
    tim.clear()
    tim.penup()
    tim.home()
    tim.pendown()

screen.listen() # listen to the keyboardr
screen.onkey(key="w", fun=move_forwards) # when the user press "w" call move_forwards function
screen.onkey(key="s", fun=move_backwards) # when the user press "s" call backward function
screen.onkey(key="a", fun=turn_left) # when the user press "a" call turn_left function
# screen.onkey(key="d", fun=turn_right) # when the user press "d" call turn_right function
screen.onkey( turn_right2, "d") # also workign
screen.onkey(clear, "c") # when the user press "c" call clear function

# The two lines of code you provided have a crucial difference in how they function due to the presence or absence of parentheses after the function name.
#
# screen.onkey(turn_right, "d"): Here, you are passing the function turn_right as an argument to the screen.onkey() method. What this means is that when the "d" key is pressed, the turn_right function will be called.
# screen.onkey(turn_right(), "d"): In this case, you're calling the function turn_right immediately, and its return value is what's passed to the screen.onkey() method. If turn_right doesn't return a function, this will not work as expected. Most likely, it will set a single action to be performed when "d" is pressed, and not call turn_right again after that.

# In the context of a screen.onkey() method, which expects a function as its first argument to be called later when an event (key press) occurs, you'd usually want to use screen.onkey(turn_right, "d"). If turn_right() is working as you mentioned, it might be because turn_right() is returning a function.


screen.exitonclick()
