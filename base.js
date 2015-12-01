$(document).ready(function(){

//This commented out section works to make th page display the gifs

	// $.ajax({
	// method: 'GET',
	// url: 'http://api.giphy.com/v1/gifs/search?q=godzilla&api_key=dc6zaTOxFJmzC',
	// success: function (display) {
	// 	display.data.forEach(function(element, index) {
	// 		$(".gif").append("<img src='" + display.data[index].images.fixed_height.url + "'>");
	// 	});
	
	// }
	// });

//This section is my best attempt at making the text box display the new gifs
//It failed, which I expected, but at the same time is kind of weird since the cosole.log of 
//newUrl is identical to the original url, so I don't see why this wouldn't work

	$(document).keyup(function(e) {
		if(e.keyCode == 13) {
			var urlPartOne = "'http://api.giphy.com/v1/gifs/search?q=";
			var urlPartThree ="&api_key=dc6zaTOxFJmzC'";
			var urlPartTwo = $("input").val();

			var newUrl = urlPartOne + urlPartTwo + urlPartThree;

			console.log(newUrl);

			$.ajax({
				method: 'GET',
				url: newUrl,
				success: function (display) {
					display.data.forEach(function(element, index) {
					$(".gif").append("<img src='" + display.data[index].images.fixed_height.url + "'>");
					});
	
				}
			})
		}
	});

});

