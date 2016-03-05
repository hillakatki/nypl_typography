
//Test variable for the letter names
var letters = {
	"a" : ["a_01","a_02","a_03"],
	"b" : ["b_01","b_02","b_03"],
	"c" : ["c_01","c_02","c_03"],
	"d" : ["d_01","d_02","d_03"],
};

//test variable for the source metadata
var sources = {
  "a_01": {
    "title": "DAILY BREAKFAST [held by] MANSION [at] [BUFFALO, NY] ([COFFEE SHOP])",
    "date": "1851-1860",
    "collection": "Buttolph Collection of Menus",
    "document_link": "http://digitalcollections.nypl.org/items/510d47db-1a07-a3d9-e040-e00a18064a99",
    "document_name": "nypl.digitalcollections.510d47db-1a07-a3d9-e040-e00a18064a99.001.g.jpg"
  },
  "a_02": {
    "title": "Kampf im zwielicht.",
    "date": "1926-1947",
    "collection": "Collection of Book Jackets",
    "document_link": "http://digitalcollections.nypl.org/items/510d47db-d1c7-a3d9-e040-e00a18064a99",
    "document_name": "nypl.digitalcollections.510d47db-d1c7-a3d9-e040-e00a18064a99.001.w.jpg"
  },
  "a_03": {
    "title": "Poster for the Revue Rodgers & Hart",
    "date": 1975,
    "collection": "Billy Rose Theater Division Scrapbooks",
    "document_link": "http://digitalcollections.nypl.org/items/7f33d937-18b8-da4d-e040-e00a180604aa",
    "document_name": "nypl.digitalcollections.7f33d937-18b8-da4d-e040-e00a180604aa.001.w.jpg"
  },
  "b_01": {
    "title": "DAILY BREAKFAST [held by] MANSION [at] [BUFFALO, NY] ([COFFEE SHOP])",
    "date": "1851-1865",
    "collection": "Buttolph Collection of Menus",
    "document_link": "http://digitalcollections.nypl.org/items/510d47db-1a07-a3d9-e040-e00a18064a99",
    "document_name": "nypl.digitalcollections.510d47db-1a07-a3d9-e040-e00a18064a99.001.g.jpg"
  },
  "b_02": {
    "title": "Harper's September",
    "date": "189-?-1918",
    "collection": "Posters. New York, 1890s-1907",
    "document_link": "http://digitalcollections.nypl.org/items/510d47dc-4868-a3d9-e040-e00a18064a99",
    "document_name": "nypl.digitalcollections.510d47dc-4868-a3d9-e040-e00a18064a99.001.w.jpg"
  },
  "b_03": {
    "title": "Opening of main text. Rubrics.",
    "date": 1563,
    "collection": "Funff Osterpredigten aus dem Gesichte Ezechielis am 37 Capittel gethan.",
    "document_link": "http://digitalcollections.nypl.org/items/510d47da-e998-a3d9-e040-e00a18064a99",
    "document_name": "nypl.digitalcollections.510d47da-e998-a3d9-e040-e00a18064a99.001.w.jpg"
  },
  "c_01": {
    "title": "Kampf im zwielicht.",
    "date": "1926-1948",
    "collection": "Collection of Book Jackets",
    "document_link": "http://digitalcollections.nypl.org/items/510d47db-d1c7-a3d9-e040-e00a18064a99",
    "document_name": "nypl.digitalcollections.510d47db-d1c7-a3d9-e040-e00a18064a99.001.w.jpg"
  },
  "c_02": {
    "title": "Stockholm Restaurant",
    "date": 1963,
    "collection": "Buttolph Collection of Menus",
    "document_link": "http://digitalcollections.nypl.org/items/5e66b3e8-f9ac-d471-e040-e00a180654d7",
    "document_name": "stockholm_restaurant.png"
  },
  "c_03": {
    "title": "Alphabet du temps de l'Abbe Suger, tire du cabinet de M. Debret",
    "date": 1874,
    "collection": "Recueil de cent planches de décoration : extraites du Journal-manuel de peintures",
    "document_link": "http://digitalcollections.nypl.org/items/510d47da-3b26-a3d9-e040-e00a18064a99",
    "document_name": "nypl.digitalcollections.510d47da-3b26-a3d9-e040-e00a18064a99.001.w.jpg"
  }
};



