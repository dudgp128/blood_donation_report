
var $ = window.jQuery;
$(document).ready(function (e) {
    var blood_type_name = [];
    var blood_type_possession = [];

    dataset_7.forEach(function (element, index) {
        blood_type_name.push(element[0]);
        blood_type_possession.push(parseInt(element[1]));

    });
    //A,O,B,AB
    var blood_days_color = ['#EB7022', '#9e3d22', '#2b5c8a', '#316596']
    var blood_type_data = [];
    for(let i=blood_type_name.length; i>0; i--){
        blood_type_data.push({
            name: blood_type_name[i-1],
            data: [blood_type_possession[i-1]]
        })
    }
    var chart = Highcharts.chart('blood_type_p', {
        exporting: {
            enabled: false
        },
        legend:{
            enabled:false
        },
        chart: {
            type: 'bar'
        },
        title: {
            text: null
        },
        xAxis: {
            visible: false
        },
        yAxis: {
            visible: false
        },
        series: blood_type_data,
        
        plotOptions: {
            series: {
                stacking: 'percent',
                dataLabels:{
                    enabled:true,
                    format:'{point.name}'
                    }
            }
        },
        
    });



});