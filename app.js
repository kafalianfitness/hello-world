$(document).ready(function() {

	//toggle view
	$('.profile-subheader .slidert').click(function() {
		$('.profile-content').toggleClass('timeline-view');
		$('#switch > span').toggleClass('active_switch');
	});

	$('.gallery-item').click(function() {
		$(this).toggleClass('selected');
	});


	console.log('include');
	var owl = $('.header-slider');
	owl.owlCarousel({
		loop:true,
		items:1,
		dots: false,
		nav:false
	});
	// Go to the next item
	$('.customNextBtn').click(function() {
		owl.trigger('next.owl.carousel');
	});
	// Go to the previous item
	$('.customPrevBtn').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
	});

	$('.transformation-slider').owlCarousel({
		loop:true,
		items:3,
		margin:30,
		navText:[,],
		dots: false,
		nav:false,
		responsive : {
			0 : {
				items:1,
				margin:0,
			},
			480 : {
				items:2,
				margin:10,
			},
			768 : {
				items:3,
				margin:30,
			}
		}
	});
	/* $('.achievements-slider').owlCarousel({
		loop:true,
		items:1,
		navText:[,],
		dots: false,
		nav:false,
		responsive:{
          320:{
            items:1,
            nav: true,
			dots: true
          },
          480:{
            items:1,
            nav: true,
			dots: true
          },
          768:{
            items:5,
            loop: false,
            nav: false,
            mouseDrag: false,
            autoWidth: false,
            callbacks: false,
            navRewind: false,
            dots: false,
            mergeFit: false,
            pullDrag: false,
            slideBy: 0
          },
          800:{
            items:5,
            loop: false,
            nav: false,
            mouseDrag: false,
            autoWidth: false
          },
          992:{
            items:5,
			margin:10,
            loop: false,
            nav: false,
            mouseDrag: false,
            autoWidth: false
          },
          1025:{
            items:5,
			margin:10,
            loop: false,
            nav: false,
            mouseDrag: false,
            autoWidth: false
          },
          1200:{
            items:5,
			margin:10,
            loop: false,
            nav: false,
            mouseDrag: false,
            autoWidth: false
          }
		}
	}); */

	$('.achievements-slider').owlCarousel({
		center: true,
		items:1,
		loop:true,
		navText:[,],
		dots: true,
		nav:true,
		autoWidth:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				dots:true,
				autoWidth:false
			},
			751:{
				items:5,
				nav:true,
				dots:true,
				autoWidth:true,
			}
		}
	});
	$( ".tr-circle input" ).change(function() {
	  var $input = $( this );
	  if($input.is( ":checked" )){
		$input.parent().addClass('active');
	  }else{
		$input.parent().removeClass('active');
	  }
	});

	  $('a.scroll-down').click(function(e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	  });


	function selectHeight() {
		if ($('input[name=feet]').val() == '0' && $('input[type=radio][name=units]:checked').val() == 'imperial') {
			alert("You must select your height!");
			return false;
		}

		if ($('input[name=centimeters]').val() == '90' && $('input[type=radio][name=units]:checked').val() == 'metric') {
			alert("You must select your height!");
			return false;
		}

		$('#pageHeight').hide();
		$('#pageWeight').show();
		window.scrollTo(0,0);

		return true;
	}

	function selectWeight() {
		if ($('input[name=weight]').val() == '0' && $('input[type=radio][name=units]:checked').val() == 'imperial') {
			alert("You must select your weight!");
			return false;
		}

		if ($('input[name=kilograms]').val() == '0' && $('input[type=radio][name=units]:checked').val() == 'metric') {
			alert("You must select your weight!");
			return false;
		}

		$('#pageWeight').hide();

		if(document.forms["surveyForm"]["gender"].value == 'Female'){
			$('#pageActivityFemale').show();
		}else{
			$('#pageActivity').show();
		}

		window.scrollTo(0,0);

		return true;
	}
	if($("#kilograms").length){
		$("#kilograms").slider();
		$("#kilograms").on("change", function(slideEvt) {
			$("#kilogramsVal").text($("input[name=kilograms]").val());
		});
	}
	if($("#centimeters").length){
		$("#centimeters").slider();
		$("#centimeters").on("change", function(slideEvt) {
			$("#centimetersVal").text($("input[name=centimeters]").val());
		});
	}
	if($("#feet").length){
		$("#feet").slider();
		$("#feet").on("change", function(slideEvt) {
			$("#feetVal").text($("input[name=feet]").val());
		});
	}
	if($("#inches").length){
		$("#inches").slider();
		$("#inches").on("change", function(slideEvt) {
			$("#inchesVal").text($("input[name=inches]").val());
		});
	}
	if($("#weight").length){
		$("#weight").slider();
		$("#weight").on("change", function(slideEvt) {
			$("#poundsVal").text($("input[name=weight]").val());
		});
	}

	 $('.hight input[type="radio"]').click(function(){
		if ($(this).is(':checked'))
		{
			$(this).parents('.hight').find('label').removeClass('active');
			$(this).parent().addClass('active');
			if($(this).val() == 'imperial'){
				$('.hight .metric').hide();
				$('.hight .imperial').show();
			}else{
				$('.hight .imperial').hide();
				$('.hight .metric').show();
			}
		}
	  });
	  $('.weight input[type="radio"]').click(function(){
		if ($(this).is(':checked'))
		{
			$(this).parents('.weight').find('label').removeClass('active');
			$(this).parent().addClass('active');
			if($(this).val() == 'kg'){
				$('.weight .lbs').hide();
				$('.weight .kg').show();
			}else{
				$('.weight .kg').hide();
				$('.weight .lbs').show();
			}
		}
	  });
	  $('.age input[type="radio"]').click(function(){
		if ($(this).is(':checked'))
		{
			$(this).parents('.age').find('label').removeClass('active');
			$(this).parent().addClass('active');
		}
	  });
});
