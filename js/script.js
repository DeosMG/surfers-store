//nav-bar-menu

var menuMobile = document.getElementById('navBar');
var openBtn = document.getElementById('showBtn');
var closeBtn = document.getElementById('hideBtn');

openBtn.onclick = function() {
	menuMobile.style.display = 'block';
}

closeBtn.onclick = function() {
	menuMobile.style.display = 'none';
};

//slider-boards

var slideIndex=1;
showSlides(slideIndex);

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('dot-board');

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}
	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace('active','');
	}
	 slides[slideIndex-1].style.display = 'block';
	 dots[slideIndex-1].className += ' active';
}