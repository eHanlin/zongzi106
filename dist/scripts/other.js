var startDate = new Date();
var endDate   = new Date('2018/05/18');
var spantime  = (endDate - startDate)/1000;
var myurl;
var pimg;

$(document).ready(function () {
    
    $(this).everyTime('1s', function(i) {
        spantime --;
        var d = Math.floor(spantime / (24 * 3600));
        var h = Math.floor((spantime % (24 * 3600)) / 3600);

        if (spantime > 0) {
            $('#day').text(d);
            $('#hour').text(h);
        }
        
    });
    
    
    //隱藏送出按鈕
    $("#sbt").hide();
    
    $(".ans").click(function(){
        
        var q1 = $("input[name=ans1]:checked").length;
        var q2 = $("input[name=ans2]:checked").length;
        
        if((q1=='1')&&(q2=='1')){
           $("#sbt").slideDown();
        }
        
    });
    
    $("#re").click(function(){
        
        $("input[name='ans1'], input[name='ans2']").prop("checked", false);
        $("#sbt").slideUp();
        
    });
    
    // 回填資料視窗
	$(".chooseme li").click(function(){
        
        var ans1 = $("input[name='ans1']:checked").val();
        var ans2 = $("input[name='ans2']:checked").val();
        var test; //籤詩圖
        var test2; //贈品圖
        var title = new Array('決戰會考國文科名師派卷','決戰會考國文科名師派卷','決戰會考英文科名師派卷','決戰會考數學科名師派卷','決戰會考自然科名師派卷','決戰會考社會科名師派卷','最新會考解題影片','國文科e評量開通碼','英文科e評量開通碼','數學科e評量開通碼','自然科e評量開通碼','社會科e評量開通碼','高一先修e名師開通碼'); //贈品名稱
            
        //籤詩內容
        if(ans1==1){
            test  = new Array(1,2,3);
        }else if(ans1==2){
            test = new Array(4,5,6);
        }else if(ans1==3){
            test = new Array(7,8,9);
        }else if(ans1==4){
            test = new Array(10,11,12);
        }
            
        var myimg = test.sort( function(){ return Math.round( Math.random() ) - 0.5 ; } );
        var s3 = "//s3-ap-northeast-1.amazonaws.com/ehanlin-web-resource/zongzi106/latest/";
        $("#poetry").attr("src", s3 + "images/answer/"+myimg[0]+".jpg");
            
        myurl = 'https://www.facebook.com/sharer/sharer.php?u=http://wowsite.tw/demo/ehanlin/'+myimg[0]+'.html&amp;src=sdkpreparse';
            

        //贈品資料
        if(ans2==1){
            test2  = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,12,12);
        }else if(ans2==2){
            test2 = new Array(1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,12,12);
        }else if(ans2==3){
            test2 = new Array(1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,12,12);
        }else if(ans2==4){
            test2 = new Array(1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,12,12,12);
        }else if(ans2==5){
            test2 = new Array(1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,12,12,12);
        }else if(ans2==6){
            test2 = new Array(1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12);
        }
            
        var poetry = test2.sort( function(){ return Math.round( Math.random() ) - 0.5 ; } );
        pimg   = poetry[0];
        var title2 = title[pimg];
            
        switch(pimg){
            case 6:
                $("#showimg").attr("src", "images/gift/6.png");
                break;
            case 7:
                $("#showimg").attr("src", "images/gift/7.png");
                break;
            case 8:
                $("#showimg").attr("src", "images/gift/8.png");
                break;
            case 9:
                $("#showimg").attr("src", "images/gift/9.png");
                break;
            case 10:
                $("#showimg").attr("src", "images/gift/10.png");
                break;
            case 11:
                $("#showimg").attr("src", "images/gift/11.png");
                break;
            case 12:
                $("#showimg").attr("src", "images/gift/12.png");
                break;
        }
            
        $("#pstr").html(title2);
        
        
		$(".answerchk").stop(true,false).fadeIn(0);		
		$("#boat").stop(true,false).fadeOut(0);
        
	});
    

    //台灣地區手機驗證(XXXXXXXXXX)
    jQuery.validator.addMethod("ROC_Celphone",
        function(cellphone, element) {
            cellphone = cellphone.replace(/\s+/g, "");
            return(
                this.optional(element) || /[0]{1}[9]{1}[0-9]{8}/.test(cellphone));
    }, "格式錯誤!!");
    
    
    $("#form1").validate({ 
        rules: {
            myname: {
                required: true
            },
            myphone: {
                required: true,
                ROC_Celphone: true
            }
        },
        submitHandler:function(form){
            
            window.open(myurl,"popup","width=340,height=163,toolbar=no,status=no,resize=no");
        
            //傳送簡訊
            var url     = "https://wa74g5em51.execute-api.ap-northeast-1.amazonaws.com/prod/ms-zongzi";
            var myname  = $("#myname").val();
            var myphone = $("#myphone").val();
            var body    = {name: myname, gift: pimg, mobile: myphone}
            $.post(url, JSON.stringify(body), function(resp) {console.log(resp)});
            
            
            //關閉視窗
            $(".popupwrapper").stop(true,false).fadeOut(0);	
            $("#boat").stop(true,false).fadeOut(0);
            //$(".answerchk").stop(true,false).slideDown(500);

        }

    });
    

	// 潭出回傳視窗
	$("#callpop").click(function(){
		$(".popupwrapper").stop(true,false).fadeIn(0);				
	});
    

	$("#popupchanel").click(function(){			
		$(".popupwrapper").stop(true,false).fadeOut(0);			
	});
        
});
