jQuery(function($) {
    $('#btnResume').click(function() {
        $('#resumeBlock').css('visibility', 'visible');
        $('#resume').css('visibility', 'visible');
    });
    
    $('#exit').click(function() {
        $('#resumeBlock').css('visibility', 'hidden');
        $('#resume').css('visibility', 'hidden');
    });
    
    setInterval(function() {
        for (var i = 0; i < 5; i++) {
            $('html,body').scrollTo($('homeBg'+i).hash, $('homeBg'+i).hash);
        }
    }, 1000);
    
    window.addEventListener("scroll", function(event) {
        var top = this.scrollY;
//            left =this.scrollX;
//        console.log(top);
        if (top > 2700) {
            $('#app img').css('display', 'block');
        } else if (top > 3500) {
            $('#app div img').src("images/roomies/app/ROOMIES-V24.jpg");
        } else {
            $('#app img').css('display', 'none');
        }
    }, false);
    
    $(document).on("scrollstart",function() {
        if ($('nav').position().top < 0) {
            $('.menu').animate({
                top: -200
            }, 1000);
            $('nav').animate({
                top: 20
            }, 1000);
        }
    });

    $(document).on("scrollstop",function() {
        if(!$('nav').is(":hover") && $('.menu').position().top < 0) {
            setTimeout(function () {
                $('.menu').animate({
                    top: 20
                }, 1000);
                $('nav').animate({
                    top: -200
                }, 1000);
            }, 1000);
        }
    });

    $(document).ready(function() {
        $('.menu').click(function () {
            $('.menu').animate({
                top: -200
            }, 1000);
            $('nav').animate({
                top: 20
            }, 1000);
        });

        $('nav').hover(function () {
            if ($('nav').position().top < 0) {
                $('.menu').animate({
                    top: -200
                }, 1000);
                $('nav').animate({
                    top: 20
                }, 1000);
            }
        }, function () {
            if(!$('nav').is(":hover") && $('.menu').position().top < 0) {
                $('.menu').animate({
                    top: 20
                }, 1000);
                $('nav').animate({
                    top: -200
                }, 1000);
            }
        });

        /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */
        $("nav a").click(function (ev) {
            ev.preventDefault();
            // $('nav').mouseover();
            $('html,body').scrollTo(this.hash, this.hash);
        });

        $("#imageButtons a").click(function (ev) {
            ev.preventDefault();
            // var padding = $('#work ul li:first-child').css('padding-left').replace(/[^-\d\.]/g, '');
            $('#work ul').scrollTo(this.hash, {duration:'slow'});
        });

        document.getElementById("images").style.overflowX = "scroll";

        // var setSkrollr = function($el, data) {
        //     for (var i = 0, l = data.length; i < l; i++) {
        //         var d = data[i],
        //             px = d[0];
        //             css = d[1];
        //         $el.attr('data-' + px, css);
        //     }
        // }
        
        // setSkrollr($('#images'), [[0, 'transform:translateX(-100%)'], [750, 'transform:translateX(100%)'], [1500, 'transform:translateX(-100%)']]);
        
        // skrollr.init({
        //     smoothScrolling: false
        // });

    });
    
});
