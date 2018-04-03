$(".navigation-list").on("click", ".navigation-link", function(){
    $(".navigation-list .navigation-link").removeClass("active"); 
    $(this).addClass("active");
});
$(".login-form").on("click", ".input-container", function(){
    $(".login-form .input-container").removeClass("active"); 
    $(this).addClass("active"); 
});
$(".feedback-form").on("click", ".input-container", function(){
    $(".feedback-form .input-container").removeClass("active"); 
    $(this).addClass("active"); 
});
$(".price-cards").on("click", ".price-card", function(){
    $(".price-cards .price-card").removeClass("active"); 
    $(this).addClass("active"); 
});