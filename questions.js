```
GIVEN I am taking a code quiz

WHEN I click the start button
THEN a timer starts and I am presented with a question


WHEN I answer a question correctly 
*each question is an object
THEN I am presented with another question


WHEN I answer a question incorrectly
THEN time is subtracted from the clock


WHEN all questions are answered or the timer reaches 0
THEN the game is over


WHEN the game is over
THEN I can save my initials and score
```

//TODO there will be an array with objects, the objects are the questions with the answers

//TODO use data attributes to indicate whether or not its the correct answer 