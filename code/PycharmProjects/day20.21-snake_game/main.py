from turtle import Screen
import time
from snake import Snake
from food import Food
from scoreboard import Scoreboard

screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("Snake Game")
screen.tracer(0)

snake = Snake()
food = Food()
scoreboard = Scoreboard()

screen.listen() # listen for key strokes
screen.onkey(snake.up, "Up") # when up arrow key is pressed, call the up method in snake class
screen.onkey(snake.down, "Down") # when down arrow key is pressed, call the down method in snake class
screen.onkey(snake.left, "Left") # when left arrow key is pressed, call the left method in snake class
screen.onkey(snake.right, "Right") # when right arrow key is pressed, call the right method in snake class
# add grid line in background
#
is_game_on = True
while is_game_on:
    screen.update()
    time.sleep(0.1)

    snake.move()
    if snake.head.distance(food) < 15:
        food.refresh()
        scoreboard.increase_score()
        snake.extend()
#
#     # detect collision with wall
    if snake.head.xcor() > 280 or snake.head.xcor() < -280 or snake.head.ycor() > 280  or snake.head.ycor() < -280:
        screen.update()
        is_game_on = False
        scoreboard.game_over()
#
#     # detect collision with tail
    for segment in snake.segments[1:]:
        if snake.head.distance(segment) < 10:
            screen.update()
            is_game_on = False
            scoreboard.game_over()
#
screen.exitonclick()
#