var quotes = {
  "1": {
    "quote": "In our village, folks say God crumbles up the old moon into stars.",
    "author": "Alexander Solzhenitsyn",
    "title": "One Day in the Life of Ivan Denisovich"
  },
  "2": {
    "quote": "America, I’ve given you all and now I’m nothing.",
    "author": "Allen Ginsburg",
    "title": "America"
  },
  "3": {
    "quote": "In spite of everything, I still believe people are really good at heart.",
    "author": "Anne Frank",
    "title": "The Diary of Anne Frank"
  },
  "4": {
    "quote": "As Estha stirred the thick jam he thought Two Thoughts and the Two Thoughts he thought were these: a) Anything can happen to anyone. and b) It is best to be prepared.",
    "author": "Arundhati Roy",
    "title": "The God of Small Things"
  },
  "5": {
    "quote": "‘Dear God,’ she prayed, ‘let me be something every minute of every hour of my life.’",
    "author": "Betty Smith",
    "title": "A Tree Grows in Brooklyn"
  },
  "6": {
    "quote": "There are darknesses in life and there are lights, and you are one of the lights, the light of all lights.",
    "author": "Bram Stroker",
    "title": "Dracula"
  },
  "7": {
    "quote": "One must be careful of books, and what is inside them, for words have the power to change us.",
    "author": "Cassandra Clare",
    "title": "The Infernal Devices"
  },
  "8": {
    "quote": "A dream, all a dream, that ends in nothing, and leaves the sleeper where he lay down, but I wish you to know that you inspired it.",
    "author": "Charles Dickens",
    "title": "A Tale of Two Cities"
  },
  "9": {
    "quote": "I would always rather be happy than dignified.",
    "author": "Charlotte Brontë",
    "title": "Jane Eyre"
  },
  "10": {
    "quote": "How wild it was, to let it be.",
    "author": "Cheryl Strayed",
    "title": "Wild"
  },
  "11": {
    "quote": "It frightened him to think what must have gone to the making of her eyes.",
    "author": "Edith Wharton",
    "title": "The Age of Innocence"
  },
  "12": {
    "quote": "She was lost in her longing to understand.",
    "author": "Gabriel Garcia Marquez",
    "title": "Love in the Time of Cholera"
  },
  "13": {
    "quote": "She wasn’t doing a thing that I could see, except standing there leaning on the balcony railing, holding the universe together.",
    "author": "J. D. Salinger",
    "title": "A Girl I Knew"
  },
  "14": {
    "quote": "It does not do well to dwell on dreams and forget to live, remember that.",
    "author": "J.K. Rowling",
    "title": "Harry Potter and the Sorcerer’s Stone"
  },
  "15": {
    "quote": "What are men to rocks and mountains?",
    "author": "Jane Austen",
    "title": "Pride and Prejudice"
  },
  "16": {
    "quote": "And now that you don’t have to be perfect, you can be good.",
    "author": "John Steinbeck",
    "title": "East of Eden"
  },
  "17": {
    "quote": "Sometimes I can feel my bones straining under the weight of all the lives I’m not living.",
    "author": "Jonathan Safran Foer",
    "title": "Extremely Loud and Incredibly Close"
  },
  "18": {
    "quote": "The half life of love is forever.",
    "author": "Junot Diaz",
    "title": "This Is How You Lose Her"
  },
  "19": {
    "quote": "She was becoming herself and daily casting aside that fictitious self which we assume like a garment with which to appear before the world.",
    "author": "Kate Chopin",
    "title": "The Awakening"
  },
  "20": {
    "quote": "Beauty is an enormous, unmerited gift given randomly, stupidly.",
    "author": "Khaled Hosseini",
    "title": "And the Mountains Echoed"
  },
  "21": {
    "quote": "I wondered if that was how forgiveness budded; not with the fanfare of epiphany, but with pain gathering its things, packing up, and slipping away unannounced in the middle of the night.",
    "author": "Khaled Hosseini",
    "title": "The Kite Runner"
  },
  "22": {
    "quote": "Everything was beautiful and nothing hurt.",
    "author": "Kurt Vonnegut",
    "title": "Slaughterhouse-Five"
  },
  "23": {
    "quote": "Tomorrow is always fresh, with no mistakes in it yet.",
    "author": "L. M. Montgomery",
    "title": "Anne of Green Gables"
  },
  "24": {
    "quote": "For poems are like rainbows; they escape you quickly.",
    "author": "Langston Hughes",
    "title": "The Big Sea"
  },
  "25": {
    "quote": "Once upon a time there was a boy who loved a girl, and her laughter was a question he wanted to spend his whole life answering.",
    "author": "Nicole Krauss",
    "title": "The History of Love"
  },
  "26": {
    "quote": "The curves of your lips rewrite history.",
    "author": "Oscar Wilde",
    "title": "The Picture of Dorian Gray"
  },
  "27": {
    "quote": "I could hear the human noise we sat there making, not one of us moving, not even when the room went dark.",
    "author": "Raymond Carver",
    "title": "What We Talk About When We Talk About Love"
  },
  "28": {
    "quote": "I took a deep breath and listened to the old brag of my heart; I am, I am, I am.",
    "author": "Sylvia Plath",
    "title": "The Bell Jar"
  },
  "29": {
    "quote": "At the still point, there the dance is.",
    "author": "T. S. Eliot",
    "title": "Four Quartets"
  },
  "30": {
    "quote": "Do I dare / Disturb the universe?",
    "author": "T. S. Eliot",
    "title": "The Love Song of J. Alfred Prufrock"
  },
  "31": {
    "quote": "So we beat on, boats against the current, borne back ceaselessly into the past.",
    "author": "The Great Gatsby",
    "title": "F. Scott Fitzgerald"
  },
  "32": {
    "quote": "We cross our bridges as we come to them and burn them behind us, with nothing to show for our progress except a memory of the smell of smoke, and the presumption that once our eyes watered.",
    "author": "Tom Stoppard",
    "title": "Rosencratz and Guildenstern Are Dead"
  },
  "33": {
    "quote": "The pieces I am, she gather them and gave them back to me in all the right order.",
    "author": "Toni Morrison",
    "title": "Beloved"
  },
  "34": {
    "quote": "I have spread my dreams under your feet; / Tread softly because you tread on my dreams",
    "author": "W. B. Yeats",
    "title": "Aedh Wishes for the Cloths of Heaven"
  },
  "35": {
    "quote": "If equal affection cannot be, let the more loving one be me.",
    "author": "W. H. Auden",
    "title": "The More Loving One"
  },
  "36": {
    "quote": "It might be that to surrender to happiness was to accept defeat, but it was a defeat better than many victories.",
    "author": "W. Somerset Maugham",
    "title": "Of Human Bondage"
  },
  "37": {
    "quote": "I celebrate myself, and sing myself.",
    "author": "Walt Whitman",
    "title": "Leaves of Grass"
  },
  "38": {
    "quote": "There are more things in Heaven and Earth, Horatio, than are dreamt of in your philosophy.",
    "author": "William Shakespeare",
    "title": "Hamlet"
  },
  "39": {
    "quote": "Journeys end in lovers meeting.",
    "author": "William Shakespeare",
    "title": "Twelfth Night"
  }
};

$('.quote-button').on('click', function(){
	//random quote generator; need to use Object.keys to get the length of the object
	var randomNum2 = Math.floor(Math.random() * Object.keys(quotes).length);
	//choose a quote, put its metadata in an array
	var quoteArray = quotes[randomNum2];
	//for now, console log the quote, author, and title
	console.log(quoteArray.quote);
	console.log(quoteArray.author);
	console.log(quoteArray.title);
});



//declaring variables
var text = "baa aba baac cacab bca";
var letterArray;
var imageName;
var wordCount = 0;
var currentSourceNames = [];
var sourceCount = 0;

// get json
// var sources;
// $.getJSON('json/sources.json', function(json){
// 	console.log(json.imageName);
// });
// get source : data[ letterArray[randomNum] ]


//running a for loop for the length of the text
for (var i = 0; i < text.length; i++) {
	console.log("main loop, i: "+i);
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

//use the masonry plugin to generate the grid of sources
$(window).load(function(){
	$('#grid').masonry({
	  columnWidth: 300,
	  gutter: 40,
	  itemSelector: ".grid-item"
	});
});
