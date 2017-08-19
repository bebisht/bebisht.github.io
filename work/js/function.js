$(document).ready(function() {

	$("#togg").click(function(){
		$(".mobileViewList").toggle("slow");
		$(".one").toggleClass("oneNew");
    $(".three").toggleClass("threeNew");
    $(".two").toggleClass("twoNew");
	})

	$('.priceTag').mouseenter(function(){

		$(this).animate({ marginLeft:"-20px"},"slow").toggleClass("translateDiv");

	})
	$('.priceTag').mouseleave(function(){

		$(this).animate({ marginLeft:"0px"},"fast").toggleClass("translateDiv");

	})

	$('.social').mouseenter(function(){
		$(this).find('.imgWrapper li').addClass("zoomIn");
	})
	$('.social').mouseleave(function(){
		$(this).find('.round').removeClass("opacity1");
	})

	$('#box').click(function(){

		$('.mobileViewList').hide("slow");
		$('.logo').hide("slow");
		$('.box').hide("slow");
		$('.sBox').show("slow");
		$('.exit').show("slow");

	})
	$('#exit').click(function(){

		$('.mobileViewList').show("slow");
		$('.logo').show("slow");
		$('.box').show("slow");
		$('.sBox').hide("slow");
		$('.exit').hide("slow");

	})
})
