$(function() {
  var $chatview = $('.messages__chat');

  function buildHTML(message) {
    var name = '<li class= "messages__chat__message__name">' + message.name + '</li>';

    var time = '<li class= "messages__chat__message__time">' + message.time + '</li>';

    if(message.body){
      var text = '<li class="messages__chat__message__text">' + message.body + '</li>';
    };
    if(message.image) {
    var imageTag = '<img src ="' + message.image +'">';
    var image = '<li class ="messages_chat__message__image">' + imageTag + '</li>';
    };

    var chat = $('<ul class= "messages__chat__message">').append(name).append(time).append(text).append(image);
     return chat
  }

  $('.message_form').on('submit', function(e) {
    e.preventDefault();
    var form = $("#new_message").get(0);
    var fd = new FormData(form);
    var url = $(".message_form").attr("action");
     $.ajax({
       type: "POST",
       url: url,
       data: fd,
       processData: false,
       contentType: false,
       dataType: "json"
     })
     .done(function(data) {
      var chat = buildHTML(data);
      $chatview.append(chat);
      $('.message_form')[0].reset();

      $chatview.animate({ scrollTop: $chatview[0].scrollHeight }, 'slow');
    })
     .fail(function() {
      alert('メッセージを送信できません');
    });
  });

  $(function(){
    setInterval(function(){
      $.ajax({
        type: 'GET',
        url: location.href.json,
        dataType: 'json'
      })
      .done(function(data) {
        var insertHTML = '';
        var id = $('.messages__chat__message').filter(':last').data('message-id');
        data.messages.forEach(function(message){
          if (message.id > id){
            insertHTML = buildHTML(message);
          }
        });
        $chatview.append(insertHTML);
      });
      .fail(function(data){
        alert('自動更新に失敗しました')
      });
    }, 5000 );
  });
});
