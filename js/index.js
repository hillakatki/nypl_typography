




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

