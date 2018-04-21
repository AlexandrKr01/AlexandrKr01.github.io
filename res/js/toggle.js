$(".your-rating-container .rating").on("click", function() {
	// Логику строчки наже я в принципе понял, но что-то подсказывает, что можно как-то
	// проще переключать класс элемента именно в одном блоке
	$(this).parent().children().removeClass("active");
	$(this).addClass("active");
});
$(".category").on("click", function(event){
	event.preventDefault();
	$(this).toggleClass("active");
});
$(".nav-panel-link").on("click", function(event){
	event.preventDefault();
	$(".nav-panel-link").removeClass("active");
	$(this).toggleClass("active");
});

$(".card-top-content").on("click", function(){
	$(".card-top-content").removeClass("active");
	$(this).toggleClass("active");
});
$(".main-toggle").on("click", function(){
	$(".main-toggle").removeClass("active");
	$(this).toggleClass("active");
});
$(".start").on("click", function() {
	event.preventDefault();
	$(".pop-up-wrapper").removeClass("hide");
	$(".pop-up-wrapper").addClass("visible");
});
$(".close").on("click", function() {
	$(".pop-up-wrapper").addClass("hide");
	$(".pop-up-wrapper").removeClass("visible");
});
$(".user").on("click", function() {
	event.preventDefault();
	alert ("You exit the account");
	if(confirm) {
	$(".user").addClass("hide");
	$(".user").removeClass("visible");
	$(".start").addClass("visible");
	$(".start").removeClass("hide");
	}
});
$(".pop-up-block").on("submit", function() {
	event.preventDefault();
	$(".pop-up-wrapper").addClass("hide");
	$(".pop-up-wrapper").removeClass("visible");
	$(".start").addClass("hide");
	$(".start").removeClass("visible");
	$(".user").removeClass("hide");
	$(".user").addClass("visible");

});
