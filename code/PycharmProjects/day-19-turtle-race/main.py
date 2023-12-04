from turtle import Turtle , Screen
import random

screen = Screen() # create a screen object
screen.setup(width=500 ,height= 400)
user_ber = screen.textinput(title= "Make your bet", prompt="Which turtle will win. Enter a color: ")
color = ["red", "orange", "yellow", "green", "blue", "purple"]
y_position = [-70, -40, -10, 20, 50, 80]
all_tutle = []
is_race_on = False


for turtle_index in range(len(color)):
    new_turtle =  Turtle(shape="turtle")
    new_turtle.penup()
    new_turtle.goto(x=-230, y=y_position[turtle_index])
    new_turtle.color(color[turtle_index])
    all_tutle.append(new_turtle)
    # print( all_tutle)

if user_ber:
    is_race_on = True

while is_race_on :


    for turtle in all_tutle:
        if turtle.xcor() > 230:
            is_race_on = False
            winning_color = turtle.pencolor()
            if winning_color == user_ber:
                print( f"You've won! The {winning_color} turtle is the winner")
            else:
                print( f"You've lost! The {winning_color} turtle is the winner")

        random_distance = random.randint(0, 10)
        turtle.forward(random_distance)




screen.exitonclick()