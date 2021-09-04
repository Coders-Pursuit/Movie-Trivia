'use strict';

console.log('This is a test of the emergency boradcast system');
let userArray = [];
let userContainer = document.getElementById('addAUser');

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

function UserConstructor(name, color, score = 0) {
  this.name = name;
  this.color = color;
  this.score = score;
  userArray.unshift(this);
}

function userSubmit(event){
  event.preventDefault();
  let name = document.getElementById('name').value;
  let color = event.target.favoriteColor.value;
  new UserConstructor(name,color);
  storeItem();
  document.location.href='question.html';
  console.log(userArray);
}

userContainer.addEventListener('submit', userSubmit);

getUsers();