
function updateFloat() {
    var y = window.scrollY,
        yOffset = y + $(window).height(),
        body = document.body,
        html = document.documentElement;
    const maxHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html
        .scrollHeight, html.offsetHeight) - document.getElementById("dynamic-footer").offsetHeight;
    const topLimit = document.getElementById("title-banner").offsetHeight;
    if (y > topLimit) {
        $(".floating-button").fadeIn();
        if (yOffset > maxHeight) {
            $(".floating-button").css("bottom", yOffset - maxHeight + 30);
        } else {
            $(".floating-button").css("bottom", "50px");
        }
    } else {
        $('.floating-button').fadeOut();
    }
    console.log("I HAVE BEEN USED");
}