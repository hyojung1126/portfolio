$(function () {
// load menu
    $('.header').load('../inc/header.html')

// 포트폴리오 페이지
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

$('.post-wrapper').slick({
	centerMode: true,
  	centerPadding: '0',
  	slidesToShow: 3,
	  nextArrow:$('.xi-angle-right'),
	  prevArrow:$('.xi-angle-left')
//   	responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
  });

  const prev_page = document.querySelector(".prev_page")
  prev_page.textContent = 1

  $('.post-wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	prev_page.textContent = (currentSlide+1)%4 + 1
	console.log(currentSlide)
});


})