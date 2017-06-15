$(function() {
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
     });
    });
  });
