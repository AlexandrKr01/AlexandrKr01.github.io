$(".header-top").on("click", ".menu-btn", function(){
    $(".main-nav").removeClass("hidden"); 
    // $(this).addClass("active");
});
$(".main-nav").on("click", ".close-menu-btn", function(){
    $(".main-nav").addClass("hidden"); 
});
// $(".feedback-form").on("click", ".input-container", function(){
//     $(".feedback-form .input-container").removeClass("active"); 
//     $(this).addClass("active"); 
// });
// $(".price-cards").on("click", ".price-card", function(){
//     $(".price-cards .price-card").removeClass("active"); 
//     $(this).addClass("active"); 
// });