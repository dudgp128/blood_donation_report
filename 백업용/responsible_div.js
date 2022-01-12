var highcharts_width = [];
var box_2_width=$(".box_2").css("width")

var highcharts_div = $(".highcharts-figure>div[id]")
for (var i = 0; i < highcharts_div.length; i++) {
    highcharts_width.push($(highcharts_div[i]).css("width")
    )
}


$(window).resize(function () {
    window_width = $(window).innerWidth()

    if(window_width<900){
        $(".box_2").css("width","100%")
        for (var i = 0; i < highcharts_div.length; i++) {
            $(highcharts_div[i]).css("width", "100%")
        }
    }
    else{
        $(".box_2").css("width","900px")
        $(highcharts_div[i]).css("width", highcharts_width[i])
        
    }

    if (parseInt(window_width) < 900) { 
        $(".navigation").css("display", "none")
        update_box2 = 1

        if (parseInt(window_width) < 700) {
            $(".chart_explain1").css("width", "100%")
        }
        else {
            $(".chart_explain1").css("width", "700px")
        }
    }
    else {
        $(".navigation").css("display", "block")
        update_box2 = 0
    }
});