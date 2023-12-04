import colorgram as cg
import turtle as t
import random as r
#
# # Extract 6 colors from an image.
tim = t.Turtle()
tim.speed(0)

colors = cg.extract('image.jpg', 10)
t.colormode(255)


colorList = []
for i in colors:
    colorList.append((i.rgb.r, i.rgb.g, i.rgb.b))
# remove (245, 243, 238), (246, 242, 244)
colorList.pop(0)
colorList.pop(0) # explian .pop  : remove the first element
# # remove fir 2 elements
#
# #10 dot per row
#
for j in range(10):
    for i in range(10):
        randChoice = r.choice(colorList)
        tim.penup()
        tim.dot(10, randChoice)
        tim.forward(30)
    tim.backward(300)
    tim.left(90)
    tim.forward(30)
    tim.right(90)

screen = t.Screen()
screen.exitonclick()

