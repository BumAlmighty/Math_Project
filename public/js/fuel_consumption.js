$(document).ready(function() {

  $.getJSON("/data_sets/json/Fuel_Consumption.json", function(json) {
    console.log(json.data); // this will show the info it in firebug console
    var fuel_data = [];
    var country_names = [];
    var type9 = [];
    var type10 = [];
    var type11 = [];
    var type12 = [];
    var type13 = [];
    var type14 = [];
    var type15 = [];
    var type16 = [];
    var type17 = [];
    var type18 = [];
    var type19 = [];
    var type20 = [];

    $( json.data ).each(function( key, value ) {

      if ( (key != 76) && (key != 75) ) {
        var value9 =  isNaN(value[9]) ? 9 : parseInt(value[9]);
        var value10 = isNaN(value[10]) ? 10 : parseInt(value[10]);
        var value11 = isNaN(value[11]) ? 11 : parseInt(value[11]);
        var value12 = isNaN(value[12]) ? 12 : parseInt(value[12]);
        var value13 = isNaN(value[13]) ? 13 : parseInt(value[13]);
        var value14 = isNaN(value[14]) ? 14 : parseInt(value[14]);
        var value15 = isNaN(value[15]) ? 15 : parseInt(value[15]);
        var value16 = isNaN(value[16]) ? 16 : parseInt(value[16]);
        var value17 = isNaN(value[17]) ? 17 : parseInt(value[17]);
        var value18 = isNaN(value[18]) ? 18 : parseInt(value[18]);
        var value19 = isNaN(value[19]) ? 19 : parseInt(value[19]);
        var value20 = isNaN(value[20]) ? 20 : parseInt(value[20]);

        type9.push(value9);
        type10.push(value10);
        type11.push(value11);
        type12.push(value12);
        type13.push(value13);
        type14.push(value14);
        type15.push(value15);
        type16.push(value16);
        type17.push(value17);
        type18.push(value18);
        type19.push(value19);
        type20.push(value20);

        country_names.push(value[8])
      }

      // console.log( value[9] );
      // console.log( value[10] );
      // console.log( value[11] );
      // console.log( value[12] );
      // console.log( value[13] );
      // console.log( value[14] );
      // console.log( value[15] );
      // console.log( value[16] );
      // console.log( value[17] );
      // console.log( value[18] );
      // console.log( value[19] );
      // console.log( value[20] );
    });

    fuel_data = [
      {
        name: 'Total Consumption',
        data: type9
      },
      {
        name: 'Oil 2007',
        data: type10
      },
      {
        name: 'Natural Gas 2007',
        data: type11
      },
      {
        name: 'Coal 2007',
        data: type12
      },
      {
        name: 'Nuclear 2007',
        data: type13
      },
      {
        name: 'Hydro 2007',
        data: type14
      },
      {
        name: 'Total 2007',
        data: type15
      },
      {
        name: 'Oil 2008',
        data: type16
      },
      {
        name: 'Natural Gas 2008',
        data: type17
      },
      {
        name: 'Coal',
        data: type18
      },
      {
        name: 'Nuclear Energy',
        data: type19
      },
      {
        name: 'Hydro Electric',
        data: type20
      }
    ];

    $('#fuel_consumption_container').highcharts({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Stacked bar chart'
      },
      xAxis: {
        categories: country_names
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total fruit consumption'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: fuel_data

    });
  });
})
