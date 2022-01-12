
var $ = window.jQuery;
$(document).ready(function (e) {
    var blood_type_name = [];
    var blood_type_possession = [];
    var blood_type_days=[];

    dataset_7.forEach(function (element, index) {
        blood_type_name.push(element[0])
        blood_type_possession.push(parseInt(element[1]))
        blood_type_days.push(element[2])
    });
    //A,O,B,AB
    var blood_days_color = ['#EB7022', '#9e3d22', '#2b5c8a', '#316596']
    var blood_type_data = [];
    for(let i=blood_type_name.length; i>0; i--){
        blood_type_data.push({
            name: blood_type_name[i-1],
            data: [{
                y:blood_type_possession[i-1],
                bld_days:blood_type_days[i-1],
                color:blood_days_color[i-1]
            }],
        })
    }
    console.log(blood_type_data)
    var chart = Highcharts.chart('blood_type_p', {
        exporting: {
            enabled: false
        },
        credits:{
            href: 'https://www.bloodinfo.net/main.do',
            text:"* 데이터 출처:  대한적십자사 「혈액정보통계」",
            style:{
                color:"#707070"
            },
        },
        legend:{
            enabled:false
        },
        chart: {
            type: 'bar',
            height:250
        },
        title: {
            text: " [ 기준별 적혈구제제 혈액 보유현황 ] ",
            align:'center',
            style:{
                fontSize:'13px'
            },
        },
        xAxis: {
            visible: false,
        },
        yAxis: {
            visible: false

        },
        series: blood_type_data,
        plotOptions: {
            series: {
                stacking: 'percent',
                dataLabels:{
                    enabled:true,
                    format:'{series.name}<br/>{y}<br/>{point.bld_days}'
                    }, 
                pointWidth: 250
            },
        },
        tooltip:{//혈액형,연평균 실적,일평균 보유일수
            formatter:function(){
                return '<span style="color:' + this.point.color + '">\u25CF</span> 혈액형 : <b>'+this.series.name+'</b><br/>'+'연평균 실적 : <b>'+this.point.y+'</b><br/>'+'일평균 보유일수 : <b>'+this.point.bld_days+'</b>'
            },
        }
        
       
        
    });


});