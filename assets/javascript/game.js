// Wordlist

words = {};
words.list = [];

words.list[0] = "stan";
words.list[1] = "kyle";
words.list[2] = "cartman";
words.list[3] = "kenny";
words.list[4] = "butters";
words.list[5] = "bebe";
words.list[6] = "craig";
words.list[7] = "timmy";
words.list[8] = "tweek";
words.list[9] = "wendy";
words.list[10] = "chef";

words.length = words.list.length;

// Game

main = {};
main.wordArray = [];
main.underlineArray = [];

main.wins = 0;
main.guessesLeft = 5;
main.numInWordList = words.length;

main.word = "";
main.wordUnderline = "";


// Functions

main.pullWord = function(){
	main.word = words.list[(Math.floor(Math.random()*main.numInWordList))];
}

main.setUnderline = function() {
	main.pullWord();
	for (i = 0; i < main.word.length; i++) {
		main.wordArray[i] = main.word.charAt(i);
		main.underlineArray[i] = " _ ";
	}
	main.wordUnderline = main.underlineArray.join(" ");
	document.getElementById("WORD").innerHTML = main.wordUnderline;
}

main.updateLetter = function(letter){
	main.changes = 0;
	for (i = 0; i < main.word.length; i++) {
		main.wordArray[i] = main.word.charAt(i);
		if(main.word.charAt(i) == letter){
			main.underlineArray[i] = letter;
			main.changes += 1;
		}
	}

	if(main.changes < 1){
		main.guessesLeft -= 1;
		document.getElementById("guessCount").innerHTML = main.guessesLeft;
	}

	main.wordUnderline = main.underlineArray.join(" ");
	document.getElementById("WORD").innerHTML = main.wordUnderline;

	main.word1 = main.wordArray.join(" ");
	main.word2 = main.underlineArray.join(" ");

	if(main.word1 == main.word2){
		alert("You Won! Loading a new word...");
		main.wins++;
		document.getElementById("winCount").innerHTML = main.wins;
		// main.pullWord();
		// main.setUnderline();
		window.location.reload();
	}

	if(main.guessesLeft < 1){
		document.getElementById("WORD").innerHTML == main.word1;
		alert("You are out of guesses! The character was: " + main.word);
		window.location.reload();
	}
}

// Gets word and sets the number of underlines

main.pullWord();
main.setUnderline();

// Functions for updating letters

	$("#a").click(function(){
		main.updateLetter("a");
	});
	$("#b").click(function(){
		main.updateLetter("b");
	});
	$("#c").click(function(){
		main.updateLetter("c");
	});
	$("#d").click(function(){
		main.updateLetter("d");
	});
	$("#e").click(function(){
		main.updateLetter("e");
	});
	$("#f").click(function(){
		main.updateLetter("f");
	});
	$("#g").click(function(){
		main.updateLetter("g");
	});
	$("#h").click(function(){
		main.updateLetter("h");
	});
	$("#i").click(function(){
		main.updateLetter("i");
	});
	$("#j").click(function(){
		main.updateLetter("j");
	});
	$("#k").click(function(){
		main.updateLetter("k");
	});
	$("#l").click(function(){
		main.updateLetter("l");
	});
	$("#m").click(function(){
		main.updateLetter("m");
	});
	$("#n").click(function(){
		main.updateLetter("n");
	});
	$("#o").click(function(){
		main.updateLetter("o");
	});
	$("#p").click(function(){
		main.updateLetter("p");
	});
	$("#q").click(function(){
		main.updateLetter("q");
	});
	$("#r").click(function(){
		main.updateLetter("r");
	});
	$("#s").click(function(){
		main.updateLetter("s");
	});
	$("#t").click(function(){
		main.updateLetter("t");
	});
	$("#u").click(function(){
		main.updateLetter("u");
	});
	$("#v").click(function(){
		main.updateLetter("v");
	});
	$("#w").click(function(){
		main.updateLetter("w");
	});
	$("#x").click(function(){
		main.updateLetter("x");
	});
	$("#y").click(function(){
		main.updateLetter("y");
	});
	$("#z").click(function(){
		main.updateLetter("z");
	});


