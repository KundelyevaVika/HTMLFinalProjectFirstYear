    var $hamburger = $(".hamburger");

    $hamburger.on("click", function (e) {
    	$hamburger.toggleClass("is-active");
    	var $humburgerMenu = $(".hamburger-menu");
    	// var $humburgerMenuContainer = $(".humburger-menu__container");


    	if ($humburgerMenu.css("display")=="none"){
$humburgerMenu.css("display","block")
} else{
$humburgerMenu.css("display","none")
}

    });
