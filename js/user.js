'use strict';

console.log('This is a test of the emergency boradcast system');
let userArray = [];
// let avatarArray = [];
let userContainer = document.getElementById('addAUser');
let avatarContainer = document.getElementById('youravatar');

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

function UserConstructor(name, color, avatar,score = 0,) {
  this.name = name;
  this.color = color;
  this.avatar = avatar;
  this.score = score;
  userArray.unshift(this);
}

function userSubmit(event){
  event.preventDefault();
  let name = document.getElementById('name').value;
  let color = event.target.favoriteColor.value;
  // let avatar = avatarArray[0];
  new UserConstructor(name,color);
  storeItem();
  document.location.href='question.html';
  console.log(userArray);
}

// function userAvatar(event){
//   event.preventDefault();
//   let avatar = event.target.src;
//   console.log(avatar);
//   avatarArray.unshift(avatar);
// }

userContainer.addEventListener('submit', userSubmit);
// avatarContainer.addEventListener('click', userAvatar);
getUsers();
