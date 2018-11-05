$(function() {
	//半秒之后显示
	setTimeout(function(){
		$('#show').fadeIn();
	},500)
	//关闭当前页面并打开首页
	$('.close').click(function(){
		close();
		window.open("index.html")
	})
	//隐藏当前窗口
	$('.agree').click(function(){
		$('#show').fadeOut();
	})
	//鼠标拖拽
	$('#show').mousedown(function(e) {
		$('#show').css('cursor','move');
		var x = e.pageX - $('#show').offset().left;
		var y = e.pageY - $('#show').offset().top;
		$(window).mousemove(function(eve){
			var ll=eve.pageX-x;
			var tt=eve.pageY-y;
			if(ll<=0){
				ll=0
			}else if(ll>=$(window).width()-$('#show').width()){
				ll=$(window).width()-$('#show').width()
			}
			if(tt<=0){
				tt=0;
			}else if(tt>=$(window).height()-$('#show').height()){
				tt=$(window).height()-$('#show').height();
			}
			
			$('#show').css({left:ll+'px',top:tt+'px'});
		})
	})
	$(window).mouseup(function(){
		$('#show').css('cursor','default');
		$(this).off('mousemove');
	})
	
})
