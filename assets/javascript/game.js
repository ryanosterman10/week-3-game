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

main.guessesLeft = 7;
main.numInWordList = words.length;

main.word = "test";
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
		window.location.reload();
	}

	if(main.guessesLeft < 1){
		document.getElementById("WORD").innerHTML == main.word1;
		alert("You are out of guesses! Please try again");
		window.location.reload();
	}
}

main.pullWord();
main.setUnderline();

$(function(){
	$("#a").click(function(event){
		event.preventDefault();
		main.updateLetter("a");
	});
});
$(function(){
	$("#b").click(function(event){
		event.preventDefault();
		main.updateLetter("b");
	});
});
$(function(){
	$("#c").click(function(event){
		event.preventDefault();
		main.updateLetter("c");
	});
});
$(function(){
	$("#d").click(function(event){
		event.preventDefault();
		main.updateLetter("d");
	});
});
$(function(){
	$("#e").click(function(event){
		event.preventDefault();
		main.updateLetter("e");
	});
});
$(function(){
	$("#f").click(function(event){
		event.preventDefault();
		main.updateLetter("f");
	});
});
$(function(){
	$("#g").click(function(event){
		event.preventDefault();
		main.updateLetter("g");
	});
});
$(function(){
	$("#h").click(function(event){
		event.preventDefault();
		main.updateLetter("h");
	});
});
$(function(){
	$("#i").click(function(event){
		event.preventDefault();
		main.updateLetter("i");
	});
});
$(function(){
	$("#j").click(function(event){
		event.preventDefault();
		main.updateLetter("j");
	});
});
$(function(){
	$("#k").click(function(event){
		event.preventDefault();
		main.updateLetter("k");
	});
});
$(function(){
	$("#l").click(function(event){
		event.preventDefault();
		main.updateLetter("l");
	});
});
$(function(){
	$("#m").click(function(event){
		event.preventDefault();
		main.updateLetter("m");
	});
});
$(function(){
	$("#n").click(function(event){
		event.preventDefault();
		main.updateLetter("n");
	});
});
$(function(){
	$("#o").click(function(event){
		event.preventDefault();
		main.updateLetter("o");
	});
});
$(function(){
	$("#p").click(function(event){
		event.preventDefault();
		main.updateLetter("p");
	});
});
$(function(){
	$("#q").click(function(event){
		event.preventDefault();
		main.updateLetter("q");
	});
});
$(function(){
	$("#r").click(function(event){
		event.preventDefault();
		main.updateLetter("r");
	});
});
$(function(){
	$("#s").click(function(event){
		event.preventDefault();
		main.updateLetter("s");
	});
});
$(function(){
	$("#t").click(function(event){
		event.preventDefault();
		main.updateLetter("t");
	});
});
$(function(){
	$("#u").click(function(event){
		event.preventDefault();
		main.updateLetter("u");
	});
});
$(function(){
	$("#v").click(function(event){
		event.preventDefault();
		main.updateLetter("v");
	});
});
$(function(){
	$("#w").click(function(event){
		event.preventDefault();
		main.updateLetter("w");
	});
});
$(function(){
	$("#x").click(function(event){
		event.preventDefault();
		main.updateLetter("x");
	});
});
$(function(){
	$("#y").click(function(event){
		event.preventDefault();
		main.updateLetter("y");
	});
});
$(function(){
	$("#z").click(function(event){
		event.preventDefault();
		main.updateLetter("z");
	});
});


