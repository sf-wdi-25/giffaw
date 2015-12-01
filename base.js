$(document).ready(function(){

	var searchText = "drake rap";

	function convertStringToSearchTerm(string) {
	    string = string.replace(/ /g, "+");
	    return string;
	}

	convertStringToSearchTerm(searchText);

	$.ajax({
		method: 'GET',
		url: 'http://api.giphy.com/v1/gifs/search?q=' + searchText + '&api_key=dc6zaTOxFJmzC',
		dataType: 'json',
		success: function (taco) {
			taco.data.forEach(function(element,index){
				$(".gif").append("<img src='" + taco.data[index].images.fixed_height.url + "'>");
			});
  	}
	});

	// $('#searchgif').submit(function(x) {
 //    x.preventDefault();
 //    var submit = this.submit();
 //    console.log(submit);
	// });

}); 