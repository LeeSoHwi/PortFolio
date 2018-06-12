$(document).ready(function(){

    $("div#navigator").click(function(){
        //location.href="../indix.html";
        
    });
	
/* 메인배너 활성화 */
	var timer = setInterval("fadeInOut()",3000);

	$("#banner").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval("fadeInOut()",3000);
	});
	
/* 메인배너 클릭으로 움직이기 */
	
	$(".btnPrev").click(function(){
		clearInterval(timer);
		fadeReverse();
	});
	$(".btnNext").click(function(){
		clearInterval(timer);
        fadeInOut();
	});

	/* 화면 크기에 맞게 img 리사이징 */
	$(window).resize(function(){
        var strWidth=$(this).width();
		var strHeight=$("img.active").height();
		//console.log(strHeight);
        if(strWidth>579){
            $("#mainVisual").height(strHeight);
            $("#banner").css({"display":"block"});
        }else if(strWidth<=579){
            $("#mainVisual").height(160);
            $("#banner").css({"display":"none"});
        }
      
	});

});
/* 메인배너를 위한 함수 */
function fadeInOut(){
	var showImg = $("#mainVisual div img:eq(0)");
	var nextImg = $("#mainVisual div img:eq(1)");

	nextImg.addClass("active");
	nextImg.css("opacity","0").animate({"opacity":"1"},1000,function(){
		showImg.removeClass("active");
		$("#banner").append(showImg);
	});
};


/* 메인 배너 Reverse를 위한 함수 */
function fadeReverse(){
	var onImg = $("#mainVisual img:eq(4)");
	
	onImg.addClass("active");
	onImg.css("opacity","0").animate({"opacity":"1"},1000,function(){
		$("#mainVisual img:eq(0)").removeClass("active");
		$("#banner").prepend(onImg);
	});
};
