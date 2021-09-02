'use strict';

console.log('This is a test of the emergency boradcast system');

let questionsArray = [];
let userArray = [];
// let questionOrder = [];
let questionContainer = document.getElementById('question');

function storeItem() {
  let storedItems = JSON.stringify(userArray);
  localStorage.setItem('user-inputs', storedItems);
}

function getUsers() {
  let userData = JSON.parse(localStorage.getItem('user-inputs'));
  if (userData) {
    userArray = userData;
  }
}

function selectRandomProduct() {
  return Math.floor(Math.random() * (questionsArray.length));
}


function selectRandomAnswers() {
  return Math.floor(Math.random() * 4);
}


function userConstructor(name, color, score = 0) {
  this.name = name;
  this.color = color;
  this.score = score;
  userArray.push(this);

}
function questionsConstructor(category, question, answerCorrect, answerIncorrectA, answerIncorrectB, answerIncorrectC) {
  this.category = category;
  this.question = question;
  this.answerCorrect = answerCorrect;
  this.answerIncorrectA = answerIncorrectA;
  this.answerIncorrectB = answerIncorrectB;
  this.answerIncorrectC = answerIncorrectC;
  questionsArray.push(this);
}

new questionsConstructor('Action', 'What does John McClane write on the first terrorist he kills in Die Hard?', 'HO-HO-HO', 'Now it\'s a party', 'Yippee Ki-Yay', 'Merry Christmas');
new questionsConstructor('Comedy', 'What is the maximum setting for the amps for Spinal Tap?', '11', '10', 'Max', 'Loudest');
new questionsConstructor('Comedy', 'In which Pennsylvania town does Bill Murray get stuck in Groundhog Day?', 'Punxsutawney', 'Pulaski', 'Pymatuning', 'Putnam');
new questionsConstructor('SciFi', 'In which movie was the tag line "In space, no one can hear you scream."', 'Alien', 'Jason X', 'Gravity', 'Apollo 18');
new questionsConstructor('Horror', 'Who was the killer in the first Friday the 13th movie?', 'Jason\'s Mom', 'Jason', 'Camp Counselor Steve', 'A Drifter');
new questionsConstructor('Documentary', 'In Netflix\'s "Formula 1: Drive to Survive\" Series, which team won 4 Constructors Championships prior to the ascent of Lewis Hamilton and Mercedes?', 'Red Bull', 'McLaren', 'Ferrari', 'Haas');
new questionsConstructor('Documentary', 'What did Carol Baskin cover her former husband with?', 'Sardine oil', 'Olive oil', 'Motor oil', 'Vegetable oil');
new questionsConstructor('Horror', 'In the movie Get Out what item is used to hypnotize Chris?', 'Tea cup', 'Watch', 'A piece of string', 'A coin');
new questionsConstructor('Horror', 'Which is not a character in the Conjuring Universe?', 'Chucky', 'The Nun', 'La Llorona', 'Annabelle');
new questionsConstructor('Horror', 'In The Thing (1984) where was the station?', 'Antarctica', 'Greenland', 'Iceland', 'Galapagos Islands');

console.log(questionsArray);


///Randomizes the question order based on a number array...ran at the load of the page
// function QuestOrder(){
//   while(questionOrder.length < questionsArray.length){
//     let num = selectRandomProduct();
//     if (!questionOrder.includes(num)){
//       questionOrder.push(num);
//     }
//   }
// }
// console.log(questionOrder);



function renderQuestions() {
  let randomQuestion = selectRandomProduct();
  let h3 = document.createElement('h3');
//   let text = questionsArray[randomQuestion].question;
//   questionAsked.push(text);
//   console.log(text);
  h3.textContent = questionsArray[randomQuestion].question;
  questionContainer.appendChild(h3);
  console.log(questionsArray[randomQuestion].question);
  let button1 = document.createElement('button');
  let button2 = document.createElement('button');
  let button3 = document.createElement('button');
  let button4 = document.createElement('button');

// Randomizes the answer choices
  let shownAnswer = [];
  let answerArray = [];
  answerArray.push(questionsArray[randomQuestion].answerIncorrectA);
  answerArray.push(questionsArray[randomQuestion].answerIncorrectB);
  answerArray.push(questionsArray[randomQuestion].answerIncorrectC);
  answerArray.push(questionsArray[randomQuestion].answerCorrect);

  while(shownAnswer.length < 4){
    let num = answerArray[selectRandomAnswers()];
    if (!shownAnswer.includes(num)){
      shownAnswer.push(num);
    }
  }
  button1.textContent = shownAnswer[0];
  button2.textContent = shownAnswer[1];
  button3.textContent = shownAnswer[2];
  button4.textContent = shownAnswer[3];

  let answerContainer = document.getElementById('answers');

  answerContainer.appendChild(button1);
  answerContainer.appendChild(button2);
  answerContainer.appendChild(button3);
  answerContainer.appendChild(button4);


  // while (questionsAnswered.length < numberOfUniqueIndexes) {
  //     let randomProduct = selectRandomProduct();
  //     if (!questionsAnswered.includes(randomProduct)) {
  //       questionsAnswered.push(randomProduct);
  //     }
}


// QuestOrder();
renderQuestions();