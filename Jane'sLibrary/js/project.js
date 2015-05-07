$(document).ready(function() {

	$("#plustext").click(function() {
		resizeText(1);
	});
	$("#minustext").click(function() {
		resizeText(-1);
	});

	function resizeText(multiplier) {
  		if (document.body.style.fontSize == "") {
	    	document.body.style.fontSize = "1.0em";
	  	}
	  	document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
	}

var images = ["images/mylibrary2.JPG", "images/mylibrary.jpg", 
"images/oliversacks.jpg", "images/The_Lorax.jpg"];
var count = 0;
  
setInterval(function(){
  $("#slider").attr("src", images[count % images.length]);
  count++;
}, 2000);



});