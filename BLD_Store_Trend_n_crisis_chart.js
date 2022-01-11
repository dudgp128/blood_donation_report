var $ = window.jQuery;
        $(document).ready(function (e) {
            var daily_chart = Highcharts.chart('daily_blood_supply_crisis', {
                exporting: {
                    enabled: false
                },
                credits:{
                    href: 'https://www.bloodinfo.net/main.do',
                    text:" *데이터 출처: 대한적십자사, 정보 공개 요청",
                    style:{
                        color:"#707070"
                    }
                },
                title: {
                    text: '[ 적혈구제제 혈액 보유현황 추이와 수급위기 단계 ]',
                    align:'center',
                    style:{
                        fontSize:"13px"
                    }
                },
                legend: {
                    enabled: false
                },
                yAxis: [
                    {
                        min: 0,
                        title: {
                            text: '보유수량 (유닛)'
                        },
                    },
                ],
                plotOptions: {
                    series: {
                        pointStart: Date.UTC(2007, 1, 1),
                        pointInterval: 24 * 3600 * 1000
                    }
                },
                xAxis: {
                    type: 'datetime',
                },
                series: [{
                    data:dataset_5,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 1, y2: 0 },
                        stops: [
                            [0.07, 'red'],
                            [0.14, 'orange'],
                            [0.21, '#c9d0cb'],
                            [0.22, '#85b8d9'],
                            [1, '#2e608f']]
                    },
                    lineWidth: 2,
                }],
                tooltip:{
                    pointFormat:'보유수량 (유닛) : <b> {point.y}</b>',
                     xDateFormat:'%Y년 %m월 %d일'
                }
                
            });
            
        });