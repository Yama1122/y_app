$(function(){
  $(".sidebar__user__icon--bars").on("click", function(){
    $(".sidebar__config").slideToggle();
    $(".sidebar__config").css("display","flex");
  });

  $(".mainchat__info__left__membercount").on("click", function(){
    $(".mainchat__members").slideToggle().css({
      display:"flex"
    });


    $(".form").css({
      border:"none",
      padding:"410px 0 0 0"
    });

    $(".mainchat__info").css({
      border:"solid 1px black"
    });

    $(".mainchat__messagelist").css({
      height:"calc(100vw - 105px)"
    });

    
  });
});