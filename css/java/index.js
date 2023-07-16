setTimeout(function() { hideIntro(); }, 2000);

$(".download-div").css("display","none")

function hideIntro(){
    $("#intro-div").slideUp(600)
    $(".download-div").css("display","flex")
}