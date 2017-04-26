document.write('\
\
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
<link href="style.css" rel="stylesheet" type="text/css" />\
<title>Origami Central</title>\
<div class="Header">\
	<div class="Menu">\
        <button onclick="MenuOpener()" style="background-color:transparent; border:0; outline:0"><img class="MenuButton" src="/assets/list.png" /></button>\
  		<div class="Menu-content" id="myDropDown">\
    		<a href="index.php">Home</a>\
    		<a href="user.html">My Page</a>\
    		<a href="#">Other</a>\
            <a href="#">Useful</a>\
    		<a href="#">Link</a>\
    		<a href="#">Settings</a>\
  		</div>\
	</div>\
	<div class="Logo"> <a href="/"><img src="/assets/Logo.jpg" width="207" height="35" /></a></div>\
    <div class="Search">\
    <form class="SearchForm">\
    <input type="text" name="Search" style="width: 400px">\
 </form>\
 	<button class="SB"><img src="/assets/lupa.png" /></button>\
    </div>\
    <div class="User">\
    	<div class="Login"><a href="login.php">Login</a></div>\
        <div class="SignUp">Sign Up</div>\
    </div>\
</div>\
\
');
function MenuOpener() {
            var state = document.getElementById("myDropDown").style.display;
            if (state == "block")
                document.getElementById("myDropDown").style.display="none";
            else
                document.getElementById("myDropDown").style.display="block";
}