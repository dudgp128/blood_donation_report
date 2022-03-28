$(document).ready(function (e) {
    const blood_supply = dataset_2.filter((element) => element[1] == '공급 혈액량 (유닛)').map((element) => parseInt(element[2], 10))
    const total_blood_donation_count = dataset_2.filter((element) => element[1] == '총 헌혈실적 (건)').map((element) => parseInt(element[2], 10))
    const year_data = dataset_1.map((element) => parseInt(element[0], 10));

    let chart_2 = Highcharts.chart('BLD_Supply_Demand_2', {
        exporting: {
            enabled: false
        },
        credits: {
            href: 'https://www.bloodinfo.net/main.do',
            text: " *데이터 출처: 대한적십자사 「혈액정보통계」 ",
            style: {
                color: "#707070"
            }
        },
        title: {
            text: '[ 공급 혈액량과 헌혈건수 추이 ]',
            align: 'center',
            style: {
                fontSize: "13px"
            }

        },
        xAxis: {
            categories: year_data
        },

        plotOptions: {
            series: {
                lineWidth: 5
            }
        },

        yAxis: [
            {
                labels: {
                    formatter: function () {
                        return this.value / 1000000 + 'M'
                    }
                },
                title: {
                    text: '공급 혈액량 (유닛)'
                },
            },
            {
                labels: {
                    formatter: function () {
                        return this.value / 1000 + 'K'
                    }
                },
                title: {
                    text: '총 헌혈건수 (건)'
                },
                zIndex: 10,
                plotLines: [{
                    value: 3000,
                    color: 'green',
                    dashStyle: 'shortdash',
                    width: 2,
                    label: {
                        align: 'right',
                        text: '적정 혈액수급량',
                        x: 50,
                        y: 17
                    },
                    zIndex: 5

                }],
                opposite: true,
            },
        ],
        series: [{
            color: 'green',
            name: '총 헌혈건수(건)',
            yAxis: 1,
            data: total_blood_donation_count,
            marker: {
                enabled: false
            }
        }, {
            color: '#FF9DA7',
            name: '공급 혈액량(유닛)',
            data: blood_supply,
            marker: {
                enabled: false
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