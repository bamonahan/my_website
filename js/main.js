//initialize function
function initialize(){
  cities();
  addColumns();
  addEvents();
  clickMe();
}

//creates table
function cities(){
  //define two arrays for cities and pop
  var cityPop = [
    {
      city: 'Beloit',
      population: 36888
    },
    {
      city: 'La Crosse',
      population: 51522
    },
    {
      city: 'Lake Delton',
      population: 2934
    },
    {
      city: 'Madison',
      population: 233209
    }
  ];
  //append the table element to the div
  $("#mydiv").append("<table>");

  //append a header row to the table
  $("table").append("<tr>");

  //add the city and population columns to the header row
  $("tr").append("<th>City</th><th>Population</th>");

  //loop that adds new row for each city
  for (var i = 0; i < cityPop.length; i++){
    //assign longer html strings to variable
    var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
    //add the row's html string to table
    $("table").append(rowHtml);
  };
  };

function addColumns(cityPop){
//creates the function addColumns
$('tr').each(function(i) {
  //adds to each row
  if (i == 0){
    //starts if statement
    $(this).append('<th>City Size</th>');
  } else {
    //starts else statement
    var citySize;
    //creates variable citySize
    if (cityPop[i-1].population < 100000){
      citySize = 'Small';
      /*if the city's population is less than 100,000
      then citySize = 'small'*/
    } else if (cityPop[i-1].population < 500000){
      citySize = 'Medium';
      /*if the city's population is less than 500,000 then
      citySize = 'Medium'*/
    } else {
      citySize = 'Large';
    };
    /*if the city's population is greater than 500,000 then
    citySize = 'Large' */
    $(this).append('<td>' + citySize + '</td>');
    //adds each city size to the city cize column
    };
  });
};


function addEvents(){
//creates function addEvents
    $('table').mouseover(function(){

      var color = "rgb(";
      //creates variable color
      for (var i=0; i<3; i++){

          var random = Math.round(Math.random() * 255);
          //generates random number
          color += random;
          //adds var random to var color
          if (i < 2){
              color += ",";
              //if randomly generated number is less than 2
              //a comma is added to var color
            } else {
              color += ")";
              /*if randomly generated number is not less than 2
              a parenthesis is added to var color*/
            };


            $("table").css('color', color);
          };

          function clickme(){
            //creates function clickme

            alert('Hey, you clicked me!');
          };
          //creates alert
          $('table').on('click', clickme);
        });
      };


$(document).ready(initialize)
