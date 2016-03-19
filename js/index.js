//declaring variables
var newQuote;
var originalQuote;
var letterArray;
var imageName;
var wordCount = 0;
var currentSourceNames = [];
var sourceCount = 0;


//on load of the page, generate a quote and display its sources:
$(document).ready (function(){
	sourceDisplay();
	quoteGenerator();

	//Will call the sourceDisplay function only when the images are loaded
	$('#grid').imagesLoaded(function(){
		sourceDisplay();
	});
});


//on click of the quote button:
$('.quote-button').on('click', function(){
	quoteClear();
	quoteGenerator();

	// //clear out the sources
	// $('#grid').masonry('layout');

	// //Will call the sourceDisplay function only when the images are loaded
	// $('#grid').imagesLoaded(function(){
	// 	sourceDisplay();
	// });
});

function quoteClear() {
	//clear out previous quote
	$('.quote-box').html('<div class="word"></div>');
	
	//clear out previous attribution
	$('.author').empty();
	$('.title').empty();
	$('.date').empty();

	//reset wordCount to 0
	wordCount = 0;
	// sourceCount = 0;


};

function quoteGenerator() {
	//random quote generator; need to use Object.keys to get the length of the object
	var randomNum2 = Math.floor(Math.random() * Object.keys(quotes).length);
	//choose a quote, put its metadata in an array
	var quoteArray = quotes[randomNum2];
	//for now, console log the quote, author, and title
	console.log(randomNum2);
	console.log(quoteArray.quote);
	console.log(quoteArray.author);
	console.log(quoteArray.title);


	
	//assign the quote to the variable newQuote
	originalQuote = quoteArray.quote;
	newQuote = originalQuote.toLowerCase();
	console.log(newQuote);
	newAuthor = quoteArray.author;
	newTitle = quoteArray.title;
	newYear = quoteArray.year;
	//run the quoteDisplay function, passing the newQuote as an argument
	quoteDisplay(newQuote, newAuthor, newTitle, newYear);

};


function test() {

	for (var i = 0; i < Object.keys(quotes).length; i++) {
		console.log("in test function now");
		var testAuthor = quotes[i];
		console.log(testAuthor.author);
		$('.author').append(testAuthor.author);
	};
}



//this function will display the quote
function quoteDisplay (text, author, title, year) {

//running a for loop for the length of the text	
	for (var i = 0; i < text.length; i++) {
		//if the character is a space, start a new word by appending a div called word withing the div called quote-box
		if (text[i] === " ") {
			$(".quote-box").append('<div class="word"></div>');
			wordCount++;
		}else {
			//if the character is an apostrophe, assign the appropriate array
			if (text[i] === "'") {
				letterArray = letters['apostrophe'];
			//if the character is a comma, assign the appropriate array
			}else if (text[i] === ",") {
				letterArray = letters['comma'];
			//if the character is a semi-colon, assign the appropriate array
			} else if (text[i] === ";") {
				letterArray = letters['semi_colon'];
			//if the character is a slash, assign the appropriate array
			} else if (text[i] === "/") {
				letterArray = letters['slash'];
			//if the character is any other character, find the array for that character
			}else {
				letterArray = letters[text[i]];
			};
			//generate a random number
			var randomNum = Math.floor(Math.random() * letterArray.length);
			//use that random number to generate a specific letter name
			imageName = letterArray[randomNum];
			//append a div called letter with the image name concatenated in it
			$(".word")
				.eq(wordCount)
				.append('<div class="letter" data-index="'+i+'"><img src="images/letters/'+imageName+'.jpg"/></div>');

			//call showLetter, which will animate the letters
			showLetter(i);

			//get the array of metadata associated with the letter:
			var letterSource = sources[imageName];

			//check if doument sources are the same
			var sameSource = false;
			//running a for loop for the length of the array containing the sources currently being used
			for (var n = 0; n < currentSourceNames.length; n++) {

				//if the source in the current array is the same the new source name, then it's the same source
				if (currentSourceNames[n] === letterSource.document_name) {
					sameSource = true;
				};
			};
			//if the new source is not the same as any of the sources in the current array
			if (sameSource === false) {
				//add this source name to the current source name array
				currentSourceNames[sourceCount] = letterSource.document_name;
				//increase the count of sources
				sourceCount++;
				//append the source image, title, date, and collection name within a div called grid-item, to a div called grid
				source = $('<div class="grid-item"><a href="'+letterSource.document_link+'" target="_blank"><img src="images/originals/'+letterSource.document_name+'" width="300"/></a><div class="metadata"><span class="source-title">Title: </span>'+letterSource.title+'</div><div class="metadata"><span class="source-date">Date: </span>'+letterSource.date+'</div><div class="metadata"><span class="source-collection">Collection: </span>'+letterSource.collection+'</div></div>');
				//append the source using masonry
				$("#grid").append(source).masonry( 'appended', source );


				//old append code: append the source image, title, date, and collection name within a div called grid-item, to a div called grid
				// $("#grid").append('<div class="grid-item"><img src="images/originals/'+letterSource.document_name+'" width="300"/><div class="metadata"><span class="source-title">Title: </span>'+letterSource.title+'</div><div class="metadata"><span class="source-date">Date: </span>'+letterSource.date+'</div><div class="metadata"><span class="source-collection">Collection: </span>'+letterSource.collection+'</div></div>');

			};

		};
		if (i === (text.length - 1)) {
            //Will call the sourceDisplay function only when the images are loaded
            $('#grid').imagesLoaded(function(){
                sourceDisplay();
            });
        };

	};

	//when the whole quote is finished displaying, display the attribution
	setTimeout(function() {
		$('.author').append('&mdash; '+author+', ').animate({opacity:1},1000);
		$('.title').append(title+', ').animate({opacity:1},1000);
		$('.date').append(year).animate({opacity:1},1000);
	},(50*i));

};

//use the masonry plugin to generate the grid of sources
function sourceDisplay () {
	// $(window).load(function(){
		$('#grid').masonry({
		  columnWidth: 300,
		  gutter: 40,
		  itemSelector: ".grid-item"
		});
	// });
};

//animate the letters in the quote
function showLetter(i){
	setTimeout(function(){
		// pops on
		// $('.letter[data-index="'+i+'"]').css({opacity:1});
		// fade
		$('.letter[data-index="'+i+'"]').animate({opacity:1},1000);
	},(50*i));
};

// function showAttribution(author, title, year) {
// 	setTimeout(function() {
// 		$('.author').append(author).animate({opacity:1},1000);
// 		$('.title').append(title).animate({opacity:1},1000);
// 		$('.date').append(year).animate({opacity:1},1000);
// 	},(100*i));

// };



// get json
// var sources;
// $.getJSON('json/sources.json', function(json){
// 	console.log(json.imageName);
// });
// get source : data[ letterArray[randomNum] ]
