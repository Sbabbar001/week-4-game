$(document).ready(() => {
	console.log('Hello World!')
});




				// Step 11 from notes ----------------

//  var targetNumber = 55;
//   $("#number-to-guess").text(targetNumber);
//   var counter = 0;
//   // Here we created code that selects a number either 10 or 11.
//   // We'll set this number at the start of the "game".
//   var numberOptions = [10, 11];
//   var increment = numberOptions[Math.round(Math.random())];
//   $(".crystal-1").on("click", function() {
//     // We'll then increment the counter each time by the randomly selected number.
//     // If the number is 11, then users can win. (11 + 11 + 11 + 11 + 11 = 55)
//     // If the number is 10, then there is no way for the user to win. (10 + 10 + 10 + 10 + 10 = 60)
//     counter += increment;
//     alert("New score: " + counter);
//     if (counter === targetNumber) {
//       alert("You win!");
//     }
//     else if (counter >= targetNumber) {
//       alert("You lose!!");
//     }
//   });



	// 		Step 12 from notes --------------

 // var targetNumber = 53;
 //  $("#number-to-guess").text(targetNumber);
 //  var counter = 0;
 //  // Now for the hard part. Creating multiple crystals each with their own unique number value.
 //  // We begin by expanding our array to include four options.
 //  var numberOptions = [10, 5, 3, 7];
 //  // Next we create a for loop to create crystals for every numberOption.
 //  for (var i = 0; i < numberOptions.length; i++) {
 //    // For each iteration, we will create an imageCrystal
 //    var imageCrystal = $("<img>");
 //    // First each crystal will be given the class ".crystal-image".
 //    // This will allow the CSS to take effect.
 //    imageCrystal.addClass("crystal-image");
 //    // Each imageCrystal will be given a src link to the crystal image
 //    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
 //    // Each imageCrystal will be given a data attribute called data-crystalValue.
 //    // This data attribute will be set equal to the array value.
 //    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
 //    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
 //    $("#crystals").append(imageCrystal);
 //  }
 //  // This time, our click event applies to every single crystal on the page. Not just one.
 //  $(".crystal-image").on("click", function() {
 //    // Determining the crystal's value requires us to extract the value from the data attribute.
 //    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
 //    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
 //    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
 //    var crystalValue = ($(this).attr("data-crystalvalue"));
 //    crystalValue = parseInt(crystalValue);
 //    // We then add the crystalValue to the user's "counter" which is a global variable.
 //    // Every click, from every crystal adds to the global counter.
 //    counter += crystalValue;
 //    // All of the same game win-lose logic applies. So the rest remains unchanged.
 //    alert("New score: " + counter);
 //    if (counter === targetNumber) {
 //      alert("You win!");
 //    }
 //    else if (counter >= targetNumber) {
 //      alert("You lose!!");
 //    }
 //  });


 					// MORE FINAL CONCRETE JS logic ------------



//starting the game, add values to gems (from gem object) and add to html
var gameState = {

  targetNumber : randomNumberGenerate(19, 120),
  wins : 0,
  losses : 0,
  resultNumber : 0, 

  // update resultNumber with clickValue
  updateResult: function(num){
    this.resultNumber += num;

    console.log("result number: " + this.resultNumber);
    // display resultNum in page
    $("#crystals").html(this.resultNumber);
    // if target number is  === result number then win goes up by 1 
    // display winning text on page
    // if result number is greater than > target number than lose increases by 1
    // display losing text on page
    
      if(this.resultNumber > this.targetNumber ){
        this.losses++;
        console.log("losses " + this.losses); 
        this.gameReset();    
      
      } else if(this.resultNumber === this.targetNumber) {
        this.wins++;
        console.log("wins " + this.wins);
        this.gameReset();
      } else {
        return;
      }

    },

    gameReset: function(){
      // call function again, generate new num
      gameState.targetNumber = randomNumberGenerate(19, 120);

      // set resultnum to 0 √
      this.resultNumber = 0;

      // give buttons new values
      gemsValue.assignNumber();

    }
};


