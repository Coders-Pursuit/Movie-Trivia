'use strict';

let userArray =  [];


let tableBody = document.querySelector('tbody');

function getUsers() {
  let userData = JSON.parse(localStorage.getItem('user-inputs'));
  if (userData) {
    userArray = userData;
  }
}


function sortLeaderboard() {
  userArray.sort(function(a, b){
    return b.score-a.score;
  });
}


function renderTable() {
  for (let i = 0; i < userArray.length; i++) {
    let tr = document.createElement('tr');
    tableBody.appendChild(tr);
    let th = document.createElement('th');
    th.textContent = userArray[i].name;
    tr.appendChild(th);
    let td = document.createElement('td');
    td.textContent = userArray[i].score;
    tr.appendChild(td);

  }
}


getUsers();
sortLeaderboard();
renderTable();
