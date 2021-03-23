# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Taylor Ngo**

Time spent: **5** hours spent in total

Link to project: (https://glitch.com/edit/#!/ablaze-political-fig)

Live site: https://ablaze-political-fig.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Player can add up to 8 buttons
- [X] Player can remove buttons (minimum 2 buttons)
- [X] Player can see their score as they play
- [X] Player can enable mistakes, so the player can lose after 3 strikes.
- [X] Player can see the number of attempts they have remaining. 
- [X] Player can enable hard mode which increases playback speed 10% each turn.
- [X] Player can adjust the pattern length from 1 to 20 using the slider.
- [X] Player can enable color text on the game buttons. 

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](http://g.recordit.co/JLG2wMbYx9.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

  **How To Create Range Sliders:** https://www.w3schools.com/howto/howto_js_rangeslider.asp
  
  **CSS Colors:** https://www.w3schools.com/cssref/css_colors.asp
  
  **CSS Buttons:** https://www.w3schools.com/css/css3_buttons.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  One challenge that I encountered while creating this submission was the styling and choosing the overall theme of the project. To add more
  color buttons to the game I had to add colors that had a contrast when clicking on it. I also wanted to position my game control buttons in a
  way that was organized and easy to see. It was difficult just to pick colors from the top of my head because some colors don't have a contrast
  to them and it wasn't as simple as selecting a color and the "lighter version" of it. To help me overcome this, I used W3Schools' CSS Colors
  page and looking through all the colors to find ones that fit best. From there, I chose colors that I didn't have and their respective 
  contrasts. As for the button styling, I decided on separating the add and remove buttons and the game features. I used W3Schools' CSS Buttons
  page to help me group the buttons together neatly. I also decided on adding hovering effects to make it easier for the player to see and
  changing the button from green to red when enabling the feature. Overall, I think that styling was a challenge for myself because of the many
  ways one could've styled the page. With the help of some online resources, I believe I was able to improve my styling and make to what I believe
  are strong stylistic choices.  

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  One question that I have about web development after completing my submission is how would one organize and work with code of various technologies
  while working in a team. I would imagine that a large scale web application or even a browser game would use various different types of 
  technologies and be built my multiple people. I am curious to how they manage their large project amongst many people because not everyone may be
  familiar with all the technologies. For instance, in this project I was not familiar with the way the sounds were implemented, but the code was
  already there for myself to use. Would different people write documentation on their code pieces? Or would everyone on the team just learn 
  the technology thoroughly to avoid confusion. I think that there are multiple ways to approach this, but I want to know what the most 
  efficient and commonly used practice would be. 
  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  If I had more time to work on this project, I would want to store players' scores in their own leaderboard so they can go back and play
again and again to improve their scores. I would want to use local storage to store the players' scores in their own browser so they can
go back and see their scores. I would also want to difficulty levels where players can select between different levels which would impact
the playback speed of the sounds accordingly. To take this up a notch, if I had adequate time, I would look into storing players' scores onto
an online database where players can see other people's scores and compete against each other. I think this would give the game a really
unique and enjoyable "multiplayer" feel. 


## License

    Copyright [Taylor Ngo]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.