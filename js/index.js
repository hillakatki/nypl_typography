




// var $container = $('#container');

// // initialize Masonry after all images have loaded  
// $container.imagesLoaded( function() {
//      $container.masonry();
// });

$(window).load(function(){
	$('#grid').masonry({
	  columnWidth: 300,
	  gutter: 40,
	  itemSelector: ".grid-item"
	});
});

var letters = {
	"a" : ["a_01.jpg","a_02.jpg","a_03.jpg"],
	"b" : ["b_01.jpg","b_02.jpg","b_03.jpg"],
	"c" : ["c_01.jpg","c_02.jpg","c_03.jpg"],
	"d" : ["d_01.jpg","d_02.jpg","d_03.jpg"],
};

var text = "aaa bbbb cc ddddd a bb cccccc ddd";
var letterArray;
var imageName;
var wordCount = 0;


for (var i = 0; i < text.length; i++) {
	console.log("i: "+i);
	if (text[i] === " ") {
		$(".quote-box").append('<div class="word"></div>');
		wordCount++;
		console.log("space!");
	}else {
		letterArray = letters[text[i]];
		// console.log(letterArray);
		var randomNum = Math.floor(Math.random() * letterArray.length);
		// console.log(letterArray.length);
		// console.log(randomNum);
		imageName = letterArray[randomNum];
		console.log(imageName);
		$(".word").eq(wordCount).append('<div class="letter"><img src="images/letters/'+imageName+'"/></div>');
		// .animate({
		// 	'opacity':1
		// }, 3000);
	};

};

