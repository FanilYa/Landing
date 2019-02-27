$(document).ready(function() {

	let headerMenuButton = $('.menu_head');


	headerMenuButton.click(function () {

		$('.hide_header_menu').css('display', 'flex');

		$('.header').css('filter', 'blur(5px)');

		$('.content').css('filter', 'blur(5px)');

		$('.section').css('filter', 'blur(5px)');

		$('.section_watch').css('filter', 'blur(5px)');

		$('.our_work').css('filter', 'blur(5px)');

		$('.sec_right').css('filter', 'blur(5px)');

		$('.sec_left').css('filter', 'blur(5px)');

		$('.comfort').css('filter', 'blur(5px)');
		
		$('.footer').css('filter', 'blur(5px)');

		$('html').css('overflow', 'hidden');

	})



	let closeHeaderMenu = $('.hide_header_menu');


	closeHeaderMenu.click(function () {

		$('.hide_header_menu').css('display', 'none');
		
		$('.header').css('filter', 'none');

		$('.content').css('filter', 'none');

		$('.section').css('filter', 'none');

		$('.section_watch').css('filter', 'none');

		$('.our_work').css('filter', 'none');

		$('.sec_right').css('filter', 'none');

		$('.sec_left').css('filter', 'none');

		$('.comfort').css('filter', 'none');
		
		$('.footer').css('filter', 'none');

		$('html').css('overflow-y', 'auto');

	})


	let orderButtom = $('.order');


	orderButtom.click(function () {

		$('html').css('overflow', 'hidden');

		$('.header').css('filter', 'blur(5px)');

		$('.content').css('filter', 'blur(5px)');

		$('.section').css('filter', 'blur(5px)');

		$('.section_watch').css('filter', 'blur(5px)');

		$('.our_work').css('filter', 'blur(5px)');

		$('.sec_right').css('filter', 'blur(5px)');

		$('.sec_left').css('filter', 'blur(5px)');

		$('.comfort').css('filter', 'blur(5px)');

		$('.footer').css('filter', 'blur(5px)');

		$('.order_place').fadeIn('100');
	})


	let closeOrder = $('.clouse_modal');


	closeOrder.click(function () {

		$('html').css('overflow-y', 'auto');

		$('.header').css('filter', 'none');

		$('.content').css('filter', 'none');

		$('.section').css('filter', 'none');

		$('.section_watch').css('filter', 'none');

		$('.our_work').css('filter', 'none');

		$('.sec_right').css('filter', 'none');

		$('.sec_left').css('filter', 'none');

		$('.comfort').css('filter', 'none');

		$('.footer').css('filter', 'none');

		$('.order_place').fadeOut('100');
	})


	let overview 		= $('#overview'),

		specification 	= $('#specification');


	overview.click(function () {

		specification.addClass('button_select');

		specification.removeClass('active_select');

		overview.addClass('active_select');

		overview.removeClass('button_select');

		let stars_class = $('.stars_class')

			hide_table = $('.hide_table');

		stars_class.removeClass('hide_stars');

		hide_table.addClass('hide_stars');

	})


	specification.click(function () {

		specification.addClass('active_select');

		specification.removeClass('button_select');

		overview.addClass('button_select');

		overview.removeClass('active_select');

		let stars_class = $('.stars_class')

			hide_table = $('.hide_table');

		stars_class.addClass('hide_stars');

		hide_table.removeClass('hide_stars');

	})

});