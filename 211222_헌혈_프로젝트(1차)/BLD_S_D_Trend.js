
var $ = window.jQuery;
$(document).ready(function (e) {

    var total_blood_donation_count = [];
    var blood_supply = [];
    var total_blood_donation_people = [];
    var year_data = [];

    dataset_2.forEach(function (element, index) {

        if (element[1] == '총 헌혈실적 (건)') {
            total_blood_donation_count.push(parseInt(element[2]) / 1000);
        }
        else if (element[1] == '공급 혈액량 (유닛)') {
            blood_supply.push(parseInt(element[2]) / 1000000);
        }
    });

    dataset_1.forEach(function (element, index) {
        year_data.push(parseInt(element[0]));
        total_blood_donation_people.push(parseInt(element[3]) / 1000);
    });

    var chart = Highcharts.chart('BLD_Supply_Demand', {
        exporting: {
            enabled: false
        },
        title: {
            text: '[ 헌혈량과 공급 혈액량 추이 ]',
            align:'center',
            style:{
                fontSize:"13px",
            },
        },
        credits:{
            text:" *데이터 출처: 대한적십자사 「혈액정보통계」 ",
            style:{
                color:"#707070"
            },
        },
        xAxis: {
            categories: year_data
        },
        yAxis: [
            {
                labels: {
                    format: '{value}M'
                },
                title: {
                    text: '공급혈액량(유닛)'
                },
            },
            {
                labels: {
                    format: '{value}K'
                },
                title: {
                    text: '헌혈자 수(명)'
                },
                opposite: true,
            },
        ],
        plotOptions:{
            series:{
                lineWidth:4
            }
        },
        legend: {
            y: -30,
            x: -80,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            floating: true,
        },
        series: [{
            name: '총 헌혈자수(명)',
            yAxis: 1,
            marker: {
                enabled: false
            },
        }, {
            name: '공급 혈액량(유닛)',
            yAxis: 0,
            color: '#FF9DA7',
            marker: {
                enabled: false
            },
            data: blood_supply
        }
        ],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                }
            }
            ]
        }
    });

    line_chart_update(0);

    function line_chart_update(class_name) {

        var total_blood_donation_count = [];
        var blood_supply = [];
        var total_blood_donation_people = [];
        var year_data = [];

        dataset_2.forEach(function (element, index) {

            if (element[1] == '총 헌혈실적 (건)') {
                total_blood_donation_count.push(parseInt(element[2]) / 1000);
            }
            else if (element[1] == '공급 혈액량 (유닛)') {
                blood_supply.push(parseInt(element[2]) / 1000000);
            }
        });

        dataset_1.forEach(function (element, index) {
            year_data.push(parseInt(element[0]));
            total_blood_donation_people.push(parseInt(element[3]) / 1000);
        });

        if (class_name == 0) {
            donation_people_chart(total_blood_donation_people);
        }
        else {
            donation_count_chart(total_blood_donation_count);
        }
    };

    function donation_people_chart(data) {
        var zones = []
        var colors = ['#F0F1F1', '#DEEAE8', '#F1F1F1', '#DBE9E7', '#C5E0DD', '#C5E0DD', '#C1DFDB', '#B9DCD7', '#A4D3CE', '#8FCAC3', '#82C4BC', '#90C9C3', '#75BEB6', '#69B7AF', '#67B6AD', '#54ADA3'];
        for (let i = 0; i < colors.length - 1; i++) {
            var c1 = colors[i]
            if (i < colors.length - 2) {
                var c2 = colors[i + 1]
                zones.push({
                    value: i + 1,
                    color: {
                        linearGradient: { x1: 0.1, x2: 0, y1: 0, y2: 0 },
                        stops: [
                            [0, c1],
                            [1, c2]
                        ]
                    }
                })
            } else {
                zones.push({
                    value: i + 1,
                    color: c1
                })
            }
        }
        chart.update({
            legend: {
                y: -50,
                x: -100,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'bottom',
                floating: true,
            },
            xAxis: {
                categories: year_data
            },
            yAxis: [
                {   
                    
                    labels: {
                        format: '{value}M'
                    },
                    title: {
                        text: '공급혈액량(유닛)'
                    },
                },
                {
                    labels: {
                        format: '{value}K'
                    },
                    title: {
                        text: '헌혈자 수(명)'
                    },
                    opposite: true,
                }
            ],
            series: [{
                name: '총 헌혈자수(명)',
                data: data,
                zoneAxis: 'x',
                zones: zones
            }, {
                data: blood_supply,
            }]
        });
    };


    function donation_count_chart(data) {
        chart.update({
            legend: {
                y: -50,
                x: -100,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'bottom',
                floating: true,
            },
            xAxis: {
                categories: year_data
            },
            yAxis: [
                {
                    labels: {
                        format: '{value}M'
                    },
                    title: {
                        text: '공급혈액량(유닛)'
                    },
                },
                {
                    labels: {
                        format: '{value}K'
                    },
                    title: {
                        text: '헌혈건수 (건)'
                    },
                    plotLines: [{
                        value: 3000,
                        color: 'green',
                        dashStyle: 'shortdash',
                        width: 2,
                        label: {
                            align: 'right',
                            text: '적정 혈액수급량',
                            x:50,
                            y:17
                        },
                        zIndex:5
                    }],
                    opposite: true,
                },
            ],

            series: [{
                color: 'green',
                name: '총 헌혈건수(건)',
                data: data,
                zones: [],
            }, {
                data: blood_supply,
                zones: []
            }]
        }
        );
    }
    var line_update_flag=0
    chart_explain_div=$("#BLD_Supply_Demand").siblings()
    $(chart_explain_div[1]).css("display","none")
    $(window).on('scroll', function () {
        var sc_top = $(this).scrollTop();
        $(".top").text(sc_top);

        if (1006 <= sc_top && sc_top < 2460) {
            if (sc_top > 1700) {
                if (line_update_flag == 0) {
                    line_update_flag = 1;
                    line_chart_update(line_update_flag);
                    $(chart_explain_div[0]).slideUp(200, "swing", function(){ return; });
                    $(chart_explain_div[1]).slideDown(200, "swing", function(){ return; });
                }
            }
            else if (line_update_flag == 1) {
                line_update_flag = 0;
                line_chart_update(line_update_flag);
                $(chart_explain_div[1]).slideUp(200, "swing", function(){ console.log("dosl") });
                $(chart_explain_div[0]).slideDown(200, "swing", function(){ return; });
            }
        }
    });
});