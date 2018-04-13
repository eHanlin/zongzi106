$(function(){
	// menu
	$(".iconbar").click(function(){

		$(".mobilemenu").slideToggle(100);
		
		$(window).resize(function(){
	        var innerW = window.innerWidth;

	        if(innerW > 1024){
	            $(".mobilemenu").hide();
	        }

	    });
	})
	
	$(".mobilemenu li").click(function(){

	$(".mobilemenu").stop(true, true).fadeOut(0);	

	})	

	// 點題目出現選項目
	$(".qsbg").click(function(){
		$(this).find('div').eq(0).slideDown(500);	
		$(this).find('img').eq(0).fadeOut(100);	
	})

	// 點送出出現龍舟
	$("#chksend").click(function(){
		$("#boat").stop(true,false).fadeIn(0);
		$("#boat").stop(true,false).animate({left:"-=2400"}, 600, "easeOutElastic");
		$("#qs").stop(true,false).fadeOut(0);
	});

});