var renewable_energy_by_country_data = [];

Papa.parse('/data_sets/csv/enigma-gov.eu.eurostats.tb-eu.sd.sd-cc.sd-cc-nrg.tsdcc330-242b5fc76aa31f1296271ff8a7fb207c.csv', {
    download: true,
    complete: function(results) {

      var series_data = [];
      var category_data = [];

      $( results.data ).each(function( key, value ) {
        if (key != 0) {
          var value3 =  isNaN(value[3]) ? 3 : parseInt(value[3]);
          var value5 =  isNaN(value[5]) ? 5 : parseInt(value[5]);
          var value7 =  isNaN(value[7]) ? 7 : parseInt(value[7]);
          var value9 =  isNaN(value[9]) ? 9 : parseInt(value[9]);
          var value11 = isNaN(value[11]) ? 11 : parseInt(value[11]);
          var value13 = isNaN(value[13]) ? 13 : parseInt(value[13]);
          var value15 = isNaN(value[15]) ? 15 : parseInt(value[15]);
          var value17 = isNaN(value[17]) ? 17 : parseInt(value[17]);
          var value19 = isNaN(value[19]) ? 19 : parseInt(value[19]);

          category_data.push(value3);
          series_data.push(
            {
              name: value[2],
              data: [value3, value5, value7, value9, value11, value13, value15, value17, value19]
            }
          );
        }
      })

      $(function () {
        $('#renewable_energy_container').highcharts({
          chart: {
            type: 'area'
          },
          title: {
            text: 'Renewable Energy by Country'
          },
          subtitle: {
            text: 'Source: Engima.io'
          },
          xAxis: {
            categories: [0, 10, 20, 30, 40, 50, 60, 70, 80],
            tickmarkPlacement: 'on',
            title: {
              enabled: false
            }
          },
          yAxis: {
            title: {
              text: 'percent'
            }
          },
          tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
            shared: true
          },
          plotOptions: {
            area: {
              stacking: 'percent',
              lineColor: '#ffffff',
              lineWidth: 1,
              marker: {
                lineWidth: 1,
                lineColor: '#ffffff'
              }
            }
          },
          series: series_data
        });
      });
    }
})

