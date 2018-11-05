// 吸顶灯
$(function(){
	$(window).scroll(function(){
		var tt=$(document).scrollTop();
		if(tt>300){
			$('.top').fadeIn('slow');
		}else{
			$('.top').fadeOut('slow');
		}
		if(tt>600){
			$('.floor').fadeIn('slow');
		}else{
			$('.floor').fadeOut('slow');
		}
	})
})

//banner图轮播
$(function(){
	var m=0;
	function run(){
		timer=setInterval(function(){
			m++;
			if(m>$('.banner li').size()){
				m=0;
			}
			$('.banner li').eq(m).addClass('active').siblings('li').removeClass('active');
			$('.dian li').eq(m).addClass('active_dian').siblings('li').removeClass('active_dian');
		},1000)
	}
	run();
	$('.menu').mouseover(function(){
		clearInterval(timer);
		$('.dian li').mouseenter(function(){
			m=$(this).index();
			$('.banner li').eq(m).addClass('active').siblings('li').removeClass('active');
			$('.dian li').eq(m).addClass('active_dian').siblings('li').removeClass('active_dian');
		})
	}).mouseleave(function(){
		run();
	})
})


// banner图左侧选项
$(function(){
	$('.list>ul li').mouseover(function(){
		$(this).addClass('active');
		$(this).find('.list_link').show();
	}).mouseleave(function(){
		$('.list_link').hide();
		$(this).removeClass('active');
	})
})

// 图标切换区域
$(function(){
	$('.ico_pic li').hover(function(){
		$(this).find('a').show();
	},
	function(){
		$(this).find('a').hide();
	}
	)
})
//天猫超市切换部分
$(function(){
	$('.qiehuan li').mouseover(function(){
		$(this).addClass('qie_act').siblings().removeClass('qie_act');
		var index=$(this).index();
		$('.qie_cont>div').eq(index).addClass('show').siblings().removeClass('show');
	})
})
//楼层滚动
$(function(){
	$('.floor li').click(function(){
		var index=$(this).index();
		var top=$('.ceng').eq(index).offset().top;
		console.log(top);
		$('html').animate({
			scrollTop:top},500);
	})
	var heights=[];
	$('.ceng').each(function(){
		heights.push($(this).offset().top)
	})
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		var index;
		for(i=0;i<heights.length;i++){
			if(top>=heights[i] && top<=heights[i+1]){
				index=i;
				$('.floor li').eq(index).css('background','red').siblings().css('background','#666');
			}else if(top>=heights[heights.length-1]){
					index=heights.length-1;
					$('.floor li').eq(index).css('background','red').siblings().css('background','#666');
				}
		}
	})
})

// 右侧导航
$(function(){
	$('.rightnav ul li').click(function(){
		console.log($(this).index());
	})
	$('.rightnav li').hover(
			function(){
				$(this).find('.nav_down').animate({right:30+'px',top:0+'px'}).show().end();
			},
			function(){
				$(this).find('.nav_down').animate({right:60+'px',top:0+'px'}).fadeOut();
			}
		)
})