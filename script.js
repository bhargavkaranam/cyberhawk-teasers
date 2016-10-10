$(document).ready(function(){

	$(".hawk_moving").animate({'position' : 'relative','left' : '100%'},5000,function(){
		$(".hawk_moving").remove();
		$(".logo").fadeIn().promise().done(function(){
			$("footer div").show();
			$('footer div').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$("footer div").removeClass('animated fadeInLeft').hide().delay(1000).addClass('animated fadeInLeft').html("This time bigger and better").show();
				$('footer div').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$("footer div").removeClass('animated fadeInLeft').hide().addClass('animated fadeInLeft').html("Stay tuned!").show();
					$('footer div').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

					});
				});
			});
		});
		

	});

});