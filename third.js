var number = 5;
var times = 0;
var guess_number;
while (guess_number!=number){
  guess_number = +prompt("Guess number from 1 to 100");
  if (!isNaN(guess_number) && guess_number <= 100 && guess_number >= 1){
    if (guess_number == number){
      alert('You are WINNER!!! You guess from ' + times + 'times');
    }else {
      var more_less = guess_number > number ? 'MORE ' : 'LESS ';
      alert ('You input number ' + more_less + 'then mine');
      times ++;
    }
  } else {
    alert('Input correct number');
    }
  }
