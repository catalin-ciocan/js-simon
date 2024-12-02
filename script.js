
const form = document.getElementById('answers-form');
const inputFields = document.querySelectorAll('input');
const countdownElement = document.getElementById('countdown');
const numbersListElement = document.getElementById('numbers-list');
const messageElement = document.getElementById('message');
const instructionsElement = document.getElementById('instructions');


const min = 1;
const max = 50;
const totalNumbers = 5;
let time = 5;

const numbers = getDifferentsRandomNumbers(min, max, totalNumbers);

let items = ''
for(let i = 0; i < numbers.length; i++){
  const number = numbers[i] 
  items += `<li class="fs-3">${number}</li>`;
}
numbersListElement.innerHTML = items;

countdownElement.innerHTML = time;
const countdown = setInterval(() => {
  countdownElement.innerHTML = --time;
  if(time === 0){
    clearInterval(countdown);
    numbersListElement.classList.add('d-none');
    countdownElement.classList.add('d-none');
    form.classList.remove('d-none');
    instructionsElement.innerHTML = 'which numbers do you remember?'
  }
}, 1000)

form.addEventListener('submit', confirm)