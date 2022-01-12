
var highcharts_div = $(".highcharts-figure>div[id]")
var highcharts_width = [];
for (var i = 0; i < highcharts_div.length; i++) {
    highcharts_width.push($(highcharts_div[i]).css("width")
    )
}
var window_width = $(window).innerWidth()
var box2_width = 900
var update_box2 = 0

$(window).resize(function () {
    window_width = $(window).innerWidth()

   
        if ( parseInt(window_width)<700) {
            for (var i = 0; i < highcharts_div.length; i++) {
            $(highcharts_div[i]).css("width", "100%")
        }
        } else {
            for (var i = 0; i < highcharts_div.length; i++) {
            $(highcharts_div[i]).css("width", highcharts_width[i])
            }
        }
    
    if (parseInt(window_width) < 900) { 
        $(".box2").css("width", "100%")
        $(".navigation").css("display", "none")

        if (parseInt(window_width) < 700) {
            $(".chart_explain1").css("width", "100%")
        }
        else {
            $(".chart_explain1").css("width", "700px")
        }
    }
    else {
        $(".navigation").css("display", "block")
        $(".box2").css("width", box2_width + "px")
        $(".chart_explain1").css("width", "440px")
    }
});