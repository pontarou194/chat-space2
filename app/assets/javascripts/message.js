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
    console.log(message)
      var html = buildPost(message);
      $('.messages').append(html)
      $('.form__message').val('')
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      // $(messages).scrollTop($(messages).height());
    })
    .fail(function(){
      alert('エラー');
    })
  })
});

//参考用
// $('#form').get(0).reset();
    // $('messages').animate({'scrollbottom' : 'margin:0px'});
    // $('messages').animate({scrollTop: $(messages).height()},1500);