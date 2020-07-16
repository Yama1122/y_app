$(function(){
  $(".sidebar__user__icon--bars").on("click", function(){
    $(".sidebar__config").slideToggle();
    $(".sidebar__config").css("display","flex");
  })
});