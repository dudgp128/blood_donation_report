$(document).ready(function (e) {

    let year_data = new Set();
    let age_category = new Set();

    dataset_3.forEach(function (element, index) {
        year_data.add(element[0])
        age_category.add(element[1])
    });
    year_data = Array.from(year_data);


    var x = new Array(age_category.size);
    for (var i = 0; i < x.length; i++) {
        x[i] = new Array(year_data.size);
    }
    dataset_3.forEach((e, i) => {
        x[parseInt(i % 6)][parseInt(i / 6)] = parseInt(e[2])
    })


    x = x.reverse()
    color_list = color_list.reverse()
    age_category = Array.from(age_category).reverse()


    let color_list = ['#f8e3a2', '#dbdc9d', '#b4d199', '#94c496', '#84B491', '#70A685']
    const series_data = age_category.map((e, i) => {
        return {
            name: age_category[i],
            data: x[i],
            color: color_list[i]
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
            text: "[ 연령별 헌혈자 비중]",
            style: {
                fontSize: "13px"
            }
        },
        credits: {
            href: 'https://www.bloodinfo.net/main.do',
            text: '* 데이터 출처:  대한적십자사 「혈액정보통계」'
        },
        xAxis: {
            categories: year_data
        },
        yAxis: {
            lables: {
                format: '{value}%' //★ 왜 '%'로 바뀌지 않을까요?
            },
            title: {
                text: '헌혈건수 (건)'
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
        series: series_data
    });
    console.log(chart.series)
});
