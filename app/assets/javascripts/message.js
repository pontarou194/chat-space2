$(function() {

  function buildPost(message){
    var image = message.image? `<img src="${message.image}", class = 'lower-message__image'>` : "";
    var html = `<div class="message-content" data-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                        </div>
                <div class="upper-message__date">
                  ${message.created_at}
                    </div>
                      </div>
                <div class="lower-message">
                  <p class="lower-message__content">
                    ${message.content}</p>
                      </div>
                <div class="lower-message">
                  ${image}
                    </div>
                      </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url:url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildPost(message);
      $('.messages').append(html);
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('#new_message')[0].reset();
    })
    .fail(function() {
      alert('error');
      $('.form__submit').prop('disabled', false);
    });
  });


  var reloadMessages = function() {
  if(window.location.href.match(/\/groups\/\d+\/messages/)){

    last_message_id = $(".message-content:last").data("id")
    console.log(last_message_id)
    $.ajax({
      url: 'api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message){
        insertHTML = buildPost(message);
        $('.messages').append(insertHTML);
      })
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  };
}
  setInterval(reloadMessages, 7000);
});