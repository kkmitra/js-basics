$(".header").click(_ => $(".header").css('background-color', '#ffa500'))
$(".side-bar").click(_ => $(".side-bar").text("Leftbar"))
$(".extra-content").click(_ => {
    $(".main-content").fadeOut()
    $(".extra-content").css("height", "100%")
})