(function() {

	//自适应页面高度
	var fixedHeight = 0;
//	var headerHeight = $('header').height() || 0;
	var headerHeight = 0;
	var footerHeight = 0;
	
	//document.title = document.documentElement.clientHeight;
	setTimeout(function(){
		//延迟以便获取准确的高度，微信中默认打开webview获取的页面高度很高
		var mHeight = document.documentElement.clientHeight - headerHeight;
		$('.container').css('min-height',mHeight);
	}, 100);

	$('#h5_vedio').height(document.documentElement.clientHeight - headerHeight);
	var Media = document.getElementById("video1"); 
		  var l = 0;
		  $("#J_ctrl").on('click', function() {
		  	if(Media.paused) {
		  		Media.play();
		  		$(this).removeClass().addClass("btn-control-play");
		  		bartimer; 
		  	}
		  	else {
		  		Media.pause();
		  		$(this).removeClass().addClass("btn-control");
		  		window.clearInterval(bartimer);  
		  	}		  
		  });
		  function setProcess() {
		  	var j_process_all = $('div.vedio-process');
			  var j_process = $('.vedio-process-status');
			  var j_process_dot = $('.vedio-process-dot');
			  var vedioTime = Media.duration; //总时间
			  var currentTime = Media.currentTime;
			  /*var endTime = Media.*/
		  	var j_preocess_width;
		  	j_preocess_width = (currentTime/vedioTime) * j_process_all.width();
		  	j_process.width(j_preocess_width);
		  	j_process_dot.css("left", j_preocess_width);

		  	$('#currentTime').text(formate_time(currentTime));
		  	$('#allTime').text("/" + formate_time(vedioTime));
		  	/*console.log(Media.duration);*/

		  	if(j_preocess_width == j_process_all.width()){  
			    window.clearInterval(bartimer);  
			  }  
		  }

		  var bartimer = window.setInterval(function(){setProcess();},100); 
		  window.onload = function(){  
			   
			}  

			$(".backtop p.btn-backtop").click(function(){
				$('body, html').animate({scrollTop:0}, 500);
				return false;
			});
			//
			var v = function(e) {
		          $(".vedio-process-status").css({
		              width: e + 10
		          }),
		          $(".vedio-process-dot").css({
		              left: e
		          })
		      }
		  //计算时间
		  function formate_time(ti) {
		  	var t = "", 
		  	    a = parseInt(ti), 
		  	    _s = a % 60, 
		  	    _m = parseInt(a / 60)   //minute, 
		  	    _h = 0;
	        return _m > 60 && (_h = parseInt(_m / 60),  //小时存在 _h = 小时数
	        _m = parseInt(n % 60)),  //计算分钟数
	        10 > _m && (_m = "0" + _m),  
	        10 > _s && (_s = "0" + _s),
	        t = _h ? _h + ":" + _m + ":" + _s : _m + ":" + _s
		  }

		  function moveStart(e) {
		  }
		  function moveIng(e) {
		  	var process = $('div.vedio-process');
		  	l;
	        var X = e.touches[0].pageX, 
	        	treasure = $(".vedio-process-dot");
	        -5 > X ? X = -5 : X > process.width() - treasure.width() + 12 && (X = process.width() - treasure.width() + 12),
	        l = X;
	        var duration = parseInt(Media.duration), 
	            time = duration * X / parseInt($('div.vedio-process').width());
	        $("#currentTime").text(formate_time(time));
	        v(X);
		  }
		  function moveEnd(e) {
		  	var duration = parseInt(Media.duration), 
		  		currentTime = duration * l / parseInt($('div.vedio-process').width());
		  	Media.currentTime  = currentTime;
		  }
	  	document.querySelector(".vedio-process-dot").addEventListener("touchstart", moveStart),
        document.querySelector(".vedio-process-dot").addEventListener("touchmove", moveIng),
        document.querySelector(".vedio-process-dot").addEventListener("touchend", moveEnd);
		  
})();























