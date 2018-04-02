$(".navigation-list").on("click", ".navigation-link", function(){
    $(".navigation-list .navigation-link").removeClass("active"); 
    $(this).addClass("active");
});

