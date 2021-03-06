(function($) {

	function menu() {
		var $menuContainer = $('#block-2');
		var $menuBlock = $menuContainer.find('#item-1c');
		var $menu = $menuBlock.find('.menu');
		var $menuOpen = $menuContainer.find('.open-menu');
		var $menuOpenText = $menuOpen.find('span');
		var $menuOpenIcon = $menuOpen.find('i');
		var $menuClose = $menuBlock.find('.close-menu');

		$menuOpenText.on('click', function() {
			$menu.slideDown();
			$menuOpenIcon.fadeOut();
			$menuClose.fadeIn();
		});

		$menuClose.on('click', function() {
			$menu.slideUp();
			$menuOpenIcon.fadeIn();
			$menuClose.fadeOut();
		});

	}menu();

	// Form
	function form() {
		var $form = $('.form-container');
		var $iconOpen = $('.link-form');
		var $iconClose = $form.find('.close-form');
		var $ok = $form.find('.message-ok');
		var $error = $form.find('.message-error');
		var timer = 'slow';

		$form.hide();

		$iconOpen.on('click', function() {
			$form.slideDown(timer);
		});

		$iconClose.on('click', function() {
			$form.slideUp(timer);
		});

		$ok.on('click', function() {
			$(this).fadeOut(timer);
		});

		$error.on('click', function() {
			$(this).fadeOut(timer);
		});
	}form();

	function slider() {
		// Cache DOM		
		var $sliderContainer = $('#block-3');
		var $mainSlider = $('.flicker-slider');

		// Iniital 
		$sliderContainer.hide();

		$mainSlider.flickerplate({
	        auto_flick              : true,
	        auto_flick_delay        : 8,
	        flick_animation         : 'transform-slide'
	    });

		setInterval(function() {   
			$sliderContainer.slideDown('slow');
		}, 800);

		$sliderContainer.find('.block-content').fadeIn().animate({
			'margin-left': '0'
		}, 2000);
	}slider();

	// Icon for slider navigation 
	function quotesSlider() {
		// Slider
		var $quotesContainer = $('.quotes-slider');
		var $quotesSlider = $quotesContainer.find('.q-slider');
		var $quotesSlide = $quotesSlider.find('.q-slide');

		// Controls
		var $controlContainer = $('.controls-center');
		var $controlNext = $controlContainer.find('.controls-next');
		var $controlPrev = $controlContainer.find('.controls-prev');
		var $currentQuotes = $('.q-active');

		// Icon
		$controlPrev.append('<i class="fa fa-angle-left"></i>');
		$controlNext.append('<i class="fa fa-angle-right"></i>');

	}quotesSlider(); 

	function quotes() {
		// Cache DOM
		var $quotesContainer = $('.quotes-slider');
		var $quotesBlock = $quotesContainer.find('.q-slider');
		var $quotes = $quotesBlock.find('.q-slide');
		var $quotesActive = $('.q-active');
		var $quotesNav = $quotesContainer.find('.controls-center');
		var $quotesPrev = $quotesNav.find('.controls-prev');
		var $quotesNext = $quotesNav.find('.controls-next');

		// Configuration
		var width = 600;
		var speed = 800;
		var interval = 6000;
		var current = 1;
		var timer = 'slow';

		setInterval(function() {
			$quotesBlock.css({'opacity' : 0});
			$quotesBlock.animate({'marginLeft' : '-='+width, 'opacity' : 1}, speed, function() {
				current++;

				if (current === $quotes.length+1) {
					current = 1;
					$quotesBlock.css('margin-left', 0);
				}
			});

		}, interval);

	}quotes();

}(jQuery));  
