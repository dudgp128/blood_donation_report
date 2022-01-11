var $ = window.jQuery;
$(document).ready(function (e) {
    var _10s = [];
    var _20s = [];
    var _30s = [];
    var _40s = [];
    var _50s = [];
    var _60s = [];
    var year_data = [];

    dataset_3.forEach(function (element, index) {
        switch (index % 6) {
            case 0:
                _10s.push(parseInt(element[2]));
                year_data.push(parseInt(element[0]));
                break;
            case 1:
                _20s.push(parseInt(element[2]));
                break;
            case 2:
                _30s.push(parseInt(element[2]));
                break;
            case 3:
                _40s.push(parseInt(element[2]));
                break;
            case 4:
                _50s.push(parseInt(element[2]));
                break;
            case 5:
                _60s.push(parseInt(element[2]));
                break;
        }
    });

    //실적(건)에 대한 총계 - 연령비율 (태블로 - 3-2)
    var chart = Highcharts.chart('people_donation_percentage', {
        chart: {
            type: 'area'
        },
        exporting: {
            enabled: false
        },
        title: {
            text: "[ 연령별 헌혈 비중과 미래 인구 변화에 따른 헌혈률 예측 ]",
            style:{
                fontSize:"13px"
            }            
        },
        credits:{
            text:'* 데이터 출처:  대한적십자사 「혈액정보통계」'
        },
        xAxis: {
            categories: year_data
        },
        yAxis: {
            lables: {
                format: '{value}%' //★ 왜 '%'로 바뀌지 않을까요?
            },
            title: {
                text: '실적(건)에 대한 총계'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                stacking: 'percent'
            },
            series: {
                marker: {
                    enabled: false
                }
            },
        },
        series: [{
            name: '60세이상',
            data: _60s,
            color: '#70A685'
        }, {
            name: '50~59세',
            data: _50s,
            color: '#84B491'
        }, {
            name: '40~49세',
            data: _40s,
            color: '#94c496'
        }, {
            name: '30~39세',
            data: _30s,
            color: '#b4d199'
        }, {
            name: '20~29세',
            data: _20s,
            color: '#dbdc9d'
        }, {
            name: '16~19세',
            data: _10s,
            color: '#f8e3a2'
        }],
    });
});
