$(document).ready(function(){

	/* 아이디 또는 비밀번호 미입력시 */
	$(".btnLogin").click(function(){
		var strId = $(".inputBox input:first").val();
		var strPwd = $(".inputBox input:last").val();
		if(strId==0 || strPwd==0){
			alert("아이디 또는 비밀번호를 입력해주세요");
		}
	});
});