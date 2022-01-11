
        var $ = window.jQuery;
        $(document).ready(function (e) {
            var blood_type_name = [];
            var blood_type_possession = [];
            var blood_type_days = [4, 3, 2, 1];

            dataset_7.forEach(function (element, index) {
                blood_type_name.push(element[0]);
                blood_type_possession.push(parseInt(element[1]));

            });
            var blood_days_color = ['#EB7022', '#9e3d22', '#2b5c8a', '#316596']
            var blood_type_data = [];
            blood_type_name.forEach(function (element, index) {
                blood_type_data.push({
                    name: element,
                    y: blood_type_possession[index],
                    z: blood_type_days[index],
                    color: blood_days_color[index]
                })

            });
            var chart = Highcharts.chart('blood_type_p', {
                exporting: {
                    enabled: false
                },
                chart: {
                    type: 'variablepie'
                },
                title: {
                    text: null
                },
                series: [{
                    innerSize: '20%',
                    zMin: 0,
                    data: blood_type_data
                }]
            });



        });