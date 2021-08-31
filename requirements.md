# Software Requirements

## Vision

- To create a fun way to test your movie knowledge. In a world of boredom this game will cure your ailment!! Gather important knowledge that will make you a hit a your next gathering when any topic concerning movies is raised.

## Scope

### In

- This web app will test the knowledge of its users with movie trivia questions.
- This web app will track the results of the users responses.
- Each question will be from one of five categories.
- The user will be able to compare their results to others on the leader board.

### Out

- Our website will not let the user generate their own questions.
- Our website will not let the user edit current questions.

## MVP

### Functionality

- User can submit their name.
- User is prompted with a trivia question
- User can respond to question
- A leader board is generated.

### Stretch Goals

- Allow user to choose an aviator.
- Background Image changes with question category.
- CSS changing dynamically with question progress.
- CSS Animation.
- Breaking up leader board into question categories.

## What stretch goals are you going to aim for?

- Allow user to choose an aviator.
- Background Image changes with question category.

## Functional Requirements

- A user can enter their name.
- A user can select an answer to a question.
- A user can navigate the site through the nav bar.
- A user can view results on leader board.

## Data Flow

- The user clicks on the "Begin" button. They are then taken to a page and prompted for their name. Once their name is submitted and stored in **Local Storage** they will then be taken to the trivia page. The user can then select one of five movie categories. Using a random number generator a random multiple choice question will then appear concerning that category. The user will then select an answer and a score for that question will be stored in **Local Storage**. Once the user has gone through all of the questions they will be redirected to the leader board page to view their score and peer ranking derived from the **Local Storage**.