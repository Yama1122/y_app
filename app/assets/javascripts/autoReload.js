$(function(){
  function buildHTML(message){
    if(message.image){
      let html =
        `<div class="mainchat__messagelist__message" data-message-id=${message.id}>
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
        `<div class="mainchat__messagelist__message" data-message-id=${message.id}>
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

  let reloadMessages = function(){
    let last_message_id=$(".mainchat__messagelist__message:last").data("message-id") || 0;
    $.ajax({
      url:"api/messages",
      type:"get",
      dataType:"json",
      data:{id:last_message_id}
    })
    .done(function(messages){
      if(messages.length !==0){
        let insertHTML = "";
        $.each(messages,function(i,message){
          insertHTML += buildHTML(message)
        });
        $(".mainchat__messagelist").append(insertHTML);
        $(".mainchat__messagelist").animate({scrollTop: $(".mainchat__messagelist")[0].scrollHeight});
      }
    })
    .fail(function(){
      alert("error");
    });
  };
  setInterval(reloadMessages,7000);
});