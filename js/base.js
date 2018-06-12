$(document).ready(function(){
	//관련기관 사이트 링크걸기
	$("form[name=link] a").click(function(){
		var url=$("form[name=link] select").val();
		console.log(url);
		window.open(url);
	});
    
  

});