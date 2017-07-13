 $(function() {
    if (localStorage.loginSatus === "true") {
        $(".login-index").css({"display":"none"});
	    $(".home-index").css({"display":"block"});
    } else {
	    $(".login-index").css({"display":"block"});
	    $(".home-index").css({"display":"none"});
    }

 });
 function onLogOut() {
 	localStorage.loginSatus = false;
	$(".login-index").css({"display":"block"});
	$(".home-index").css({"display":"none"});
 }
function onLogin() {
    // 登录遮罩
    $('.rotateCircle').css("display", "block");
    setTimeout(function(){
        localStorage.loginSatus = true;
        $(".login-index").css({"display":"none"});
	    $(".home-index").css({"display":"block"});
        $('.rotateCircle').css("display", "none");
    },3000);
}