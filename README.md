# Hangman-Game
Hangman-Game - Week 3 Assignment


Overview

In this assignment, you'll create one of two possible computer games: Hangman or Psychic. These apps will run in the browser, and feature dynamically updated HTML powered by your JavaScript code.


Remember

You will be fully capable of doing this homework by the end of Saturday's class.


Before You Begin


Create a new GitHub repo called Hangman-Game or Psychic-Game, in accordance with the assignment you choose to complete. Then, clone it to your computer.
Inside your local git repository, create an index.html.
While still in your local git repo, create a directory called assets.
cd your way into the assets folder, then make three additional folders: javascript, css and images.



In the javascript folder, make a file called game.js. Use the src attribute of the script tag to link to this file, rather than embedding the code directly in your HTML document.
In the css folder, make a file called style.css.
Also in the css folder, make a file called reset.css. Paste into it the code from the Meyerweb reset stylesheet. If you opt to use Bootstrap instead of writing your own CSS, skip this step, and simply include a link to Bootstrap via CDN.
In the images folder, save whatever images you plan on using.



Push the above changes to GitHub.
Choose whichever game you'd like to build. Making the Psychic game will prove less challenging than coding Hangman. However, as the challenge of the Hangman exercise provides a more comprehensive review of this week's material, we suggest attempting that assignment first.
Note: There's no shame if you'd prefer submitting Psychic—it's still a proper challenge.
Push your selected game to Github Pages.

Watch the demo:
http://utah.bootcampcontent.com/utah-coding-bootcamp/06-2017-Class-Repository/raw/master/FSF-Content/01-Class-Content/03-javascript/02-Homework/Instructions/hangman-game-demo.mov

Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
Use key events to listen for the letters that your players will type.
Display the following on the page:
Press any key to get started!
Wins: (# of times user guessed the word correctly).


If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
As the user guesses the correct letters, reveal them: m a d o _  _ a.


Number of Guesses Remaining: (# of guesses remaining for the user).
Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
After the user wins/loses the game should automatically choose another word and make the user play it.



Hangman Game Bonuses


Play a sound or song when the user guesses their word correctly, like in our demo.
Write some stylish CSS rules to make a design that fits your game's theme.

HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
Save your whole game and its properties in an object.
Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
Don't forget to place your global variables and functions above your object.


Remember: global variables, then objects, then calls.


Definitely talk with a TA or your instructor if you get tripped up during this challenge.


A Few Tips

IMPORTANT: Whichever assignment you choose, code your game one piece at a time! Code all of your apps one piece at a time. Always code one piece at a time!

Pseudocode your program and break the app down into tiny, manageable fragments. This will make the coding process much less frustrating and a veritable Mach number faster. Otherwise, you'll be chipping away at a giant chunk of abstraction for way too many hours.



The ability to solve a large problem by treating it as a set of smaller ones is the hallmark of a strong programmer. Best start adapting this into your development routine now, to better prepare for your more complex future projects.
Remember:


Split the whole program into many distinct, pseudocoded problems.
Focus on one of the smaller problems and solve it.
Only when you solve one problem should you then move onto your next problem.


When you encounter bugs (and we all do), console.log will become your best friend. Regularly check your console to make sure your app is spitting out the right values.


As a more advanced—but more powerful—alternative, feel free to experiment with the Chrome DevTools Debugger.


Try your best to deliver a 'working/playable game' by the end of the deadline. If you're not making progress with Hangman, switch gears to the Psychic game. Contact your TA/Instructor if you're not making progress after 2 hours. We're here to help!
Substance over style! Submitting a working game matters more that making a broken app that at least looks pretty. We're focusing on game mechanics, not just on the look and feel of your app.
That said, coding a functional app that also looks pretty would be impressive.
Always commit your work and back it up with GitHub pushes. You don't want to lose hours of your work because you didn't push it to GitHub every half hour or so.


Commit often.

Turn in anything you have! Even if you don't finish, we still want to see what you were able to accomplish in the time we gave you. This will help us know what concepts we could help you with, as well as what topics we should focus on in the coming lectures.

Copyright

Coding Boot Camp  2016. All Rights Reserved.
