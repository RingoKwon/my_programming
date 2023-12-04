import turtle

# Create a screen instance
screen = turtle.Screen()

# Create a turtle instance
a = turtle.Turtle()

# Define the function to move the turtle
def move_forward():
    a.forward(20)

# Set up key binding
screen.listen()  # Make the screen listen for key events
screen.onkey(move_forward, "space")  # Bind the space key to the move_forward function

# Keep the window open
screen.mainloop()
