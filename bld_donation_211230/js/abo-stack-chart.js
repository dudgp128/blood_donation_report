$(document).ready(function (e) {
    let blood_days_color = ['#EB7022', '#9e3d22', '#2b5c8a', '#316596']
    const blood_ABO = [];
    dataset_7.forEach((element, index) => {
        blood_ABO.push({
            name: element[0],
            data: [{
                y: parseInt(element[1], 10),
                bld_days: element[2],
                color: blood_days_color[index]
            }]
        });
    });
    blood_ABO.reverse();

    let chart = Highcharts.chart('blood_type_p', {
        exporting: {
            enabled: false
        },
        credits: {
            href: 'https://www.bloodinfo.net/main.do',
            text: "* 데이터 출처:  대한적십자사 「혈액정보통계」",
            style: {
                color: "#707070"
            },
        },
        legend: {
            enabled: false
        },
        chart: {
            type: 'bar',
            height: 250
        },
        title: {
            text: " [ 혈액형별 적혈구제제 혈액 보유현황 ] ",
            align: 'center',
            style: {
                fontSize: '13px'
            },
        },
        xAxis: {
            visible: false,
        },
        yAxis: {
            visible: false

        },
        series: blood_ABO,
        plotOptions: {
            series: {
                stacking: 'percent',
                dataLabels: {
                    enabled: true,
                    format: '{series.name} 형<br/>{point.y}<br/>{point.bld_days}'
                },
                pointWidth: 250
            },
        },
        tooltip: {
            formatter: function () {
                return '<span style="color:' + this.point.color + '">\u25CF</span> 혈액형 : <b>' + this.series.name + '</b><br/>' + '연 평균 헌혈건수 (건) : <b>' + Highcharts.numberFormat(this.point.y, 0) + '</b><br/>' + '일 평균 보유일수 (일분) : <b> ' + this.point.bld_days + '</b>'
            }
        }

    });


});