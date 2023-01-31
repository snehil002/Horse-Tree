# The Horse-Tree Game
~ By Snehil Kumar

>See ss/ folder for a screenshot.

## About this App
An Online Game, that is a clone of the Chrome-Dino   
game (the game that we play when internet gets  
disconnected).

The user plays the 'Horse', while the obstacles are  
the 'Trees'.  

If the Horse is hit by the Trees, the game ends.  
If the Horse stays unhit, the user gets points.  
This score increases with time. 

There is an end to this game and there is a prize  
for the winner.

## Pre-requisite Knowledge
Every animation or video is a series of images.  
In every video frame, the screen is cleared and  
the images are moved.  
Otherwise, it will look like 'trails' of objects.
The speed of the images are such that cannot be  
perceived by the human eyes as static images but like  
a moving object.

Spritesheet:  
A spritesheet is collection of many images of a  
particular character, that are snapshots of different  
poses of the character.  

## How the App works
Horse-Tree Online Game is an animation.  

There are many game elements.  
They are - Horse, Tree, and Road.  
They are all images.  
They are used in JavaScript classes to create  
JS objects.  

These objects have attributes such as, a starting  
position on the screen, speed with which to move,  
and acceleration (if necessary).  
These are called Game Physics (similar to real life  
Physics).  

I have split a long script file into many files,  
for individual characters.  

> THE HORSE:

The Horse element, uses a spritesheet to create a  
running horse effect.  
**The horse NEVER moves horizontally.**  
The horse initially does not have any velocity.  
When the screen is tapped, the horse gets a velocity  
in the vertically upward direction.  

There is Gravity in the Game.  

Hence, the velocity is reduced and changed to downward  
direction.  
This means the Horse Jumps!  

> THE ROAD:

**There is no Road or platform**  
We create an effect like there is platform.  
The Road is an image that is placed there.  
The Horse is not allowed to be placed below that line.  
Hence, it feels like there is a Road.  

> THE TREES:

**The Trees are not standing IDLE.**  
They are moving from right to left on the screen.  
They start somewhere in the right side of the screen  
outside of visible area.  

## Challenges and Solutions:
PROBLEM:  

One challenge was where to make the Trees start moving  
from.  
Due to wrong initial position, there were many trees on  
the same spot at a time.  
Sometimes there were very less trees at one spot.  

Another challenge was how often the Trees would enter  
Game scene.  
This can make the game easy or difficult.  
This is because the Trees are the game "obstacles".  

SOLUTION:  

The solution was some trial and error.  
After some trial and error, I finally got values for  
the initial position of the Trees and for the number  
of Trees that gave a good user experience.  

## Skills Used:
HTML, CSS, JS and p5.js javascript library.

## Game is Live😃:
https://snehil002.github.io/Horse-Tree/

## Bibliography:
Learned from **The Coding Train** youtube channel:  
> https://www.youtube.com/user/shiffman

To play Chrome-Dino game, type this in the address  
bar of Google Chrome browser:  
> chrome://dino