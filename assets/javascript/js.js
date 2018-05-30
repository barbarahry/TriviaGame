
//  Step 1:
//  Use the following link inside the Audio function below:
//  https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90
// var audio = new Audio("raven.mp3");
// function timeUp() {
//   audio.play();
// }


var number = 25;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the stop button gets clicked, run the stop function.
$("<button>").on("click", stop);

//  When the resume button gets clicked, execute the run function.
//$("#resume").on("click", run);

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#show-number").html("<h1>" + number + "</h1>");


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();
    $("#exampleModalCenter").modal('show');
 // guessUnansweredText.textContent = "3";
$("#unanswered").text("3");
    //  Alert the user that time is up.
  
   
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
run();

var trivia = [{
  question: "Commrade Lenin was born in:",
  option1: "1871",
  option2: "1870",
  option3:  "1872",
  answer: "1870"
},
{
  question: "Commrade Putin was born in:",
  option1: "1952",
  option2: "1953",
  option3:  "1954",
  answer: "1952"
},
{
  question: "Commrade Trump was born in:",
  option1: "1946",
  option2: "1947",
  option3:  "1948",
  answer: "1946"
}
];

var winsNum = 0;
var lossesNum = 0;
var unansweredNum = 0;


$(document).on("click", "#myGuess", function(){
  //alert( "myGuess" ); 
  stop();
  for (var i = 0; i < trivia.length; i++) {
   // alert(trivia[i].answer);
    var radioBtn = $('input[name=year' +i+']:radio:checked').val();
    
    //alert(radioBtn);
      if (radioBtn === trivia[i].answer) {
        winsNum++;
     
    } 
    else if (radioBtn === undefined ) {
      
      unansweredNum++;
    
    
    }
    else  {
      
      lossesNum++;
    
    
    }  
    }; 

  var winText = document.getElementById("correct");
  var lossText = document.getElementById("incorrect");
  var guessUnansweredText = document.getElementById("unanswered");

  winText.textContent = winsNum;
  lossText.textContent = lossesNum;
 
  guessUnansweredText.textContent = unansweredNum;

  
});

$(document).on("click", "#closeWindow", function(){
  window.location.reload()
});

 



