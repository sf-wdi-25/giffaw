$(document).ready(function(){
  

// can you render the mock data to the page?
  $.ajax({
 	method: 'GET',
  	url: 'http://api.giphy.com/v1/gifs/search?q=spiders&api_key=dc6zaTOxFJmzC',
  	// datatype: 'json',
  	success: function (response) {
    	response.data.forEach(function callback(element){
 			$(".gif").append("<img src=" + element.images.fixed_height.url + ">");
    	});
  	}
	});
});