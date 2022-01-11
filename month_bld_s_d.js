var $ = window.jQuery;
$(document).ready(function (e) {
    var month = [];
    var m_avg_possession = [];

    dataset_6.forEach(function (element, index) {
        month.push(element[0]);
        m_avg_possession.push({
            y:parseInt(element[1]),
            stored_day:parseFloat(element[2])
        });
    });

    var bar_color = []
    var bar_colors = ['#9e3d22', '#F8973A', '#9e3d22', '#e56621', '#346899', '#346899', '#346899', '#346899', '#6398c5', '#ba4c23', '#eccb9e', '#8cc0de']

    bar_colors.forEach(function (element, index) {
        bar_color.push({
            value: index + 1,
            color: bar_colors[index]
        })

    });

    var chart = Highcharts.chart('blood_avg_m', {
        exporting: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        
        title: {
            text: '[ 월별 적혈구제제 혈액 보유현황 ]',
            align:'center',
            style:{
                fontSize:"13px"
            }
        },
        
        credits: {
            href: 'https://www.bloodinfo.net/main.do',
            text: " *데이터 출처: 대한적십자사, 정보 공개 요청",
            style: {
                color: "#707070"
            }
        },
        chart: {
            type: 'bar'
        },
        xAxis: {
            categories: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            title: {
                text: null
            }
        },
        plotOptions:{
            series:{
                pointWidth:15
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: "월 평균 보유수량"
            }
        },
        series: [{
            data: m_avg_possession,
            zoneAxis: 'x',
            zones: bar_color
        }],
        tooltip:{
            pointFormat:' 월 평균 보유수량 (유닛): <b>{point.y}</b><br/> <span style="color:{point.color}">\u25CF</span>월 평균 보유일수 (일분) : <b>{point.stored_day:.2f} '
        }
    });

});