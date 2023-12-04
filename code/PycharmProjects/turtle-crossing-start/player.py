from turtle import Turtle

STARTING_POSITION = (0, -280)
MOVE_DISTANCE = 10
FINISH_LINE_Y = 280


class Player:
    def __init__(self):

        self = Turtle()
        self.penup()
        self.shape("turtle")
        self.goto(STARTING_POSITION)
        self.left(90)

    def move_forward (self):
        self.forward(MOVE_DISTANCE)
