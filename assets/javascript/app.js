var wins = 0;
var losses = 0;
var timer;

var intervalId;
var time = 100;

run();

$(document).ready(function() {
  $('#submitButton').click(function() {
    answerScore();
    console.log('submitted');
    $("#losses").text(losses);
    $("#wins").text(wins);
stop();
  });

});

function answerScore () {
  var answersN =   $('input[name^=a]');
  var answerValue = 0;
  for (var i = 0, length = answersN.length; i < length; i++) {
       if (answersN[i].checked) {
  // do something with answersN
      answerValue += parseInt(answersN[i].value);
    }
  }

  losses = 6  - answerValue;
  wins = answerValue;
};

/* To do : Showing Correct and Incorrect ones
var Results = function(){
  var correctAnswer = 0;
  $('input[name^=a]').each(function(){
        chosenAnswer = $this.find('.trivia answer').val('1'),
        correctAnswer;
    
    for ( var j = 0; j < self.correctAnswers.length; j++ ) {
      var a = self.correctAnswers[j];
      if ( a.question == $this.data('quiz-question') ) {
        correctAnswer = a.answer;
      }

*/




  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    time--;

    //  Show the number in the #show-number tag.
    $("#timer").html("<h2>" + time + "</h2>");


    //  Once number hits zero...
    if (time === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up! You Lose!");
    }
  }

  //  The stop function
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }
  //  Execute the run function.
 



 
  
// PUBLICAR EN EL SCORE CUANTAS CORRECTAS E INCORRECTAS
/*
4) QUESTIONS WITH MULTIPLE ANSWERS THAT CAN BE SELECTED
5) CORRECT AND INCORRECT ANSWER SO IT HAS TO DETECT THE CORRECT ONE
6) EVERYTHING RUNS WITH TIME 
7) IF TIME IS OUT THEN IT WILL SHOW OFF A TITLE SAYING TO THE GAMER THE TIME'S OUT 
AND THE CORRECT & INCORRECT ANSWER
8) IF IT FINISHED IN TIME THEN IT WILL SHOW OFF .....

9) 1 or 2 counter for correct and incorrect answer 
10) SUBMIT BUTTON?


NUMBER OF QUESTIONS ANSWERS

CORRECT & INCORRECT

*/