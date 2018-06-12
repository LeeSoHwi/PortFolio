$(function(){

	/* 책배달,책가방 클릭시 화면전환 */
	$(".deliveryBox").click(function(){
		$(".delivery").show();
		$(".bag").hide();
	});
	$(".bagBox").click(function(){
		$(".bag").show();
		$(".delivery").hide();
	});
	$("").click(function(){
		window.print();
		return false;
	});
	
});