// create a random number - tested.
function randomNumberGenerate(min, max){
   return Math.floor(Math.random()*(max-min+1)+ min);
   //0.1 - 0.9
   //0.1 * (12 - 2 + 1) + 2 =
}

//subject ot relocation 
  $("#number-to-guess").text(gameState.targetNumber);

  var gemsValue = {

    gems: [],

    //until array equal 4, generate numbers and add to array, if not already in array, push to array. create seperate function for randomizing the array order.... call r

    // replace a randon index in gems with a 1. max is gem length (3)
    replaceOne : function(max) {
        //takes the gems array and selects a random index
        var gemNumIndex = Math.floor(Math.random()*(max));
        console.log("random index: " + gemNumIndex);
        // at random index replace value with 1
        this.gems.splice(gemNumIndex, 1, 1);
        console.log("updated array " + this.gems);
    },

    // run randomnumbgenerate function 4 times using a for loop. add those values to array
    assignNumber : function(){
      // run until gems is length of 4
      while(this.gems.length < 4){
        var num = randomNumberGenerate(2,12)
        // gems arrray doesn't aleady have num add num
        if(!this.gems.includes(num)){
          gemsValue.gems.push(num);
        } 
      }
      console.log("gem array: " + this.gems);
      this.replaceOne(this.gems.length);
    },
    // assign each button a value from gems array
    assignValueToHtml : function(){
      // each  gem item === a button there are 4 buttons and 4 array items.
        // all buttons have btn call and a unique class of btn1-4
        $('.btn1').val(this.gems[0]);
        $('.btn2').val(this.gems[1]);
        $('.btn3').val(this.gems[2]);
        $('.btn4').val(this.gems[3]);
    },

    //Function to reset data
    resetRandomValue : function() {
      this.gems = [];
    },
  };

$(document).ready(function(){
  randomNumberGenerate(19, 120);
  $("#crystals").html(gameState.resultNumber);
  gemsValue.assignNumber(); //on ready assign gem value
  gemsValue.assignValueToHtml(); // give buttons value

  //if button (this) is clicked the value assigned is add to a counter array
  // bind function to click of buttons
  $(".btn").on("click", function(){ 
    var clickValue = parseInt($(this).val());
    gameState.updateResult(clickValue);
  });

});

 

					// BUTTON CLICKS 

// crystal 1 ----------------

    // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-1").on("click", function() {
    // Clicking the button triggers an alert message.
    alert("You clicked crystal 1");
});

 // crystal 2 ----------------

    // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-2").on("click", function() {
    // Clicking the button triggers an alert message.
    alert("You clicked crystal 2");
});

   // crystal 3 ----------------

    // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-3").on("click", function() {
    // Clicking the button triggers an alert message.
    alert("You clicked crystal 3");
});

 // crystal 4 ----------------

    // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-4").on("click", function() {
    // Clicking the button triggers an alert message.
    alert("You clicked crystal 4");
});




  				// RULES OF THE GAME

// The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters.

		// Option 1 Game design notes

// The random number shown at the start of the game should be between 19 - 120.

// Each crystal should have a random hidden value between 1 - 12. -->

		// Here's how the app works:

// There will be four crystals displayed as buttons on the page.

// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

// Your game will hide this amount until the player clicks a crystal.

// When they do click one, update the player's score counter.

// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

		// Option 1 Game design notes

// The random number shown at the start of the game should be between 19 - 120.

// Each crystal should have a random hidden value between 1 - 12. -->


					

					// Psuedo code -----------


  // We begin by expanding our array to include four options.


  // Next we create a for loop to create crystals for every numberOption.

    // For each iteration, we will create an imageCrystal




    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.




    // Each imageCrystal will be given a src link to the crystal image


    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.


    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.




  // This time, our click event applies to every single crystal on the page. Not just one.




    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.


    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter




    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.



    // All of the same game win-lose logic applies. So the rest remains unchanged.