var div5_margin_top = parseInt(window_height) / 2
var div5_height = parseInt($(".inner_5> div").css("height")) / 2
$(".inner_5> div").css("padding-top", (div5_margin_top - div5_height - 150) + "px")
$(".box2").css("padding-top","150px")
$("figure:odd").css("padding-top","80px")

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

    for (var i = 0; i < highcharts_div.length; i++) {
        if (parseInt(highcharts_width[i]) >= parseInt(window_width)) {
            $(highcharts_div[i]).css("width", "100%")
        } else {
            $(highcharts_div[i]).css("width", highcharts_width[i])
        }
    }
    if (parseInt(window_width) < 900) { 
        $(".box2").css("width", "100%")
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
        $(".box2").css("width", box2_width + "px")
        $(".chart_explain1").css("width", "700px")
        update_box2 = 0
    }
});