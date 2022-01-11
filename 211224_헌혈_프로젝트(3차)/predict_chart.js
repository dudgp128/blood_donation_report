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

    var chart = Highcharts.chart('predict_blood_donation', {
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
            name: '총 헌혈실적(건)',
            yAxis: 1,
            marker: {
                enabled: false
            }
        },
        {
            name: '총 인구(명)',
            yAxis: 0,
            marker: {
                enabled: false
            }
        }]
    });
    var update_flag = 0;

    chart_update(0);

    $(window).on('scroll', function () {
        var sc_top = $(this).scrollTop();
        $(".top").text(sc_top);

        if (5800 <= sc_top && sc_top < 7329) {
            if (sc_top > 6800) {
                if (update_flag == 0) {
                    update_flag = 1;
                    chart_update(update_flag);
                    $(".sticky_explain_1").slideUp(200, "swing", function(){ return; });
                    $(".sticky_explain_2").slideDown(200, "swing", function(){ return; });
                }
            }
            else if (update_flag == 1) {
                update_flag = 0;
                chart_update(update_flag);
                $(".sticky_explain_2").slideUp(200, "swing", function(){ return; });
                $(".sticky_explain_1").slideDown(200, "swing", function(){ return; });
            }
        }
    });
    function chart_update(update_flag) {

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

        if (update_flag == 1) {
            chart.update({
                xAxis: {
                    categories: real_future_year,
                    plotLines: [{
                        value: 15,
                        width: 2,
                        color: 'rgb(255, 187, 0)',
                        label: {
                            rotation: 0,
                            verticalAlign: 'bottom',
                            y: -20,
                            text: '2021년부터 추계인구 기반 헌혈실적',
                        }
                    }],
                    plotBands: [{
                        color: 'rgba(255, 187, 0, .2)',
                        from: 15,
                        to: real_future_year.length
                    }]
                },
                series: [{
                    data: real_future_data_count,
                    zoneAxis: 'x',
                    zones: [{
                        value: 15,
                        color: '#A0CBE8'
                    }, {
                        value: real_future_year.length,
                        color: '#ffbe7d'
                    }
                    ]
                }, {
                    data: real_future_data_people,
                    zoneAxis: 'x',
                    zones: [{
                        value: 15,
                        color: '#4e79a7'
                    }, {
                        value: real_future_year.length,
                        color: '#f28e2b'
                    }
                    ]
                }]
            });
        }
        else {
            chart.update({
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
                series: [{
                    data: real_data_count
                }, {
                    data: real_data_people
                }]
            });
        }
    };
    $(window).on('scroll', function () {
        var sc_top = $(this).scrollTop();
        $(".top").text(sc_top);
    });
});