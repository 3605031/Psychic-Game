
		var win = 0;
		var loss= 0;
		var guesses = 7;
		var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var guess = Math.floor(Math.random()*26);

		$("#win").html("0");
		$("#loss").html("0");
		$("#guesses").html("7");


		$(document).keypress(function(event){
  			 	var userinput = String.fromCharCode(event.which);
  			 	console.log("user input:" + userinput)
				
				function psychic() {

					
					if(userinput === letters[guess]){
						win++;
						$("#win").html(win);
						guess = Math.floor(Math.random()*26);
						guesses = 8;
						psychic();
					}else{
						guesses--;
						$("#guesses").html(guesses);
					}

					if(guesses ===0){
						loss++;
						guess = Math.floor(Math.random()*26);
						$("#loss").html(loss);
						guesses = 8;
						psychic();
					}

					console.log("computer chose: " + letters[guess])
				};

				psychic();
				
				$("#userinputs").append(userinput+" "); 
		});

