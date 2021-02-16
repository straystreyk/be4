$(function () {
	const burger = $('.burger');
	const lineBurger = $('.line_burger');
	const menuOpen = $('.menu_open');
	const body = $('body');
	const overlayMenu = $('.overlay_menu_open');
	const exitMenuOpen = $('.exit_menu');
	const linkMenuOpen = $('.link_menu_open');
	const social = $('.social');
	const navMenuOpen = $('.nav_menu_open');
	const scroller = $('.scroller');
	const section1Height = $('.section_1').outerHeight() + $('header').outerHeight() - 10;
	const slider = $('.slider');
	const sliderCatalog = $('.slider_catalog');
	const btnQuestion = $('.btn_question');
	const answer = $('.answer');
	const question = $('.question');
	const item1 = $('.item_1');
	const item2 = $('.item_2');
	const item3 = $('.item_3');
	const btnItem = $('.btn_item');
	const DocumentHeight = $(document).height();
	const footerHeight = $('footer').height();
	const checkoutHeight = $('.checkout').height();
	const questionHeight = $('.questions_catalog').height();

	// Section_1
	burger.click(function() {
		lineBurger.toggleClass('transform_burger');
		menuOpen.toggleClass('menu_open_active');
		body.toggleClass('stop_scrolling');
		navMenuOpen.toggleClass('animate__animated animate__fadeInUp');
		social.toggleClass('animate__animated animate__fadeInUp');
	});
	exitMenuOpen.click(function() {
		menuOpen.removeClass('menu_open_active');
		lineBurger.removeClass('transform_burger');
		body.removeClass('stop_scrolling');
		navMenuOpen.toggleClass('animate__animated animate__fadeInLeft');
		social.toggleClass('animate__animated animate__fadeInLeft');
	});
	$('.scroller').click(function(){
			$('html, body').animate({ scrollTop: `${section1Height}px`}, 500, 'swing');
	});



	// Slider

	slider.slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		prevArrow: $('.arrow_left'),
		nextArrow: $('.arrow_right'),
	})

	sliderCatalog.slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		arrows: false
	})

	// questions
	question.click(function() {
		$(this).children(btnQuestion).toggleClass('active_btn_question');
		$(this).next().toggleClass('active_answer');

	});


	// PopUp
	$('.btn_form').magnificPopup({
		mainClass: 'mfp-fade',
		removalDelay: 750,
		mainClass: 'mfp-fade'
	});

	// for media 
	if ($(window).width() < 992) {
		$('.advantages_img').attr('data-wow-delay', '0s');
		$('.text_advantages' ).children().attr('data-wow-delay', '0.2s');
	}

	// Catalog
	item1.click(function() {
		$('html, body').stop().animate({ scrollTop: $('.header_catalog').height()}, 500, 'linear');
		menuOpen.removeClass('menu_open_active');
		lineBurger.removeClass('transform_burger');
		body.removeClass('stop_scrolling');
	});
	item2.click(function() {
		$('html, body').stop().animate({ scrollTop: $('.section_1_catalog').height() + $('.header_catalog').height()}, 500, 'linear');
		menuOpen.removeClass('menu_open_active');
		lineBurger.removeClass('transform_burger');
		body.removeClass('stop_scrolling');
	});
	item3.click(function() {
		$('html, body').stop().animate({ scrollTop: $('.section_2_catalog').height() + $('.header_catalog').height() + $('.section_3_catalog').height()}, 500, 'linear');
		menuOpen.removeClass('menu_open_active');
		lineBurger.removeClass('transform_burger');
		body.removeClass('stop_scrolling');
	});

	btnItem.click(function(event) {
		$('html, body').stop().animate({ scrollTop: $(document).height() - $('footer').height() - $('.checkout').height() - $('.questions_catalog').height() - 125}, 500, 'linear');
		menuOpen.removeClass('menu_open_active');
		lineBurger.removeClass('transform_burger');
		body.removeClass('stop_scrolling');
	});
});