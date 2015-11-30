var giphy_api_endpoint = "http://api.giphy.com/v1/gifs/search";
var offset = 0;
var returnKeyCode = 13;
var search_term = "cats";


$(document).ready(function(){
  getAndRenderGifs(search_term);
  $("input").keypress(evaluateSearch);
  $("button").click(loadMoar);
});

function evaluateSearch(event){
  var $input = $(this);
  search_term = $input.val();
  if(event.keyCode === returnKeyCode && search_term){
    offset = 0;
    getAndRenderGifs(search_term, offset);
  }
}

function loadMoar(){
  offset += 25;
  getAndRenderGifs(search_term, offset);
}

function getAndRenderGifs(search_term, offset){

  // this object will be converted to query parameters in our GET request
  var query_data = {
    q: search_term,
    offset: offset || 0,
    api_key: "dc6zaTOxFJmzC"
  };

  $.ajax({
    method: 'GET',
    url: giphy_api_endpoint,
    data: query_data,
    success: function(response){

      if (offset === 0){
        $("img").remove();
      }

      response.data.forEach(function(v,i){
        $("#gif-gallery").prepend($("<img>").attr("src", v.images.fixed_height.url));
      });
    }
  });
}
