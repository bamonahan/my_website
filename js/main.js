function initialize(){
  jQueryAjax();
  debugAjax();
}
//define function initialize
function jQueryAjax(){
//define ajax function
  var mydata;
  //create variable that holds the data
  $.ajax("data/megacities.geojson", {
    //basic jQuery ajax method
    dataType: "json",
    //data type is set to json
    success: function(response){
    /* if the data is successfully retrieved,
    the function is called */
      mydata = response;
      //mydata is now the response called from the server
      console.log(mydata);
      //prints geojson data to the console
    }
  });
  console.log(mydata);
  /* "undefined" will appear in the console,
  showing that data cannot be accessed outside
  of the callback function */
}

function debugAjax(){
//creates the function debugAjax

  var mydata;
  //create variable that holds the data

	$.ajax("data/megacities.geojson", {
  //basic jQuery ajax method
		dataType: "json",
    //data type is set to json
		success: function(response){
    /* if data is successfully retrieved
    the function is called */

      mydata = response;
      //mydata is now the response called from the server

      $("#mydiv").append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
      /* adds the geojson data in a string to mydiv */
		}
	});
};


$(document).ready(initialize)
//calls the function initialize when the document is ready
