$(function(){
  function buildHTML(message){
    if(message.image){
      let html =
        `<div class="mainchat__messagelist__message">
          <div class="mainchat__messagelist__message__info">
            <div class="mainchat__messagelist__message__info__user">
              ${message.user_name}
            </div>
            <div class="mainchat__messagelist__message__info__time">
              ${message.created_at}
            </div>
          </div>
          <div class="mainchat__messagelist__message__content">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="mainchat__messagelist__message__content__image" src="${message.image}">
          </div>
        </div>`
      return html;
    }else{
      let html =
        `<div class="mainchat__messagelist__message">
          <div class="mainchat__messagelist__message__info">
            <div class="mainchat__messagelist__message__info__user">
              ${message.user_name}
            </div>
            <div class="mainchat__messagelist__message__info__time">
              ${message.created_at}
            </div>
          </div>
          <div class="mainchat__messagelist__message__content">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
        return html;
    };
  }
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
      border:"solid 1px gray"
    });

    $(".mainchat__messagelist").css({
      height:"calc(100vw - 105px)"
    });

    
  });

  $("#form").on("submit",function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr("action");
    $.ajax({
      url:url,
      type:"POST",
      data:formData,
      dataType:"json",
      processData:false,
      contentType:false
    })
    .done(function(data){
      let html =buildHTML(data);
      $(".mainchat__messagelist").append(html);
      $(".form__wrapper--textarea").val("");
      $(".mainchat__messagelist").animate({scrollTop: $(".mainchat__messagelist")[0].scrollHeight});
      $(".form__wrapper__bottom__submit").attr("disabled",false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  });
});