// 放大镜
$(function() {
    $('#small').mousemove(function(e) {
        $('#move,#big').show();
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        var x = x - $('#move').width() / 2;
        var y = y - $('#move').height() / 2;

        if (x <= 0) {
            x = 0
        } else if (x >= $('#small').width() - $('#move').width()) {
            x = $('#small').width() - $('#move').width()
        }

        if (y <= 0) {
            y = 0;
        } else if (y >= $('#small').height() - $('#move').height()) {
            y = $('#small').height() - $('#move').height()
        }

        $('#move').css({ left: x, top: y });

        var scale = $('#big>img').width() / $('#small>img').width();
        $('#big>img').css({ left: -x * scale, top: -y * scale });
        $('#big>img').attr('src', $('#small_pic').attr('src'));

    }).mouseout(function() {
        $('#move,#big').hide();
    });

    $('#dian>li>img').mouseover(function() {
        $('#small>img').attr('src', $(this).attr('src'))
    })
})
// 看了又看图片切换
$(function(){
    var m=0;
    $('.mainright .next').click(function(){
        m++;
        if(m>$('.lun>li').size()){
            m=0;
        }
        $('.lun>li').eq(m).addClass('active').siblings('li').removeClass('active');
    })
    $('.mainright .prev').click(function(){
        m--;
        if(m<0){
            m=$('.lun>li').size()-1;
        }
        $('.lun>li').eq(m).addClass('active').siblings('li').removeClass('active');
    })
})
// 右侧导航
$(function() {
    $('.rightnav ul li').click(function() {
        console.log($(this).index());
    })
    $('.rightnav li').hover(
        function() {
            $(this).find('.nav_down').animate({ right: 30 + 'px', top: 0 + 'px' }).show().end();
        },
        function() {
            $(this).find('.nav_down').animate({ right: 60 + 'px', top: 0 + 'px' }).fadeOut();
        }
    )
})