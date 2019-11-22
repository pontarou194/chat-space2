$(function(){
  function buildPost(message){

    // var imagefile = message.image.url? `<img src="${message.image.url}", class = 'lower-message__image'>` : "";
    var image = message.image? `<img src="${message.image}", class = 'lower-message__image'>` : "";

    var html = `<div class="message-content">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                        </div>
                <div class="upper-message__date">
                  ${message.date}
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
    
    return html
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
    });

    fail(function(){
      alert('エラー');
    })
  })
});