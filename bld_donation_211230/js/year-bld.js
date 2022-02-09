var $ = window.jQuery;
$(document).ready(function (e) {
    var annual_blood_data = []
    var year_data = []
    var column_color = ['#d55b22', '#598dbb', '#2b5c8a', '#2b5c8a', '#d55b22', '#97c8e2', '#2b5c8a', '#2b5c8a', '#81b7da', '#e56621', '#77add3', '#f07c28', '#d65c22', '#df6221', '#9e3d22']
    var zones = []
    for (let i = 0; i < dataset_8.length; i++) {
        annual_blood_data.push({
            y:parseInt(dataset_8[i][2]),
            stored_day:parseFloat(dataset_8[i][1])
        })
        year_data.push(dataset_8[i][0])
    }
    for (let i = 0; i < column_color.length; i++) {
        zones.push({
            value: i + 1,
            color: column_color[i]
        })
    }
    var annual_chart = Highcharts.chart('annual_blood_supply_crisis', {
        chart: {
            type: 'column'
        },
        credits:{
            href: 'https://www.bloodinfo.net/main.do',
            text:" *데이터 출처: 대한적십자사, 정보 공개 요청 ",
                    style:{
                        color:"#707070"
                    }
        },
        exporting: {
            enabled: false
        },
        title: {
            text: '[ 연도별 적혈구제제 혈액 보유현황 ]',
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
        xAxis: {
            categories: year_data
        },
        plotOptions:{
            series:{
                pointWidth: 28
            }
        },
        series: [{
            data: annual_blood_data,
            zoneAxis: 'x',
            zones: zones
        }],
        tooltip:{
            pointFormat:' 연 평균 보유수량 (유닛) : <b> {point.y}</b> <br/> <span style="color:{point.color}">\u25CF</span> 연 평균 보유일수 (일분) :<b>{point.stored_day:.2f}</b>'
        }
    });

    var tag_2 = $('.tag_2');
    tag_2.on('click', 'div', function (e) {
        e.preventDefault();
        tag_2.find('td').removeClass('on');
        $(this).parent().addClass('on');

        if ($(this).attr("class") == 'annual blood') {
            $('#daily_blood_supply_crisis').css("display", "none")
            $('#annual_blood_supply_crisis').css("display", "block")
        }
        else {
            console.log("yes_daily")
            $('#annual_blood_supply_crisis').css("display", "none")
            $('#daily_blood_supply_crisis').css("display", "block")
        }
    });
});