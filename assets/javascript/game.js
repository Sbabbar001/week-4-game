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