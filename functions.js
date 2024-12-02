const getDifferentsRandomNumbers = (min, max, tot) => {

  const numbers = [];
 
  while(numbers.length < tot){
    const randomNumer = Math.floor(Math.random() * (max - min + 1) + min)
    if(!numbers.includes(randomNumer)) numbers.push(randomNumer)
  }

  return numbers;
}

const confirm = e => {

  e.preventDefault()
  
  const userGuesses = [];
  for(let i = 0; i < inputFields.length; i++){
    const field = inputFields[i];
    const value = parseInt(field.value);
 
    if(!isNaN(value) && value >= min && value <= max && !userGuesses.includes(value)){
      userGuesses.push(value)
    }
   }

   
    if(userGuesses.length !== totalNumbers){
     messageElement.classList.add('text-danger');
     messageElement.innerHTML = 'write all five correct numbers';
     return;
    }


   const correctAswers = [];
   for(let i = 0; i < userGuesses.length; i++){
    const guess = userGuesses[i];
    if(numbers.includes(guess)) correctAswers.push(guess)
  }
  
  const guessString = correctAswers.join(' - ');

  if(correctAswers.length === numbers.length){
    instructionsElement.classList.remove('text-danger');
    instructionsElement.classList.add('text-success');
    instructionsElement.innerHTML = `Congratulations, YOU WON!! Numbers you played: ${guessString}`
    
  } else if (correctAswers.length === 0){
    instructionsElement.classList.add('text-danger');
    instructionsElement.innerHTML = `You lost...maybe try again ;)`
  } else {
    instructionsElement.classList.add('text-warning');
    instructionsElement.innerHTML = `You didn't win but you guessed this numbers: ${guessString}`
  }
  
  instructionsElement.classList.add('fs-5');
  form.classList.add('d-none');
  
}