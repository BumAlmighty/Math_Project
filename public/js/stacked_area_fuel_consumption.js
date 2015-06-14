$(document).ready(function() {


    $.getJSON("/data_sets/json/Fuel_Consumption.json", function(json) {
        console.log(json.data); // this will show the info it in firebug console
    

        $( json.data ).each(function( key, value ) {
           console.log( value[8] );
           console.log( value[9] );
           console.log( value[10] );
           console.log( value[11] );
           console.log( value[12] );
           console.log( value[13] );
           console.log( value[14] );
           console.log( value[15] );
           console.log( value[16] );
           console.log( value[17] );
           console.log( value[18] );
           console.log( value[19] );
           console.log( value[20] );
        });

        $('#fuel_consumption').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Historic and Estimated Worldwide Population Growth by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Billions'
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000;
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' millions'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }]
        });
    });
})