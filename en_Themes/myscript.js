if ($.cookie("css")) {
    $("#theme").attr("href", $.cookie("css"));
}
$(".defTheme").click(function() {
    $("#theme").attr("href", $(this).attr('href'));
    $.cookie("css", $(this).attr('href'));
    return false;
});
//alert("People group");
var comp = new RegExp(location.host);
$('a').each(function() {
    if (comp.test($(this).attr('href'))) {
        // a link that contains the current host 
        $(this).addClass('local');
    } else {
        // a link that does not contain the current host
        $(this).addClass('external');
    }
});
//
$(document).ready(function() {
    $(".top-menu-toggelk").click(function() {
        $("#topleft_menu").toggleClass("main-top");
    });
});
//
$('a').filter(function() {
    return this.hostname && this.hostname !== location.hostname;
}).click(function() {
    $(this).attr('target', '_blank');
    var x = window.confirm('You are about to leave the website of People Group, India and view the content of an external website.');

    var val = false;
    if (x)
        val = true;
    else
        val = false;
    return val;
});

$(".navbar-toggle").click(function() {
    $(".collapse").toggleClass("show");
});


$(document).ready(function() {

    $('.img-dis').mousedown(function(e) {
        if (e.button == 2) {
            alert('Sorry, this functionality is disabled!');
            return false;
        } else {
            return true;
        }
    });

    /*$(".img-dis").on("contextmenu",function(){
    return false;
    }); */


    $(".search, .sopen").click(function() {
        $(".searchdiv").fadeToggle("slow");
    });
    $(".sidebarbutton,.sidebarhide").click(function() {
        $(".sidebarmenu").toggleClass("sidebaropen")
    })
    $(".news .toggle").click(function() {
        $("#vticker ul").toggleClass("scroll");
    });



    $(".news .toggle2").click(function() {
        $("#tender ul").toggleClass("scroll");
    });

    $('.datatable th').removeAttr('style');
    $('.inner table').wrap('<div class="table-responsive">');
    $(".inner table").addClass("table table-bordered table-striped")
    $(".removetblclass table").removeClass("table table-bordered table-striped")
    $("ul.entender").addClass("newsscroll")

    $(".pure-js-lightbox-container li").wrap('<div class="col-xs-6 col-md-6 col-sm-6 col-lg-3 photo-gallery">');
    $(".sitemap ul").removeClass("nav navbar-nav")
    $(".sitemap li").removeClass("dropdown")
    $(".sitemap li").removeClass("dropdown-submenu")
    $(".sitemap li a").removeClass("dropdown-toggle")
    $(".sitemap ul ul").removeClass("dropdown-menu")
    $(".sitemap ul").removeAttr("id", "menu")
    $(".menu ul").removeClass("nav navbar-nav policylink")
    $(".menu li").removeClass("dropdown")
    $(".menu li").removeClass("dropdown-submenu")
    $(".menu li a").removeClass("dropdown-toggle")
    $(".menu ul ul").removeClass("dropdown-menu")
    $(".menu ul").removeAttr("id", "nav")




    $(".hi-btn").click(function() {
        var cfrm = confirm("Welcome to people group.");
        if (cfrm == true) {
            window.location(this.window.url + "/hi");
            return true;
        } else if (cfrm == false) {
            return false;
        }
        //alert(crm);
    });





    var flag = 0;
    $(".submenu-indicator").click(function(e) {
        e.preventDefault();
        if (flag == 0) { // alert(flag);
            //$(this).parents().prev('a.external').addClass('submenu-indicator-minus');
            $(this).parent().before().addClass('submenu-indicator-minus');
            $(this).parent().next().css('display', 'block');
            // $(".submenu").css('display', 'block');
            flag++;
        } else {
            $(this).parent().before().removeClass('submenu-indicator-minus');
            $(this).parent().next().css('display', 'none');
            flag = 0;
        }
    });





});



//$(window).scroll(function () {

//    var height = $(window).scrollTop();

//    if (height > 132) {

//        $(".top-nav").addClass("menuFxd");

//    }

//    if (height < 132) {

//        $(".top-nav").removeClass("menuFxd");

//    }

//

//});

//// Date Time Function



tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");



