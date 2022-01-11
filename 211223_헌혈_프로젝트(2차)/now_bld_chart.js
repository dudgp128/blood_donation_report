var $ = window.jQuery;
$(document).ready(function (e) {
    var real_data_people = [];
    var real_data_count = [];
    var real_future_data_people = [];
    var real_future_data_count = [];
    var year_data = [];
    var real_future_year = [];

    dataset_4.forEach(function (element, index) {
        if (element[1] == '실제') {
            year_data.push(parseInt(element[0]));
            real_data_people.push(parseInt(element[2]) / 1000000);
            real_data_count.push(parseInt(element[3]) / 1000);
        }
        real_future_data_people.push(parseInt(element[2]) / 1000000);
        real_future_data_count.push(parseInt(element[3]) / 1000);
        real_future_year.push(parseInt(element[0]));
    });

    var chart = Highcharts.chart('now_blood_donation', {
        exporting: {
            enabled: false
        },
        title: {
            text: ''
        },
        credits: {
            text:" *데이터 출처: 대한적십자사 「혈액정보통계」 ",
            style:{
                        color:"#707070"
                    }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: year_data,
            plotLines: [{
                enabled: false
            }
            ],
            plotBands: [{
                enabled: false
            }]
        },
        yAxis: [{
            min: 0,
            labels: {
                format: '{value}M'
            },
            title: {
                text: '총 인구(명)'
            }
        }, {
            min: 0,
            labels: {
                format: '{value}K'
            },
            title: {
                text: '총 헌혈실적(건)'
            },
            opposite: true,
            plotLines: [{
                value: 3000,
                color: 'black',
                dashStyle: 'shortdash',
                width: 2,
                label: {
                    align: 'right',
                    text: '적정 혈액수급량'
                }
            }]
        }],
        series: [{
            data: real_data_count,
            name: '총 헌혈실적(건)',
            yAxis: 1,
            marker: {
                enabled: false
            }
        },
        {
            data: real_data_people,
            name: '총 인구(명)',
            yAxis: 0,
            marker: {
                enabled: false
            }
        }]
    });
});