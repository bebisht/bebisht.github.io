$("#checks").click(function(){
          $(".navbar").toggleClass("margin0");
          $(".navbar").toggleClass("marginMax");
          $(".one").toggleClass("oneNew");
          $(".three").toggleClass("threeNew");
          $(".two").toggleClass("twoNew");
       });
      
      $('[id="anchor"]').hover(function(){
          $(this).parent().find(".myimg").toggleClass("imgHover1");
          $(this).parent().find(".myimg").toggleClass("imgHover2");
      });
  $(window).scroll(function() {
        var top = $(window).scrollTop();
        var mydiv = $(window).height()==700;
        var mid = ($(window).height()/2);
        if( top >=1400){
          $(".secondRow").addClass("secondRowZero");
        }
        else {
          $(".secondRow").removeClass("secondRowZero"); 
        }
        if( top >= 200) {
          $(".details").addClass("detailsView"); 
          $(".slideInTab").addClass("slideInTabAdd"); 
        }
        else {
          $(".details").removeClass("detailsView"); 
           $(".slideInTab").addClass("slideInTabAdd"); 
        }
        if( top >= 400) {
          $(".detailsView").addClass("detailsView1"); 
          $(".slideInTabAdd").addClass("slideInTabAdd1"); 
        }
        else {
          $(".detailsView").removeClass("detailsView1"); 
           $(".slideInTabAdd").addClass("slideInTabAdd1"); 
        }
      });
 $(window).scroll(function(){

    var wScroll = $(window).scrollTop();

    var arr = [];

    $('.slideHide').each(function(){
     arr.push($(this).offset().top);
    })    

    $.each(arr, function(index , value){

      if(wScroll > (value - 570)) {

       $('.slideHide').eq(index).addClass('slideShow'); 

      } else {

        $('.slideHide').eq(index).removeClass('slideShow');  

      }

    })


 });
    
     $(".links").click(function(){
    if($(window).width() < 768 ) {
      $('#hit').click();
    }
    $(".links").removeClass("active")
    var hash = $(this).attr("href");
    $("a[href='"+hash+"']").addClass("active")
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 50
    }, 2000);
    return false;
  })
