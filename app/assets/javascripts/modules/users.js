$(function(){
  $("#UserSearch__field").on("keyup",function(){
    let input = $("#UserSearch__field").val();
    $.ajax({
      type:"GET",
      url:"/users",
      data: {keyword:input},
      datatype:"json"
    })
    .done(function(users){
      console.log("success");
    })
    .fail(function() {
      console.log("失敗です");
  });
});