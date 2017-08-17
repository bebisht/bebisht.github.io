$( document ).ready(function() {
$('#hit').click(function(){

      $('.logo').toggleClass('hideMe');
      $('.fa-bars').toggleClass('fa-window-close');
    })


  $(".links").click(function(){
    if($(window).width() < 768 ) {
      $('#hit').click();
    }
    $(".links").removeClass("active")
    var hash = $(this).attr("href");
    $("a[href='"+hash+"']").addClass("active")
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 2000);
    return false;
  })
})
  