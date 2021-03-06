'use strict';

console.log('This is a test of the emergency boradcast system');

let questionsArray = [];
let questionOrder = [];
let promptedQuestions = [];
let questionContainer = document.getElementById('question');
let answerContainer = document.getElementById('answers');
let categoryContainer = document.querySelector('.category');

let userArray = [];

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

function QuestionsConstructor(category, question, answerCorrect, answerIncorrectA, answerIncorrectB, answerIncorrectC) {
  this.category = category;
  this.question = question;
  this.answerCorrect = answerCorrect;
  this.answerIncorrectA = answerIncorrectA;
  this.answerIncorrectB = answerIncorrectB;
  this.answerIncorrectC = answerIncorrectC;
  questionsArray.push(this);
}

new QuestionsConstructor('Action', 'What does John McClane write on the first terrorist he kills in Die Hard?', 'HO-HO-HO', 'Now it\'s a party', 'Yippee Ki-Yay', 'Merry Christmas');
new QuestionsConstructor('Comedy', 'What is the maximum setting for the amps for Spinal Tap?', '11', '10', 'Max', 'Loudest');
new QuestionsConstructor('Comedy', 'In which Pennsylvania town does Bill Murray get stuck in Groundhog Day?', 'Punxsutawney', 'Pulaski', 'Pymatuning', 'Putnam');
new QuestionsConstructor('SciFi', 'In which movie was the tag line "In space, no one can hear you scream."', 'Alien', 'Jason X', 'Gravity', 'Apollo 18');
new QuestionsConstructor('Horror', 'Who was the killer in the first Friday the 13th movie?', 'Jason\'s Mom', 'Jason', 'Camp Counselor Steve', 'A Drifter');
new QuestionsConstructor('Documentary', 'In Netflix\'s "Formula 1: Drive to Survive\" Series, which team won 4 Constructors Championships prior to the ascent of Lewis Hamilton and Mercedes?', 'Red Bull', 'McLaren', 'Ferrari', 'Haas');
new QuestionsConstructor('Documentary', 'What did Carol Baskin cover her former husband with?', 'Sardine oil', 'Olive oil', 'Motor oil', 'Vegetable oil');
new QuestionsConstructor('Horror', 'In the movie Get Out what item is used to hypnotize Chris?', 'Tea cup', 'Watch', 'A piece of string', 'A coin');
new QuestionsConstructor('Horror', 'Which is not a character in the Conjuring Universe?', 'Chucky', 'The Nun', 'La Llorona', 'Annabelle');
new QuestionsConstructor('Horror', 'In The Thing (1984) where was the station?', 'Antarctica', 'Greenland', 'Iceland', 'Galapagos Islands');
new QuestionsConstructor('SciFi', 'What is the name of the starship in Firefly?', 'Serenity', 'Firefly', 'Skyfire', 'The ship has no name');
new QuestionsConstructor('SciFi', 'Which character speaks the first line in the original 1977 Star Wars movie?', 'C3PO', 'Luke', 'Darth Vader', 'Obi Wan');
new QuestionsConstructor('SciFi', 'What is the Answer to the Ultimate Question of Life, the Universe, and Everything?', '42', 'Dolphins', 'Bureaucracy', 'Infinity');
new QuestionsConstructor('Action', 'What computer program caused the end of the world in Terminator?', 'Skynet', 'Ultron', 'Borg', 'Arachnet');
new QuestionsConstructor('Action', 'Who was originally cast to play the Predator (1987)?', 'Jean-Claude Van Damme', 'Jesse Ventura', 'Kevin Hall Peter', 'Carl Weathers');
new QuestionsConstructor('Action', 'When does a one inch punch come in handy in Kill Bill?', 'Escape being buried alive', 'Break through a brick wall', 'Rip a man\'s heart out', 'Smash the faces of 88 samurai');
new QuestionsConstructor('Comedy', 'What name appears on Fogell\'s fake ID in the 2007 movie Superbad?', 'Mclovin', 'Smith', 'Peterson', 'McDonald');
new QuestionsConstructor('Comedy', 'Whose brain did Igor bring back from the depository in Young Frankenstein?', 'Abbey Normal', 'Hans Delbruck', 'Mel Brooks', 'Frederick Frankenstein');
new QuestionsConstructor('Documentary', 'What is the most viewed ESPN documentary ever?', 'The Last Dance', 'The U', 'OJ Made in America', 'Catching Hell');
new QuestionsConstructor('Documentary', 'In what city is the last Blockbuster Video open?', 'Bend, Oregon', 'Bangor, Maine', 'Boulder, Colorado', 'Morley, Alaska');
console.log(questionsArray);

