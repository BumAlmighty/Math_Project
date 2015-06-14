$(document).ready(function() {
  // /tables page
  $('#table2').dataTable({
    'paging'  : true,
    'searching' : true
  });

  // $.getJSON("../js/data_sets/us.gov.eia.860.json", function(json) {
  //    console.log(json.result); // this will show the info it in firebug console

  //    $( json.result ).each(function( key, value ) {

  //    	console.log( value );
  //    	console.log( value.city );
  //    	console.log( value.ultility_name );
  //    	console.log( value.street_address );
  //    	console.log( value.sector_name );
  //    	console.log( value.ownerstate );
  //    	console.log(name + ' ' + key)
  //    }

  // $.getJSON("../js/data_sets/us.gov.eia.860.json", function(json) {
  // }

  $.getJSON("/data_sets/json/Fuel_Consumption.json", function(json) {
    console.log(json.result); // this will show the info it in firebug console

    // data collection is creaing var, to hold data.
    var data_collection = '';

    // creating a lopp for the data_sets inside json file.
    $( json.result ).each(function( key, value ) {
      //data_collection = value.city;
      data_collection = data_collection + '<b>STATE: </b>' + "<u>" + value.state + "</u>" +"<br>";
      data_collection = data_collection + '<b>City: </b>' + "<i>" + value.city + "</i> " + '<br>';
      data_collection = data_collection + '<b>Companies Name maybe: </b><i>' + value.ownertransdist + "</i><br>" 
      data_collection = data_collection + '<b>Address: </b><i>' + value.street_address + '</i><br>'
      data_collection = data_collection + "<b>Sector Name: </b><i>" + value.sector_name + "</i><br>"
      data_collection = data_collection + "<b>Name of Water Source: </b><i>" + value.name_of_water_source +"</i><br>"
      data_collection = data_collection + '<b>Grid Voltage: </b><i>' + value.gridvoltage + "</i><br>"
    });

    // value data collection side the selected div.
    $("#test").html(data_collection);
  });
});
