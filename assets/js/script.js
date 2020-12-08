var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link ) {
	this.title = title;
	this.subtitle = subtitle;
	this.background = background;
	this.link = link;
	this.id = "slide" + slideIndex;
	slideIndex++;
	slideArray.push(this);
}

var slide1 = new Slide(
	"",
	"Nintendo Switch Lite",
	"public/images/slide1.jpg",
	"https://ru.wikipedia.org/wiki/Nintendo_Switch#Nintendo_Switch_Lite"
);
var slide2 = new Slide(
	"вроде и 8, а хуже чем 7",
	"Nintendo Wii U",
	"public/images/slide2.jpg",
	"https://ru.wikipedia.org/wiki/Wii_U"
);
var slide3 = new Slide(
	":3",
	"Nintendo Wii",
	"public/images/slide3.jpg",
	"https://ru.wikipedia.org/wiki/Wii"
);
var slide4 = new Slide(
	"была провальной с самого начала",
	"Sony PlayStation Vita",
	"public/images/slide4.jpg",
	"https://ru.wikipedia.org/wiki/PlayStation_Vita"
);



function buildSlider(){
	var myHTML;
	for(var i = 0; i < slideArray.length; i++) {
		myHTML += "<div id='" + slideArray[i].id +
			"' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
				"<div class='slideOverlay'>" +
					"<h1 class='titleSlide'>" + slideArray[i].title + "</h1>" +
				"</div>" +
			"</div>";
	}

	document.getElementById("mySlider").innerHTML = myHTML;
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

function buildReverseSlider(){
	var myHTML;
	for(var i = 0; i < slideArray.length; i++) {
		myHTML += "<div id='r" + slideArray[i].id +
			"' class='singleSlide reverse' style='background-image:url(" + slideArray[i].background + ");'>" +
				"<div class='slideOverlay'>" +
					"<h4>" + slideArray[i].subtitle + "</h4>" +
					"<a class='slider' href='" + slideArray[i].link + "' target='_blank'><span>Open</span></a>" +
				"</div>" +
			"</div>";
	}

	document.getElementById("myReverseSlider").innerHTML = myHTML;
	document.getElementById("rslide" + currentSlideIndex).style.left = 0;
}

buildSlider();
buildReverseSlider();

function prevSlide(){
	var nextSlideIndex;
	if (currentSlideIndex === 0 ) {
		nextSlideIndex = (slideArray.length - 1);
	} else {
		nextSlideIndex = currentSlideIndex - 1;
	}

	document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	document.getElementById("rslide" + nextSlideIndex).style.left = "100%";
	document.getElementById("rslide" + currentSlideIndex).style.left = 0;

	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
	document.getElementById("rslide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight reverse");
	document.getElementById("rslide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft reverse");

	currentSlideIndex = nextSlideIndex;
}

function nextSlide(){
	var nextSlideIndex;
	if (currentSlideIndex === (slideArray.length - 1) ) {
		nextSlideIndex = 0;
	} else {
		nextSlideIndex = currentSlideIndex + 1;
	}

	document.getElementById("slide" + nextSlideIndex).style.left = "100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	document.getElementById("rslide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("rslide" + currentSlideIndex).style.left = 0;

	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
	document.getElementById("rslide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft reverse");
	document.getElementById("rslide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight reverse");

	currentSlideIndex = nextSlideIndex;
}
