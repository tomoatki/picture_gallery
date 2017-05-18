$(document).ready(function(){

	$('nav a').on('click', function(){
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');


		// set the heading text
		$('h1#heading').text($(this).text());


		//Get and filter
		var category = $(this).text().toLowerCase().replace(' ','-');

		// remove hidden class if all projects is selected
		if(category == 'all-projects'){
			$('ul#gallery li:hidden').fadeIn('slow').removeClass(hidden);
		} else {
			$('ul#gallery li').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				} else{
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		return false;

	});

	$('ul#gallery li').on('mouseenter', function(){
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');

		// validation 

		if(desc == null){
			desc ="click to Enlarge";
		}

		if (title == null){
			title ="";
		}

		// create overlay div

		$(this).append('<div class="overlay"></div>');

		var overlay = $(this).children('.overlay');

		//add html to overlay

		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

		overlay.fadeIn(800);

	});

	// mouse leave function 
	$('ul#gallery li').on('mouseleave', function(){

		$(this).append('<div class="overlay"></div>');

		var overlay = $(this).children('.overlay');

		//fadeout 
		overlay.fadeOut(500);

	});
});