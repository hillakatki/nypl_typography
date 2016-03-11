//declaring variables
var newQuote;
var letterArray;
var imageName;
var wordCount = 0;
var currentSourceNames = [];
var sourceCount = 0;


//on load of the page, generate a quote and display its sources:
$(document).ready (function(){
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

	//clear out the sources
	$('#grid').masonry('layout');


	//Will call the sourceDisplay function only when the images are loaded
	$('#grid').imagesLoaded(function(){
		sourceDisplay();
	});
});

function quoteClear() {
	//clear out previous quote
	$('.quote-box').html('<div class="word"></div>');
	
	//clear out previous attribution
	$('.author').empty();
	$('.title').empty();

	//reset wordCount to 0
	wordCount = 0;


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
	newQuote = quoteArray.quote;
	//run the quoteDisplay function, passing the newQuote as an argument
	quoteDisplay(newQuote);

	//append the new author and title in the attribution
	$('.author').append(quoteArray.author);
	$('.title').append(quoteArray.title);

};


//this function will display the quote
function quoteDisplay (text) {

//running a for loop for the length of the text	
	for (var i = 0; i < text.length; i++) {
		//if the character is a space, start a new word by appending a div called word withing the div called quote-box
		if (text[i] === " ") {
			$(".quote-box").append('<div class="word"></div>');
			wordCount++;
		}else {
			//if the character is a letter, find the array for that letter
			letterArray = letters[text[i]];
			//generate a random number
			var randomNum = Math.floor(Math.random() * letterArray.length);
			//use that random number to generate a specific letter name
			imageName = letterArray[randomNum];
			//append a div called letter with the image name concatenated in it
			$(".word").eq(wordCount).append('<div class="letter"><img src="images/letters/'+imageName+'.jpg"/></div>');
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
				$("#grid").append('<div class="grid-item"><img src="images/originals/'+letterSource.document_name+'" width="300"/><div class="metadata"><span class="source-title">Title: </span>'+letterSource.title+'</div><div class="metadata"><span class="source-date">Date: </span>'+letterSource.date+'</div><div class="metadata"><span class="source-collection">Collection: </span>'+letterSource.collection+'</div></div>');

			};

		};

	};

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





// get json
// var sources;
// $.getJSON('json/sources.json', function(json){
// 	console.log(json.imageName);
// });
// get source : data[ letterArray[randomNum] ]
