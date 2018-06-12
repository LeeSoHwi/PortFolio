$(document).ready(function(){

	/* 필수값 입력 미완성일 때 */
	$("#btnSubmit").click(function(){
		if($("#name").val()==0){
			alert("이름을 입력하지 않으셨습니다.");
			$("#name").focus();
		}else if($("#userId").val()==0){
			alert("아이디를 입력하지 않으셨습니다.");
			$("#userId").focus();
		}else if($("#userPwd").val()==0){
			alert("비밀번호를 입력하지 않으셨습니다.");
			$("#userPwd").focus();
		}else if($("#pwdConfirm").val()==0){
			alert("비밀번호를 확인해주세요.");
            $("#pwdConfirm").select();
			$("#pwdConfirm").focus();
		}else if($("#userPwd").val()!=$("#pwdConfirm").val()){
			alert("비밀번호가 일치하지 않습니다.");
			$("#pwdConfirm").focus();
		}else{
			alert($("#userId").val()+"님 회원가입을 축하합니다!");
		}
		return false;
	});
	
	$("btnReset").click(function(){
		$("td input").val("");
	});

	/* 아이디 중복확인 팝업*/
	$(".btnId").click(function(){
		//alert("clicked");
		window.open("idconfirm.html","pop1","width=500, height=300, left=0, top=0, scrollbars=no, toolbars=no, location=no");
		return false;
	});

	/* 메일선택 */
	$(".mailSelect").change(function(){	
		var strTxt=$(this).val();
		console.log(strTxt);
		$(this).prev().val(strTxt);
	});


});