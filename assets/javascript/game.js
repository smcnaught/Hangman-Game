	// Array of words the computer will generate for the game.
	var words = ['plumbus', 'dinglebop', 'schleem', 'grumbo', 'fleeb', 
	'schlami', 'hizzard', 'blamf', 'chumble', 'ploobis', 'tinyrick', 
	'jerry', 'jessica', 'meeseeks', 'morty', 'scaryterry', 'snuffles', 
	'summer', 'getschwifty', 'darkmatter', 'belch', 'cronenbergs', 'portal',
	'schmeckles'];

	// Array for all the Rick images.
	var imgArray = new Array();

	imgArray[0] = new Image();
	imgArray[0].src = 'assets/images/pic0.png';

	imgArray[1] = new Image();
	imgArray[1].src = 'assets/images/pic1.png';

	imgArray[2] = new Image();
	imgArray[2].src = 'assets/images/pic2.png';

	imgArray[3] = new Image();
	imgArray[3].src = 'assets/images/pic3.png';

	imgArray[4] = new Image();
	imgArray[4].src = 'assets/images/pic4.png';

	imgArray[5] = new Image();
	imgArray[5].src = 'assets/images/pic5.png';

	imgArray[6] = new Image();
	imgArray[6].src = 'assets/images/pic6.png';

	imgArray[7] = new Image();
	imgArray[7].src = 'assets/images/pic7.png';

	// Creating the currentWord variable outside the function.
	var currentWord ='';

	// Array for the dashes.
	var answer = [];	

	// var to hold wins initial value.
	var wins = 0;

	// Array to hold the users guess. Whatever the user clicks goes into holdWord.
	var holdWord = [];

	// variable to hold the guess. 
	var userGuess = '';

	// variable to hold guesses remaining.
	var guessesRemaining = 7;

	//Variable to hold the current position of the imgArray.
	curImage = 0;

	

	// When the user clicks "play" the game picks a word and populates the number of lines corresponding to the number of letters in the chosen word. 
	function pickAWord() 
{
		currentWord = words[Math.floor(Math.random() * words.length)];
	for(var i = 0; i < currentWord.length; i++)
	{
		answer[i] = "_";
		document.getElementById("blanks").innerHTML = answer;

		// removing the commas from in between the lines.
		var remove = document.getElementById("blanks");
		remove.innerHTML = answer.join(" ");
		
	}
};

	// Function that takes the users guess and pushes that letter to the holdWord array.
	function pickALetter(letter)
	{
		// move letter to correct space.
		// if(!holdWord.includes(letter)){
		// 	holdWord.push(letter);
		// }
		// holdWord.push(letter);
		userGuess = letter;
		//userGuess = holdWord[holdWord.length - 1];
		console.log(userGuess);

		// For loop that takes in the users guess and compares it to the current word's letters at each Index number.
		// If the letter they clicked (holdWord index) is equal to the currentWord's index then the program replaces the blank spaces with that letter.
		for(var j = 0; j < currentWord.length; j++)
		{
			if(userGuess === currentWord.charAt(j))
			{
				answer[j] = userGuess;
				document.getElementById("blanks").innerHTML = answer;

				// removing the commas from in between the letters.
				var remove = document.getElementById("blanks");
				remove.innerHTML = answer.join(" ");

				// check if the user has won.
				if(!answer.includes("_") && guessesRemaining > 0){
					wins++;
					document.getElementById("wins").innerHTML = "Wins: " + wins;
					setTimeout(function(){
						alert("YOU WIN!")
					}, 1000);
					

				}

			}
		}
			// This "if statement" takes a wrong guess and subtracts one from "guesses remaining", changes the Rick pic, and alerts the player that they've lost if guesses get to 0.
			if(!holdWord.includes(userGuess)){
				if(!answer.includes(userGuess))			

				{					

					// Subtract one from "guesses remaining" when the user guesses a wrong letter.
					holdWord.push(letter);
					console.log(answer);
					console.log(holdWord);
					guessesRemaining = (guessesRemaining - 1); 
					document.getElementById("guesses").innerHTML = "Guesses Remaining: " + guessesRemaining;			
					

					// Change the picture when the user guesses a wrong letter.
					curImage = (curImage + 1);
					document.getElementById("rick").src = imgArray[curImage].src;
				
					// if statement to stop the game when guesses reaches 0 and show a "YOU LOSE" alert.
						if(guessesRemaining == 0)
						{
							// Alert the player that they've lost.
							alert("YOU LOSE");

							// Reset the Guesses Remaining.
							guessesRemaining = 8;
							document.getElementById("guesses").innerHTML = "Guesses Remaining: " + guessesRemaining;

							// Pick a new word for the player to play again.
							pickAWord();

							// Rest pickALetter function.
							pickALetter();

							// Reset Rick pic back to just the noose.
							document.getElementById("rick").src = imgArray[0].src;
							
						}						
									
				}
				}
		
						
	};