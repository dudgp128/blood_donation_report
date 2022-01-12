var $ = window.jQuery;
$(document).ready(function (e) {
    var blood_supply = [];
    var total_blood_donation_count = [];
    var year_data = [];

    dataset_2.forEach(function (element, index) {
        if (element[1] == '공급 혈액량 (유닛)') {
            blood_supply.push(parseInt(element[2]) /1000000);
        }
        else if (element[1] == '총 헌혈실적 (건)') {
            total_blood_donation_count.push(parseInt(element[2]) / 1000);
        }
    });

    dataset_1.forEach(function (element, index) {
        year_data.push(parseInt(element[0]));
    });

    var chart_2 = Highcharts.chart('BLD_Supply_Demand_2', {
        exporting: {
            enabled: false
        },
        credits: {
            text:" *데이터 출처: 대한적십자사 「혈액정보통계」 ",
            style:{
                        color:"#707070"
                    }
        },
        title: {
            text: '[ 헌혈량과 공급 혈액량 추이 ]',
            align:'center',
            style:{
                fontSize:"13px"
            }

        },
        xAxis: {
            categories: year_data
        },
        
        plotOptions:{
            series:{
                lineWidth:5
            }
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
                zIndex:10,
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
            yAxis:1,
            data: total_blood_donation_count,
            marker:{
                enabled:false
            }
        }, {
            color:'#FF9DA7',
            name:'공급 혈액량(유닛)',
            data: blood_supply,
            marker:{
                enabled:false
            }
            
        }],
        
        legend: {
            y: -30,
            x: -80,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            floating: true,
        },
    });


});