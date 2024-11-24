Whack-a-Mole Game (JavaScript)
Overview
This project implements a simple Whack-a-Mole game using HTML, CSS, and JavaScript. The game involves clicking on randomly appearing "moles" to score points. It features basic interactivity, game loops, and score tracking. The game is built for the web and can be run in any modern browser.

This game also connects to my previous experience with Java programming, specifically object-oriented design, event-driven programming, and handling user input. It demonstrates how I applied the concepts I learned from Java to a web-based game using JavaScript and its DOM manipulation capabilities.

How the Game Works
A mole appears at random positions on the screen (i.e., in holes).
The player clicks on the mole to "whack" it, which adds points to the score.
The game continues for a set duration, after which the final score is displayed.
If the player doesn't click on a mole before it disappears, no points are added.
How to Play
Open the index.html file in any modern web browser.
Wait for the mole to appear in one of the holes on the screen.
Click on the mole to score points.
Once the game ends, your total score will be displayed.
Project Files
index.html – Contains the basic HTML structure of the game.
style.css – Provides the styles for the game interface.
game.js – Contains the game logic and interactivity.
README.md – This file.
How to Run
Download the project files or clone the repository:
bash
Copy code
git clone <repository-url>
Open the index.html file in a browser to start playing.
How This Ties into Previous Java Projects
1. Object-Oriented Programming (OOP) Concepts in Java
In my previous Java projects, I applied object-oriented principles such as inheritance, polymorphism, and encapsulation to model real-world objects and behaviors in programs. In this project, I leveraged similar principles to create reusable functions and structure the game’s code efficiently. For instance:

Encapsulation: The game's state (score, mole position, etc.) is stored in variables and only modified by specific functions, ensuring that the game logic is contained within controlled areas.
Modular Design: Just like in Java, where I created classes with specific responsibilities (e.g., Car, Person, Vehicle), in this JavaScript version, I organized the game logic into different functions that handle specific tasks (e.g., updating the score, spawning the mole, resetting the game).
2. Event-Driven Programming
In many of my Java projects, I worked with event-driven programming, such as handling user inputs and interactions (e.g., buttons or key presses in Java applications). In the Whack-a-Mole game:

The game uses JavaScript event listeners (e.g., click events) to detect when the user interacts with the moles. This is similar to how I handled button clicks and input events in Java applications.
The click events are managed in the game by adding event listeners to dynamically created mole elements, mimicking the event-driven behavior seen in Java GUI applications.
3. Working with Timers and Loops
In previous Java projects, I used loops and timers to handle repetitive tasks (such as looping through a collection of objects or waiting for an event to occur after a certain amount of time). Similarly, this game uses:

A game loop that continuously checks if the player has clicked the mole, updating the game state until the game time runs out.
The setInterval function is used to control the mole’s appearance and disappearance, echoing how I handled periodic tasks in Java.
4. DOM Manipulation in JavaScript vs. Java
While I used Swing or JavaFX for GUI development in my previous Java projects, this game demonstrates how I can manipulate the DOM directly in the browser with JavaScript. Just as I updated the state of a GUI in Java (e.g., changing a label's text), I update the game interface in real-time by:

Changing the score displayed on the page.
Adding/removing moles from the screen by dynamically modifying the HTML elements using JavaScript.
Future Improvements
Add sound effects for mole appearances and hits.
Implement a timer that counts down to the end of the game.
Add multiple difficulty levels (faster mole appearances, more holes, etc.).
Implement a high score system that saves the user's best score using local storage.
License
This project is open source and available under the MIT License.

Conclusion
This small-scale Whack-a-Mole game demonstrates how I applied the concepts learned in my Java projects to create a simple, interactive web-based game. The use of OOP principles, event-driven programming, timers, and DOM manipulation has given me an opportunity to practice and extend the knowledge I gained from my Java-based applications, while also learning new concepts specific to web development.