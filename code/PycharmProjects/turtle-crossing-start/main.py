import time
from turtle import Screen, Turtle
from player import Player
from car_manager import CarManager
from scoreboard import Scoreboard



screen = Screen()
screen.setup(width=600, height=600)
screen.tracer(0)
player = Player()
def move_player():
    player.move_forward()
screen.onkey(move_player,"space")

a= Turtle()
a.forward(20)
screen.listen()
screen.onkey(a.forward(20),"space")

game_is_on = True
while game_is_on:
    time.sleep(.1)
    screen.update()
#  dd 