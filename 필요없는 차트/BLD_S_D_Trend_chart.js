var $ = window.jQuery;

        $(document).ready(function (e) {
            
            var blood_supply = [];
            var total_blood_donation_people = [];
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
                total_blood_donation_people.push(parseInt(element[3]) / 1000);
            });


            var zones = []
            var colors = ['#F0F1F1', '#DEEAE8', '#F1F1F1', '#DBE9E7', '#C5E0DD', '#C5E0DD', '#C1DFDB', '#B9DCD7', '#A4D3CE', '#8FCAC3', '#82C4BC', '#90C9C3', '#75BEB6', '#69B7AF', '#67B6AD', '#54ADA3'];
            for (let i = 0; i < colors.length - 1; i++) {
                var c1 = colors[i]
                if (i < colors.length - 2) {
                    var c2 = colors[i + 1]
                    zones.push({
                        value: i + 1,
                        color: {
                            linearGradient: { x1: 0.1, x2: 0, y1: 0, y2: 0 },
                            stops: [
                                [0, c1],
                                [1, c2]
                            ]
                        }
                    })
                } else {
                    zones.push({
                        value: i + 1,
                        color: c1
                    })
                }
            }

            var chart = Highcharts.chart('BLD_Supply_Demand_1', {
                exporting: {
                    enabled: false
                },
                credits:{
                    enabled:false
                },
                title: {
                    text: '혈액 수급량과 공급량 추이'
                },
                xAxis: {
                    categories: year_data
                },
                yAxis: [
                    {
                        min: 19,
                        labels: {
                            format: '{value}M'
                        },
                        title: {
                            text: '공급혈액량(유닛)'
                        },
                    },
                    {
                        min: 1200,
                        labels: {
                            format: '{value}K'
                        },
                        title: {
                            text: '헌혈자 수(명)'
                        },
                        opposite: true,
                    },
                ],
                legend: {
                    y: -50,
                    x: -100,
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'bottom',
                    floating: true,
                },
                series: [{
                    name: '총 헌혈자수(명)',
                    yAxis: 1,
                    marker: {
                        enabled: false
                    },
                    zones:zones,
                    zoneAxis:'x',
                    data:total_blood_donation_people
                }, {
                    name: '공급 혈액량(유닛)',
                    yAxis: 0,
                    color: '#FF9DA7',
                    marker: {
                        enabled: false
                    },
                    data: blood_supply
                }
                ],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        }
                    }
                    ]
                }
            });
            chart_update("donation_people");
            chart.setSize(null);
            function chart_change_1(){
                console.log("함수변화)")    
            }

            if(($html).scrollTop()==1400){
                console.log("함수변화")
                chart_update("donation_count")
            }

            function chart_update(class_name) {

                var total_blood_donation_count = [];
                var blood_supply = [];
                var total_blood_donation_people = [];
                var year_data = [];

                dataset_2.forEach(function (element, index) {

                    if (element[1] == '총 헌혈실적 (건)') {
                        total_blood_donation_count.push(parseInt(element[2]) / 1000);
                    }
                    else if (element[1] == '공급 혈액량 (유닛)') {
                        blood_supply.push(parseInt(element[2]) / 1000000);
                    }
                });

                dataset_1.forEach(function (element, index) {
                    year_data.push(parseInt(element[0]));
                    total_blood_donation_people.push(parseInt(element[3]) / 1000);
                });

                if (class_name == "donation_people") {
                    donation_people_chart(total_blood_donation_people);
                }
                else {
                    donation_count_chart(total_blood_donation_count);
                }
            };

            function donation_people_chart(data) {
                var zones = []
                var colors = ['#F0F1F1', '#DEEAE8', '#F1F1F1', '#DBE9E7', '#C5E0DD', '#C5E0DD', '#C1DFDB', '#B9DCD7', '#A4D3CE', '#8FCAC3', '#82C4BC', '#90C9C3', '#75BEB6', '#69B7AF', '#67B6AD', '#54ADA3'];
                for (let i = 0; i < colors.length - 1; i++) {
                    var c1 = colors[i]
                    if (i < colors.length - 2) {
                        var c2 = colors[i + 1]
                        zones.push({
                            value: i + 1,
                            color: {
                                linearGradient: { x1: 0.1, x2: 0, y1: 0, y2: 0 },
                                stops: [
                                    [0, c1],
                                    [1, c2]
                                ]
                            }
                        })
                    } else {
                        zones.push({
                            value: i + 1,
                            color: c1
                        })
                    }
                }
                chart.update({
                    legend: {
                        y: -50,
                        x: -100,
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'bottom',
                        floating: true,
                    },
                    xAxis: {
                        categories: year_data
                    },
                    yAxis: [
                        {
                            min: 0,
                            labels: {
                                format: '{value}M'
                            },
                            title: {
                                text: '공급혈액량(유닛)'
                            },
                        },
                        {
                            min: 0,
                            labels: {
                                format: '{value}K'
                            },
                            title: {
                                text: '헌혈자 수(명)'
                            },
                            opposite: true,
                        }
                    ],
                    series: [{
                        yAxis:1,
                        name: '총 헌혈자수(명)',
                        data: data,
                        zoneAxis: 'x',
                        zones: zones
                    }, {
                        data: blood_supply,
                        yAxis:0
                    }]
                });
            };


            function donation_count_chart(data) {
                console.log("update->count")
                chart.update({
                    legend: {
                        y: -50,
                        x: -100,
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'bottom',
                        floating: true,
                    },
                    xAxis: {
                        categories: year_data
                    },
                    yAxis: [
                        {
                            min: 0,
                            labels: {
                                format: '{value}M'
                            },
                            title: {
                                text: '공급혈액량(유닛)'
                            },
                        },
                        {
                            min: 0,
                            labels: {
                                format: '{value}K'
                            },
                            title: {
                                text: '헌혈건수 (건)'
                            },
                            plotLines: [{
                                value: 3000,
                                color: 'green',
                                dashStyle: 'shortdash',
                                width: 2,
                                label: {
                                    align: 'right',
                                    text: '적정 혈액수급량'
                                }

                            }],
                            opposite: true,
                        },
                    ],

                    series: [{
                        color: 'green',
                        name: '총 헌혈건수(건)',
                        yAxis:1,
                        data: data,
                        zones: [],
                    }, {
                        data: blood_supply,
                        zones: []
                    }]
                }
                );
                chart.setSize(null);
            }
        });