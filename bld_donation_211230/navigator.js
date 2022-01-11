       

        $(".nav_on").css("display", "none")
        $(".nav_off").css("display", "block")
        $(".nav0 > .nav_on").css("display", "block")
        $(".nav0 > .nav_off").css("display", "none")

        $(".navigation").css("top", parseInt(window_height) / 2 - parseInt($(".navigation").css("width")) + "px")
       //수정
        $(".over_div").css("top", parseInt(window_height) / 2 - parseInt($(".navigation").css("width")) + "px")
        
        $(document).ready(function (e) {
            var blood_mark=$(".fill_blood_mark")
            var blood_mark_y=[]

            for(var i=0; i<blood_mark.length; i++){
                blood_mark_y.push($(blood_mark[i]).offset().top)
            }
            var nav_div = $(".navigation>div").children()
            var nav = nav_div.slice(0, -1)

            $(window).on("scroll", function () {
                $(".nav_on").css("display", "none")
                $(".nav_off").css("display", "block")

                var sc_top = $(this).scrollTop();
                $(".top").text(sc_top)
                
                switch (true) {
                    case sc_top >= blood_mark_y[5]-180:
                        $(nav[nav.length - 1]).children().first().css("display", "block")
                        $(nav[nav.length - 1]).children().last().css("display", "none")
                        
                        break;
                    case sc_top >= blood_mark_y[4]-174:
                        $(nav[nav.length - 2]).children().first().css("display", "block")
                        $(nav[nav.length - 2]).children().last().css("display", "none")
                        break;
                    case sc_top >= blood_mark_y[3]-174:
                        $(nav[nav.length - 3]).children().first().css("display", "block")
                        $(nav[nav.length - 3]).children().last().css("display", "none")
                        break;
                    case sc_top >= blood_mark_y[2]-174:
                        $(nav[nav.length - 4]).children().first().css("display", "block")
                        $(nav[nav.length - 4]).children().last().css("display", "none")
                        break;
                    case sc_top >= blood_mark_y[1]-174:
                        $(nav[nav.length - 5]).children().first().css("display", "block")
                        $(nav[nav.length - 5]).children().last().css("display", "none")
                        break;
                    case sc_top >= blood_mark_y[0]-174:
                        $(nav[nav.length - 6]).children().first().css("display", "block")
                        $(nav[nav.length - 6]).children().last().css("display", "none")
                        break;
                    case sc_top >= 0:
                        $(nav[nav.length - 7]).children().first().css("display", "block")
                        $(nav[nav.length - 7]).children().last().css("display", "none")
                        break;
                }
            });

            $(".blood_truth").on('click', function(e){
                $('html, body').animate({
                            scrollTop: blood_mark_y[5]-174
                        });
            });

            var nav_cname = ""
            //수정
            $(".over_div>div").css("visibility","hidden")
            var over_div=($(".over_div > div"))
            
            $(".nav0").mouseover(function(){
                $(over_div).css("visibility", "hidden")
                $(over_div[0]).css("visibility","visible")
            })

            $(".nav1").mouseover(function(){
                
                $(over_div).css("visibility", "hidden")
                $(over_div[1]).css("visibility","visible")
            })
            $(".nav2").mouseover(function(){
                
                $(over_div).css("visibility", "hidden")
                $(over_div[2]).css("visibility","visible")
            })
            $(".nav3").mouseover(function(){
                
                $(over_div).css("visibility", "hidden")
                $(over_div[3]).css("visibility","visible")
            })
            $(".nav4").mouseover(function(){
                
                $(over_div).css("visibility", "hidden")
                $(over_div[4]).css("visibility","visible")
            })
            $(".nav5").mouseover(function(){
                
                $(over_div).css("visibility", "hidden")
                $(over_div[5]).css("visibility","visible")
            })
            $(".nav6").mouseover(function(){
                
                $(over_div).css("visibility", "hidden")
                $(over_div[6]).css("visibility","visible")
            })

            $(nav).mouseout(function(){
                $(over_div).css("visibility","hidden")
            })


            nav.on('click', function (e) {
                e.preventDefault();
                nav_cname = $(this).attr("class")
                switch (nav_cname) {
                    case "nav1":
                        $('html, body').animate({
                            scrollTop: blood_mark_y[0]-150
                        });
                        
                        break;

                    case "nav2":
                        $('html, body').animate({
                            scrollTop:blood_mark_y[1]-150
                        });
                        break;

                    case "nav3":
                        $('html, body').animate({
                            scrollTop: blood_mark_y[2]-150
                        });
                        break;
                    case "nav4":
                        $('html, body').animate({
                            scrollTop: blood_mark_y[3]-150
                        });
                        break;
                    case "nav5":
                        $('html, body').animate({
                            scrollTop: blood_mark_y[4]-150
                        });
                        break;
                    case "nav6":
                        $('html, body').animate({
                            scrollTop: blood_mark_y[5]-150
                        });
                        break;
                    default: $('html, body').animate({
                        scrollTop: 0
                    });
                }
            });
        });