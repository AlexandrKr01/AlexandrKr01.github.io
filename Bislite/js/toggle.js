$(".latest-works-content").on("click", ".work-demo", function(){
    $(".latest-works-content .work-demo").removeClass("active"); 
    $(this).addClass("active");
});
$(".navigation-list").on("click", ".navigation-item", function(){
    $(".navigation-list .navigation-item").removeClass("active"); 
    $(this).addClass("active");
});
