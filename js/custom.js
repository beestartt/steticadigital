(function () {
	"use strict";

	// menu sticky******************
	var myElement = document.querySelector(".menu-box");
	var headroom = new Headroom(myElement, {
		"offset": 46,
		"classes": {
			"initial": "animated",
		}
	});
	headroom.init();


	// smooth scroll****************
	$("html").niceScroll({
		zindex: "99999",
		scrollspeed: 50,
		mousescrollstep: 30,
		cursorwidth: "6px",
		cursorborder: "0",
		cursorcolor: "#d2d2d2",
		cursorborderradius: "0px",
	});


	// Partner carousel
	$(".partner").owlCarousel({
		autoPlay: false,
		items:5,
		scrollPerPage : false,
		loop: false,
		center:true,
		navigation:false,
		pagination:false,
		slideSpeed: 900,
		goToFirstSpeed : 1300,
		rewindNav:false,
		responsive: true,
		responsiveRefreshRate : 200
	});


	// accordion
	$(".seo-accordion").smk_Accordion({
		closeAble: true,
	});


	// Reputation Management carousel
	$(".reputation-crs").owlCarousel({
		items:1,
		autoPlay : 55000,
		stopOnHover : true,
		center:true,
		navigation:false,
		pagination:true,
		singleItem : true,
		autoHeight : true,
		responsive: true,
		responsiveRefreshRate : 200,
	});


	// Perfect SEO Expert carousel
	$(".perfect-seo-crs").owlCarousel({
		items:1,
		autoPlay : 5500,
		stopOnHover : true,
		center:true,
		navigation:true,
		pagination:false,
		rewindNav:false,
		singleItem : true,
		autoHeight : true,
		responsive: true,
		slideSpeed: 700,
		responsiveRefreshRate : 200,
	});


	// Full Services carousel
	$(".services-crs").owlCarousel({
		autoPlay: false,
		items:4,
		scrollPerPage : true,
		loop: false,
		center:true,
		navigation:true,
		pagination:true,
		slideSpeed: 900,
		goToFirstSpeed : 1300,
		rewindNav:false,
		responsive: true,
		responsiveRefreshRate : 200,
		itemsDesktop:[1340,3],
		itemsDesktopSmall:[992,2],
		itemsTablet:[768,1],
		itemsTabletSmall:!1,
		itemsMobile:[479,1]
	});


	// Victorious Services tabs
	$("a.victorious-item").on('click', function(event) {
        event.preventDefault();
        $(this).parent().addClass("victorious-tabs-menu-current");
        $(this).parent().siblings().removeClass("victorious-tabs-menu-current");
        var tab = $(this).attr("href");
        $(".victorious-tabs-content").not(tab).css("display", "none");
        $(tab).fadeIn(800);
    	});


	// Tabs menu Case Detail
	$(".project-tabs-menu a").on('click', function(event) {
        event.preventDefault();
        $(this).parent().addClass("project-tabs-current-menu");
        $(this).parent().siblings().removeClass("project-tabs-current-menu");
        var tab = $(this).attr("href");
        $(".project-tabs-content").not(tab).css("display", "none");
        $(tab).fadeIn(800);
    	});


	// Our partients speak carousel
	$(".our-partient-speak").owlCarousel({
		autoPlay: false,
		items:1,
		loop: false,
		center:true,
		navigation:true,
		pagination:true,
		singleItem : true,
		autoHeight : true,
		slideSpeed: 300,
		goToFirstSpeed : 1300,
		rewindNav:false,
		responsive: true,
		responsiveRefreshRate : 200,
	});


	// Full Range carousel
	$(".full-range-crs").slick({
		dots: true,
		arrows: false,
		vertical: true,
		infinite: true,
		// centerMode: true,
		// autoplay: true,
		verticalSwiping: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});


	// Client carousel
	$(".client").slick({
		dots: true,
		arrows: false,
		vertical: true,
		infinite: true,
		// centerMode: true,
		// autoplay: true,
		verticalSwiping: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});


	// Services testimonals carousel
	$(".services-testimonials").owlCarousel({
		autoPlay: false,
		items:1,
		loop: false,
		center:true,
		navigation:true,
		pagination:false,
		singleItem : true,
		autoHeight : true,
		slideSpeed: 300,
		goToFirstSpeed : 1300,
		rewindNav:false,
		responsive: true,
		responsiveRefreshRate : 200,
	});


	// Pricing REAL RESULTS carousel
	$(".pricing-results-crs").owlCarousel({
		autoPlay: false,
		items:4,
		loop: false,
		center:true,
		navigation:false,
		pagination:true,
		slideSpeed: 400,
		goToFirstSpeed : 1300,
		rewindNav:false,
		responsive: true,
		responsiveRefreshRate : 200,
	});


	// Video Light Box
	$(".play-btn").jqueryVideoLightning({
		autoplay: 1,
		backdrop_color: "#ddd",
		backdrop_opacity: 0.6,
		glow: 20,
		glow_color: "#000"
		});


	// Our case study page isotope
	$('.case-isotope-grid').isotope({
		layoutMode: 'fitRows',
		itemSelector: '.element-item',
		percentPosition: true,
		fitRows: {
			gutter: '.gutter-sizer'
			}
		});


	// Case Detail more item crs
	$(".case-detail-more-crs").owlCarousel({
		autoPlay: false,
		items:3,
		loop: false,
		center:true,
		navigation:false,
		pagination:true,
		autoHeight : true,
		slideSpeed: 500,
		goToFirstSpeed : 1300,
		rewindNav:false,
		responsive: true,
		responsiveRefreshRate : 200,
		itemsDesktop:[1199,2],
		itemsDesktopSmall:[979,2],
		itemsTablet:[768,1],
		itemsTabletSmall:!1,
		itemsMobile:[479,1]
	});


	// BLOG
	$(".blog-post-gallery").owlCarousel({
		autoPlay: false,
		items:1,
		loop: false,
		center:true,
		navigation:true,
		singleItem : true,
		pagination:false,
		slideSpeed: 300,
		goToFirstSpeed : 1300,
		rewindNav:false,
		responsive: true,
		responsiveRefreshRate : 200,
	});


	// couter up
	$(".counter-number").counterUp({
	    delay: 10,
	    time: 1000
	});


	// menu mobile
	$('.menu-box-right').slimmenu({
	    resizeWidth: '991',
	    initiallyVisible: false,
	    collapserTitle: '',
	    animSpeed: 'fast',
	    easingEffect: null,
	    indentChildren: false,
	    childrenIndenter: '&nbsp;&nbsp;',
	    expandIcon: '',
	    collapseIcon: ''
	});


	// search form effect
	$('.search-form-button').on('click', function(){
		$('.box-form-top').show();
		$('.menu-box-left, .menu-box-right').css('opacity', '0');
		$('.close-form-btn').on('click', function(){
			$('.box-form-top').hide();
			$('.menu-box-left, .menu-box-right').css('opacity', '1');
		})
	});


	// wow js
  	new WOW().init();


	// Scroll to top
	$(".scroll-to-top").on('click', function() {
	    $('html, body').animate({
	        scrollTop: $("body").offset().top
	    }, 500);
	});


	// parallax scrolling****************************
	if (jQuery().parallax) { jQuery(".parallax").parallax() }


	// Template Options****************************************************
	// var template_options_content = ' \
	// 	<h4>Option Panel</h4> \
	// 	<button class="switcher_btn"></button> \
	// 	<a class="btn buy-button" target="_blank" href="#">Buy Seotop</a> \
	// 	<h5>Change Color</h5> \
	// 	<div class="colors clearfix"> \
	// 		<a id="color1" href="#" data-style="color1"></a> \
	// 		<a id="color2" href="#" data-style="color2"></a> \
	// 		<a id="color3" href="#" data-style="color3"></a> \
	// 		<a id="color4" href="#" data-style="color4"></a> \
	// 		<a id="color5" href="#" data-style="color5"></a> \
	// 	</div><!-- colors --> \
	// 	<h5>Change Layout</h5> \
	// 	<div class="layout clearfix"> \
	// 		<a class="wide" href="#" data-style="wide"><img src="images/template-option/wide.png" alt="">Wide</a> \
	// 		<a class="boxed" href="#" data-style="boxed"><img src="images/template-option/boxed.png" alt="">Boxed</a> \
	// 	</div><!-- layout --> \
	// 	<div class="boxed-bg"> \
	// 		<h5>Change Bg Pattern</h5> \
	// 		<div class="patterns clearfix"> \
	// 			<a class="bg-pattern-1" href="#" data-style="bg-pattern-1"></a> \
	// 			<a class="bg-pattern-2" href="#" data-style="bg-pattern-2"></a> \
	// 			<a class="bg-pattern-3" href="#" data-style="bg-pattern-3"></a> \
	// 			<a class="bg-pattern-4" href="#" data-style="bg-pattern-4"></a> \
	// 			<a class="bg-pattern-5" href="#" data-style="bg-pattern-5"></a> \
	// 		</div><!-- pattern --> \
	// 		<h5>Change Bg Color</h5> \
	// 		<div class="patterns clearfix"> \
	// 			<a class="bg-pattern-6" href="#" data-style="bg-pattern-6"></a> \
	// 			<a class="bg-pattern-7" href="#" data-style="bg-pattern-7"></a> \
	// 			<a class="bg-pattern-8" href="#" data-style="bg-pattern-8"></a> \
	// 			<a class="bg-pattern-9" href="#" data-style="bg-pattern-9"></a> \
	// 			<a class="bg-pattern-10" href="#" data-style="bg-pattern-10"></a> \
	// 		</div><!-- pattern --> \
	// 	</div><!-- boxed-bg --> \
	// \ ';	
	// $("#template-options").prepend(template_options_content);	
	// $("#template-options .switcher_btn").on("click", function(e) {        
	// 	e.preventDefault();
	// 	$("#template-options").toggleClass("open");		
 //    });
	
	
	// var link = $('link[data-style="styles"]');
	// var startup_auto_colors = $.cookie('startup_auto_colors'),
	// 	startup_auto_layout = $.cookie('startup_auto_layout'),
	// 	startup_auto_bg_pattern = $.cookie('startup_auto_bg_pattern');

	// // check color start
	// if (!($.cookie('startup_auto_colors'))) {
	// 	$.cookie('startup_auto_colors', 'color1', 457);		
	// 	startup_auto_colors = $.cookie('startup_auto_colors');
	// 	link.attr('href', 'css/colors/' + startup_auto_colors + '.css');
	// 	$('#changeable-colors').attr('href', 'css/colors/' + startup_auto_colors + '.css');		
	// } else {				
	// 	link.attr('href', 'css/colors/' + startup_auto_colors + '.css');
	// 	$('#changeable-colors').attr('href', 'css/colors/' + startup_auto_colors + '.css');
	// };

	// // check layout start
	// if (!($.cookie('startup_auto_layout'))) {
	// 	$.cookie('startup_auto_layout', 'wide', 457);
	// 	startup_auto_layout = $.cookie('startup_auto_layout');
	// 	$("body").addClass(startup_auto_layout);
	// 	$('#template-options .layout a[data-style="wide"]');		
	// 	}else{
	// 		if (startup_auto_layout=="boxed") {
	// 			$('#template-options').addClass('has-boxed');
	// 			$("body").addClass(startup_auto_layout);
	// 			$("body").addClass("bg-pattern-2");
	// 			$("body").removeClass("wide");
	// 		} else {
	// 			$("body").addClass(startup_auto_layout);
	// 			$("body").removeClass("boxed bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10");	
	// 		};		
	// 	};

	// if ((startup_auto_layout =="boxed") && $.cookie('startup_auto_bg_pattern')) {
	// 	$("body").removeClass("bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10 wide");
	// 	$("body").addClass(startup_auto_bg_pattern);
		
	// } else {
	
	// 	if (startup_auto_layout =="boxed") {
	// 		$("body").removeClass("bg-pattern-1 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10");
	// 	} else {
	// 		$("body").removeClass("bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10 boxed");
			
	// 	}
		
	// };


	// // CHANGE COLOR //
	// $('#template-options .colors a').on('click',function(e) {
		
	// 	var $this = $(this),
	// 		startup_auto_colors = $this.data('style');
			
	// 	e.preventDefault();
		
	// 	link.attr('href', 'css/colors/' + startup_auto_colors + '.css');
	// 	$('#changeable-colors').attr('href', 'css/colors/' + startup_auto_colors + '.css');
	// 	$.cookie('startup_auto_colors', startup_auto_colors, 457);
				
	// });
	// //**************Set active layout display***************
	// $('#template-options .layout a.boxed').on('click',function(e) {
	// 	if ($.cookie('startup_auto_layout', 'boxed', 457)) {
	// 		$('#template-options').addClass('has-boxed');
	// 	}
	// });
	// // BOXED LAYOUT //
	// $('#template-options .layout a.boxed').on('click',function(e) {
	// 	e.preventDefault();
	// 	$("body").addClass("boxed");
	// 	$("body").removeClass("wide");
	// 	$.cookie('startup_auto_layout', 'boxed', 457);
	// 	if ($.cookie('startup_auto_bg_pattern')) {
			
	// 		var startup_auto_bg_pattern = $.cookie('startup_auto_bg_pattern');
			
	// 		$("body").removeClass("bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10");
	// 		$("body").addClass(startup_auto_bg_pattern);
	// 	}
	// });
	// // WIDE LAYOUT
	// $('#template-options .layout a.wide').on('click',function(e) {
	// 	e.preventDefault();
	// 	$('#template-options').removeClass('has-boxed');
	// 	$("body").addClass("wide");
	// 	$("body").removeClass("boxed bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10");
	// 	$.cookie('startup_auto_layout', 'wide', 457);
	// });
	// // CHANGE PATTERNS //
	// $('#template-options .patterns a').on('click',function(e) {
		
	// 	var $this = $(this),
	// 		startup_auto_bg_pattern = $this.data('style');
			
	// 	e.preventDefault();
			 
	// 	$("body").removeClass("bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10 wide");
	// 	$("body").addClass(startup_auto_bg_pattern);
	// 	$("#template-options select").val("boxed");
	// 	$.cookie('startup_auto_bg_pattern', startup_auto_bg_pattern, 457);
		
	// });

})(jQuery);
