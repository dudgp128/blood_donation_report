
        $(".nav_on").css("display", "none")
        $(".nav_off").css("display", "block")
        $(".nav0 > .nav_on").css("display", "block")
        $(".nav0 > .nav_off").css("display", "none")

        $(".navigation").css("top", parseInt(window_height) / 2 - parseInt($(".navigation").css("width")) + "px")

        $(document).ready(function (e) {


            
            var nav_div = $(".navigation>div").children()
            var nav = nav_div.slice(0, -1)



            $(window).on("scroll", function () {
                $(".nav_on").css("display", "none")
                $(".nav_off").css("display", "block")

                var sc_top = $(this).scrollTop();
                $(".top").text(sc_top)

                switch (true) {
                    case sc_top > 8380:
                        $(nav[nav.length - 1]).children().first().css("display", "block")
                        $(nav[nav.length - 1]).children().last().css("display", "none")
                        break;
                    case sc_top > 7915:
                        $(nav[nav.length - 2]).children().first().css("display", "block")
                        $(nav[nav.length - 2]).children().last().css("display", "none")
                        break;
                    case sc_top > 5750:
                        $(nav[nav.length - 3]).children().first().css("display", "block")
                        $(nav[nav.length - 3]).children().last().css("display", "none")
                        break;
                    case sc_top > 3800:
                        $(nav[nav.length - 4]).children().first().css("display", "block")
                        $(nav[nav.length - 4]).children().last().css("display", "none")
                        break;
                    case sc_top > 2130:
                        $(nav[nav.length - 5]).children().first().css("display", "block")
                        $(nav[nav.length - 5]).children().last().css("display", "none")
                        break;
                    case sc_top > 712:
                        $(nav[nav.length - 6]).children().first().css("display", "block")
                        $(nav[nav.length - 6]).children().last().css("display", "none")
                        break;
                    case sc_top >= 0:
                        $(nav[nav.length - 7]).children().first().css("display", "block")
                        $(nav[nav.length - 7]).children().last().css("display", "none")
                        break;
                }
            });

            $(".blood_truth_lie").on('click', function(e){
                $('html, body').animate({
                            scrollTop: 8676
                        });
            });

            var nav_cname = ""
            nav.on('click', function (e) {
                e.preventDefault();
                nav_cname = $(this).attr("class")
                switch (nav_cname) {
                    case "nav1":
                        $('html, body').animate({
                            scrollTop: 852
                        });
                        break;

                    case "nav2":
                        $('html, body').animate({
                            scrollTop:2277
                        });
                        break;

                    case "nav3":
                        $('html, body').animate({
                            scrollTop: 3981
                        });
                        break;
                    case "nav4":
                        $('html, body').animate({
                            scrollTop: 5924
                        });
                        break;
                    case "nav5":
                        $('html, body').animate({
                            scrollTop: 7978
                        });
                        break;
                    case "nav6":
                        $('html, body').animate({
                            scrollTop: 8676
                        });
                        break;
                    default: $('html, body').animate({
                        scrollTop: 0
                    });
                }
            });
        });