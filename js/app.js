$(function () {
// load menu
    $('.header').load('../inc/header.html')

	$('.post-wrapper').slick({
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 3,
		nextArrow:$('.xi-angle-right'),
		prevArrow:$('.xi-angle-left')
	});

	const prev_page = document.querySelector(".prev_page")
	prev_page.textContent = 1

	$('.post-wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		prev_page.textContent = (currentSlide+1)%4 + 1
	});



})