$(document).ready(function() {


    $.getJSON("/data_sets/json/Fuel_Consumption.json", function(json) {
        console.log(json.data); // this will show the info it in firebug console
        var fuel_data = [];
        var country_names = [];

        $( json.data ).each(function( key, value ) {

              var nvalue9 =  isNaN(value[9]) ? 9 : parseInt(value[9]);
              var nvalue10 = isNaN(value[10]) ? 10 : parseInt(value[10]);
              var nvalue11 = isNaN(value[11]) ? 11 : parseInt(value[11]);
              var nvalue12 = isNaN(value[12]) ? 12 : parseInt(value[12]);
              var nvalue13 = isNaN(value[13]) ? 13 : parseInt(value[13]);
              var nvalue14 = isNaN(value[14]) ? 14 : parseInt(value[14]);
              var nvalue15 = isNaN(value[15]) ? 15 : parseInt(value[15]);
              var nvalue16 = isNaN(value[16]) ? 16 : parseInt(value[16]);
              var nvalue17 = isNaN(value[17]) ? 17 : parseInt(value[17]);
              var nvalue18 = isNaN(value[18]) ? 18 : parseInt(value[18]);
              var nvalue19 = isNaN(value[19]) ? 19 : parseInt(value[19]);
              var nvalue20 = isNaN(value[20]) ? 20 : parseInt(value[20]);

             country_names.push(value[8])

              fuel_data.push(
              {
                  name: value[8],
                  data: [nvalue9, nvalue10, nvalue11, nvalue12, nvalue13, nvalue14, nvalue15, nvalue16, nvalue17, nvalue18, nvalue19, nvalue20]
              }
              );

          console.log( value[8] );
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
          console.log(fuel_data)


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