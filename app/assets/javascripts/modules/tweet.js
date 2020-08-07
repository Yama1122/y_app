$(function(){
  $(".main__tweet").on("click",function(){
    $(".main__container").hide();
    $(".TweetForm").fadeIn(700);
    $(".TweetForm").css("display","flex");
    $(".main__tweet").css("display","none");
  });

  $(".TweetForm__container__header--icon").on("click",function(){
    $(".TweetForm").css("display","none");
    $(".main__container").fadeIn(700);
    $(".main__tweet").fadeIn(700);
  });

});