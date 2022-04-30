$(function(){
    $('.anker,#pTop').click(function(){
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var linkPosition = target.offset().top;
      if(target == "#top"){
        linkPosition = 0;
      }else{
        linkPosition = linkPosition - 50;
      }
      $("html,body").animate({scrollTop:linkPosition},700,"swing");
      return false;
    });
    var pTopBtn = $('.page-top');
    var floatMenu = $('.floating-menu');
    var pTopStopPosition = $('#wrap').height() - $('footer').offset().top;
    $(window).on('load resize scroll', function(){
      var scrollPosition = $(window).scrollTop();
      var footerHeight = $('footer').height();
      var underPosition = $('#wrap').height() - (scrollPosition + $(window).height());
      if(scrollPosition > $('header').height()){
        pTopBtn.fadeIn();
      }else{
        pTopBtn.fadeOut();
      }
      if(footerHeight > underPosition){
        pTopBtn.css({position:'absolute',top:-60});
      }else{
        pTopBtn.css({position:'fixed', top:'', bottom:0});
      }
      if(scrollPosition > $('header').offset().top){
        floatMenu.css({position:'fixed'});
      }else{
        floatMenu.css({position:'relative'});
      }
  
      $(".main-img-slick").css({"top": (scrollPosition/2)})
    });
  });