function wallpaper(category){
  let page = document.getElementById('questionpage');
  if (category === 'Horror'){
    page.style.backgroundImage = "url('images/Horror.jpg')";
  }else if(category === 'Action'){
    page.style.backgroundImage = "url('images/action.jpg')" ;
  }else if(category === 'Comedy'){
    page.style.backgroundImage = "url('images/comedy.jpg')" ;
  }else if(category === 'SciFi'){
    page.style.backgroundImage = "url('images/scifi.jpg')" ;
  }else{
    page.style.backgroundImage = "url('images/doc.png')" ;
  }
}

//Randomizes the question order based on a number array...ran at the load of the page
function questOrder(){
  while(questionOrder.length < questionsArray.length){
    let num = selectRandomProduct();
    if (!questionOrder.includes(num)){
      questionOrder.push(num);
    }
  }
}
console.log(questionOrder);

//Pushes questionsArray to empty area for question reorg
function questionAsked(){
  for(let i = 0; i < questionsArray.length; i++ ){
    let num = questionOrder[i];
    promptedQuestions.push(questionsArray[num]);
  }
}
console.log(promptedQuestions);

function renderNameAvatar(){
  let h2 = document.querySelector('.nameavatar');
  h2.innerText = ` Welcome ${userArray[0].name}!! Your category is:`;
}


function renderQuestions() {
  categoryContainer.innerText = promptedQuestions[0].category;
  let h3 = document.createElement('h3');
  h3.textContent = promptedQuestions[0].question;
  questionContainer.appendChild(h3);

  let button1 = document.createElement('button');
  let button2 = document.createElement('button');
  let button3 = document.createElement('button');
  let button4 = document.createElement('button');
  button1.setAttribute('id','button1');
  button2.setAttribute('id','button2');
  button3.setAttribute('id','button3');
  button4.setAttribute('id','button4');

  // Randomizes the answer choices
  let shownAnswer = [];
  let answerArray = [];
  answerArray.push(promptedQuestions[0].answerIncorrectA);
  answerArray.push(promptedQuestions[0].answerIncorrectB);
  answerArray.push(promptedQuestions[0].answerIncorrectC);
  answerArray.push(promptedQuestions[0].answerCorrect);

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


  answerContainer.appendChild(button1);
  answerContainer.appendChild(button2);
  answerContainer.appendChild(button3);
  answerContainer.appendChild(button4);

  let category = promptedQuestions[0].category;
  wallpaper(category);

}


function questionSubmit(event){
  let h3 = document.querySelector('h3');
  let button1 = document.querySelector('button');
  let selected = document.getElementById(event.target.id).textContent;
  console.log(selected);
  // Added Score tally
  if(selected === promptedQuestions[0].answerCorrect){
    userArray[0].score++;
  }
  console.log(userArray);
  h3.remove();
  for (let i =0; i<4;i++){
    let button1 = document.querySelector('button');
    button1.remove();
  }
  // selection2.remove();
  // selection3.remove();
  // selection4.remove();
  // answers.innerHTML = '';
  // nextQuestion()
//   if (questionAsked.length > 20){
//     myContainer.removeEventListener('click', busclicker);}
  promptedQuestions.shift();
  if(promptedQuestions.length === 0){
    window.location.href = "leaderboard.html";
  }
  console.log(promptedQuestions);
  console.log(`${userArray[0].score} out of ${20-promptedQuestions.length})`);
  renderQuestions();
  nextQuestion();
  storeItem();
}

questOrder();
questionAsked();
getUsers();
renderNameAvatar();
renderQuestions();

// let answerButton = document.getElementById('button1');

// getUsers();
function nextQuestion(){
  let answerButton1 = document.getElementById('button1');
  let answerButton2 = document.getElementById('button2');
  let answerButton3 = document.getElementById('button3');
  let answerButton4 = document.getElementById('button4');

  answerButton1.addEventListener('click',questionSubmit);
  answerButton2.addEventListener('click',questionSubmit);
  answerButton3.addEventListener('click',questionSubmit);
  answerButton4.addEventListener('click',questionSubmit);
}
nextQuestion();

console.log(userArray);

