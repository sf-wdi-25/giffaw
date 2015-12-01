$(document).ready(function(){

	function convertStringToSearchTerm(string) {
	    string = string.replace(/ /g, "+");
	    return string;
	}
	
	$("#gifsearch").keydown(function(event) {
		if (event.which === 13) {
			$("#gifsearch").html("");

			var searchText = $("#gifsearch").val();

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
		}
	});

}); 