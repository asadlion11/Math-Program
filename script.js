const minNumber = 0;
const maxNumber = 10;
let correctAnswers = 0;
let wrongAnswers = 0;
alert('Welcome to Math Program :)');
let chooseNumber = prompt('Choose number \n1.Addition\n2.Subtraction\n3.Multiplication');
//Addition Part
if(chooseNumber ==1){
for(let i = 1; i<=3; i++){
     let number1 = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
     let number2 = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
     let result = prompt('What is: ' + number1 + ' + ' + number2 + ' ? ');
     if(result == number1 + number2){
         alert(number1 + ' + ' + number2 + ' = ' + result + ' Correct');
         correctAnswers +=1;
     }
     else{
         alert(number1 + ' + ' + number2 + ' = ' + result + ' Wrong');
         wrongAnswers +=1;
     }
    }
    alert('Your Result\nCorrect Answers: ' + correctAnswers + "\nWrong Answers: " + wrongAnswers);
}
//Subtraction Part
else if(chooseNumber ==2){
    for(let j = 1; j<=3; j++){
    number1 = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    number2 = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    if(number1 < number2){
        let temp;
        temp = number1;
        number1 = number2;
        number2 = temp;
    }
    result = prompt('What is: ' +  number1 + ' - ' + number2 + ' ? ');
    if(result == number1 - number2){
        alert(number1 + ' - ' + number2 + ' = ' + result + ' Correct');
        correctAnswers +=1;
    }
    else{
        alert(number1 + ' - ' + number2 + ' = ' + result + ' Wrong');
        wrongAnswers+=1;
    }
}
    alert('Your Result\nCorrect Answers: ' + correctAnswers + '\nWrong Answers: ' + wrongAnswers);
}
//Multiplication Part
else if(chooseNumber ==3){
    for(let i =1; i<=3; i++){
        number1 = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        number2 = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        result = prompt('What is: ' + number1 + ' * ' + number2 + ' ? ');
        if(result == number1 * number2){
            alert(number1 + ' * ' + number2 + ' = ' + result + ' Correct');
            correctAnswers +=1;
        }
        else{
            alert(number1 + ' * ' + number2 + ' = ' + result + ' Wrong');
            wrongAnswers +=1;
        }
    }
    alert('Your Result\nCorrect Answers: ' + correctAnswers + '\nWrong Answers: ' + wrongAnswers);
}
else{
    alert('Wrong Number :(');
}

