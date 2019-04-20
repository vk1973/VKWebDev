<?php

require_once('common.php');
require_once('users.php');

$LoginUser = $_POST["user_name"];
$LoginPass = $_POST["user_pass"];
SetPageTitle("Login");

function DisplayLoggedIn(){
	if(isset($_POST['redir'])){
		$RedirectURL = $_POST['redir'];
		if($RedirectURL){
			header("Location: $RedirectURL");
			exit;
		}
	}
	AddCommonLinks();
	common_header();
	echo "<table border=\"0\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" height=\"100%\"><tr><td><div align=\"center\">You are now logged in!</div></td></tr></table>";
	common_footer();
}

if($LoginUser == "" || $LoginPass == ""){
	$CookieExpire = time() + (60*60*24*7*52); // one year from now, roughly
	if($LoginUser){
		setcookie("last_user", $LoginUser, $CookieExpire, "/");
		$_COOKIE["last_user"] = $LoginUser;
	}
	User_RequireLogin(); //This will force a login window if the user is not logged in already and code execution stops here
	//So if User_RequireLogin() doesn't stop execution and display the login form then the user must be logged in
	DisplayLoggedIn();
} else {
	$LoginAttempt = User_Login($LoginUser, $LoginPass);
	if(!$LoginAttempt){
		if($LoginUser != "") $_COOKIE["last_user"] = $LoginUser;
		AddLink('Login', 'login.php');
		common_header();
		echo CenterTableText('<p>To continue, please login with your username or network Id:<div align="center">' . User_GetLoginForm() .'</div>');
		common_footer();
		exit;
	} else {
		$UserAuth = User_GetAuth($LoginAttempt);
		if($UserAuth >= AUTH_ADMIN){
			global $APP_FOOTER_TEXT;
			AddLink('Admin Controls', 'admin.php');
			$SourceURL = 'source.php?url='.$_SERVER['SCRIPT_NAME'];
			$APP_FOOTER_TEXT = "Show script <a href=\"$SourceURL\" target=\"_blank\">source</a>.";
		}
		DisplayLoggedIn();
	}
}

?>