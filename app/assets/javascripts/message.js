$(function() {
  function buidHTML(data) {
    var name = '<li class= "messages__chat__user__name">' + data.name + '</li>'

    var time = '<li class= "messages__chat__user__time">' + data.time + '</li>'

    if(data.body){
      var text = '<p class="messages__chat__message__text">' + data.body + '</p>'
    };
    if(data.image) {
    var imageTag = '<img src ="' + data.image +'">'
    var image = '<p class ="message_chat__message__image">' + imageTag + '</p>'
  };
    $('.messages__chat').append(name, time, text, image)
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
      console.log(data);
      buidHTML(data);
    })
   });
 });