function GetClock() {

    var d = new Date();

    var nday = d.getDay(),
        nmonth = d.getMonth(),
        ndate = d.getDate(),
        nyear = d.getYear();

    if (nyear < 1000) nyear += 1900;

    var nhour = d.getHours(),
        nmin = d.getMinutes(),
        nsec = d.getSeconds(),
        ap;



    if (nhour == 0) {
        ap = " AM";
        nhour = 12;
    } else if (nhour < 12) {
        ap = " AM";
    } else if (nhour == 12) {
        ap = " PM";
    } else if (nhour > 12) {
        ap = " PM";
        nhour -= 12;
    }



    if (nmin <= 9) nmin = "0" + nmin;

    if (nsec <= 9) nsec = "0" + nsec;



    document.getElementById('datetime').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth] + " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + ap + "";

}



window.onload = function() {

    GetClock();

    setInterval(GetClock, 1000);

}



/////////// END HERE



/////////// END HERE 



//$(".jobsearch").on("keyup", function() {

//  var filter = $(this).val(), count = 0;

//        $(".element-holder .element").each(function () {

//

//            var filter = $('.element').attr('data-name');

//            if ($(this).text().search(new RegExp(filter, "i")) < 0) {

//                //alert($(this).text());

//                $(this).show();

//            } else {

//                $(this).fadeOut();

//                

//                count++;

//            }

//        });

//});



//    $(document).ready(function () { 

//			$('.simplefilter li').click(function() {

//			$('.simplefilter li').removeClass('active');

//			$(this).addClass('active');

//		    });

//            //Initialize filterizr with default options

//            $('.filtr-container').filterizr();

//        });



//jQuery(document).ready(function() {

//var btns = "";

//var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//var letterArray = letters.split("");

//for(var i = 0; i < 27; i++){

//    var letter = letterArray.shift();

//    btns += '<button onclick="alert(\''+letter+'\');">'+letter+'</button>';

//    

//}

//});



$(function() {

    var Accordion = function(el, multiple) {

        this.el = el || {};

        this.multiple = multiple || false;



        // Variables privadas

        var links = this.el.find('.link');

        // Evento

        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)

    }



    Accordion.prototype.dropdown = function(e) {

        var $el = e.data.el;

        $this = $(this),

            $next = $this.next();



        $next.slideToggle();

        $this.parent().toggleClass('open');



        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');

        };

    }



    var accordion = new Accordion($('#iimjammu-list'), false);

});





$('a.hellotest').click(function(e)

    {



        e.preventDefault();

    });



$(window).load(function() {



    //	$("div").delegate( "form", "load", function() {

    $('#edit-name').val('');

    $('#edit-mail').val('');



});



$(document).ready(function() {

    $('a').each(function() {

        if (location.href === this.href) {

            $(this).addClass('selected');

            $('a').not(this).addClass('none');

            return false;

        }

    });

});










/* IMAGE CAPTION */

$(".grid-stack img").each(function() {
    var imageCaption = $(this).attr("title");
    if (imageCaption != '') {
        var imgWidth = $(this).width();
        var imgHeight = $(this).height();
        var position = $(this).position();
        var positionTop = (position.top + imgHeight - 26);
        $("<span class='title-caption'><em>" + imageCaption + "</em></span>").css({
            "position": "absolute",
            "top": positionTop + "px",

            "left": "18px",
            "width": imgWidth + "px"
        }).insertAfter(this);
    }
    var num = imageCaption;
    var mnum = num.indexOf("/");
    var title = num.substr(0, mnum)
    $(this).attr('title', title);
    $(this).attr('alt', title);
});

$(".title-caption em").each(function() {
    var num = $(this).html();
    var mnum = num.indexOf("/");
    var title = num.substr(0, mnum)
    $(this).html(title)
});

$(".grid-stack-item-content a").each(function(index) {
    var numm = $(this).attr('data-caption')
    var mnumm = numm.indexOf("/");
    var titlef = numm.substr(0, mnumm)
    $(this).attr('data-caption', titlef);
    $(this).on("click", function() {
        //	
        //alert($(this).attr('data-caption'));
        // For the boolean value
        //$(".fancybox-caption__body").hide()
        //var num = $(this).html();
        //var mnum = num.indexOf("/");
        //var title = num.substr(mnum+1, num.length)
        //$(this).html(title) 
    });

});