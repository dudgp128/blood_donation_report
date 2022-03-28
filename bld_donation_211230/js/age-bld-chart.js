$(document).ready(function (e) {
    let year_data = new Set(), age_category = new Set();

    dataset_3.forEach(function (element) {
        year_data.add(element[0])
        age_category.add(element[1])
    });
    year_data = Array.from(year_data);
    age_category = Array.from(age_category).reverse()

    let x = new Array(age_category.length);
    for (let i = 0; i < x.length; i++) {
        x[i] = new Array(year_data.length);
    }

    dataset_3.forEach((element, index) => {
        x[parseInt(index % 6, 10)][parseInt(index / 6, 10)] = parseInt(element[2], 10)
    })
    x = x.reverse()

    let color_list = ['#70A685', '#84B491', '#94c496', '#b4d199', '#dbdc9d', '#f8e3a2']

    const series_data = age_category.map((element, index) => {
        return {
            name: age_category[index],
            data: x[index],
            color: color_list[index]
        }
    });

    let chart = Highcharts.chart('people_donation_percentage', {
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
