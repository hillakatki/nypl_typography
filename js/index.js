
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




//declaring variables
var text = "aaa b cccc aa bb cccccc";
var letterArray;
var imageName;
var wordCount = 0;

// get json
// var sources;
// $.getJSON('json/sources.json', function(json){
// 	console.log(json.imageName);
// });
// get source : data[ letterArray[randomNum] ]


//running a for loop for the length of the text
for (var i = 0; i < text.length; i++) {
	console.log("i: "+i);
	//if the character is a space, start a new word by appending a div called word withing the div called quote-box
	if (text[i] === " ") {
		$(".quote-box").append('<div class="word"></div>');
		wordCount++;
		// console.log("space!");
	}else {
		//if the character is a letter, find the array for that letter
		letterArray = letters[text[i]];
		//console.log(letterArray);
		//generate a random number
		var randomNum = Math.floor(Math.random() * letterArray.length);
		//console.log(letterArray.length);
		//console.log(randomNum);
		//use that random number to generate a specific letter name
		imageName = letterArray[randomNum];
		console.log(imageName);
		//append a div called letter with the image name concatenated in it
		$(".word").eq(wordCount).append('<div class="letter"><img src="images/letters/'+imageName+'.jpg"/></div>');
		//get the array of metadata associated with the letter:
		var letterSource = sources[imageName];
		//append the source image, title, date, and collection name within a div called grid-item, to a div called grid
		$("#grid").append('<div class="grid-item"><img src="images/originals/'+letterSource.document_name+'" width="300"/><div class="metadata"><span class="source-title">Title: </span>'+letterSource.title+'</div><div class="metadata"><span class="source-date">Date: </span>'+letterSource.date+'</div><div class="metadata"><span class="source-collection">Collection: </span>'+letterSource.collection+'</div></div>');
		console.log(letterSource.title);


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
