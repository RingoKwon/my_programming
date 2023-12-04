import turtle as t
import random

tim = t.Turtle()

colours = ["red", "DarkOrchid", "green", "DeepSkyBlue", "LightSeaGreen", "wheat", "SlateGray", "SeaGreen"]
tim.pensize(1)
tim.speed(0)
# fastest speed


t.colormode(255)  # Enable RGB color mode

def randomColor():
    r = random.randint(0,255)
    g = random.randint(0,255)
    b = random.randint(0,255)
    random_color = (r, g, b)
    return random_color
def sizeOfGraph(size ):
    for i in range ( int( (360/size))):
        tim.color(randomColor())
        #drar circle radiant 10
        tim.circle(50)
        #turn 10 degree
        tim.setheading(tim.heading() + size)

sizeOfGraph(21)

screen = t.Screen()
screen.exitonclick()