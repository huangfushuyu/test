// 轮播图
$(function() {
    var m = 0;

    function run() {
        timer = setInterval(function() {
            m++;
            if (m > $('.banner_pic li').size()) {
                m = 0;
            } else if (m < 0) {
                m = $('.banner_pic li').size() - 1;
            }
            $('.banner_pic li').eq(m).addClass('active').siblings('li').removeClass('active');
            $('.num li').eq(m).addClass('num_active').siblings('li').removeClass('num_active');
        }, 1500)
    }
    run();
    $('.banner').mouseenter(function() {
        clearInterval(timer);
        $('.num li').mouseenter(function() {
            m = $(this).index();
            $('.banner_pic li').eq(m).addClass('active').siblings('li').removeClass('active');
            $('.num li').eq(m).addClass('num_active').siblings('li').removeClass('num_active');
        })
    }).mouseleave(function() {
        run();
    })
})
//日期
$(function() {
    var dd = new Date();
    var YY = dd.getFullYear();
    var MM = dd.getMonth() + 1;
    var DD = dd.getDate();
    var week = dd.getDay();
    var x = 0;
    switch (week) {
        case 0:
            x = "星期日";
            break;
        case 1:
            x = "星期一";
            break;
        case 2:
            x = "星期二";
            break;
        case 3:
            x = "星期三";
            break;
        case 4:
            x = "星期四";
            break;
        case 5:
            x = "星期五";
            break;
        case 6:
            x = "星期六";
            break;
    }
    $('.newplan .date').text(YY + '/' + MM + '/' + DD + x);
})
/*吸顶灯*/
$(function() {

    $(window).scroll(function() {
        var tt = $(document).scrollTop();
        var one = $('.one').offset().top;
        if (tt >= one) {
            $('.newplan').css('position', 'fixed').css({ left:50+'%', top:0+'px', zIndex: 1000,marginLeft:-600+'px' }).css('background', '#fff');
        } else {
            $('.newplan').css('position', 'static').css({margin:'0 auto'});
        }
    })
})
// 右侧导航
$(function() {
    $('.rightnav li').hover(
        function() {
            $(this).find('.nav_down').animate({ right: 30 + 'px', top: 0 + 'px' }).show().end();
        },
        function() {
            $(this).find('.nav_down').animate({ right: 60 + 'px', top: 0 + 'px' }).fadeOut();
        }
    )
})

// 猜你喜欢
$(function() {
    $(window).scroll(function(){
    var TT=$(document).scrollTop();
    var cont = $('.brand').offset().top;
    var th=$('#cont').height();
    if(TT>=cont){
        $.ajax({
            url: "js/data.json",
            type: "get",
            async: true,
            dataType: "json",
            success: function(msg) {
                app(msg);
            }
        })


        //回调函数
        function app(msg) {
            $.each(msg, function(index, value) {
  
                $('<li>').append("<img src=" + value.avatar_url + ">")
                    .append("<p>" + value.login + "</p>")
                    .append("<p>" + value.id + "</p>")
                    .append("<span>" + value.html_url + "</span>")
                    .appendTo('#userlist');

            })

        }
    }
    if($(document).height()>30000){
        $(window).off();
    }
})
})