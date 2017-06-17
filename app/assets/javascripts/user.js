$(function(){
    $(".chat-group-form__input").on("keyup", function() {
     var input = $("#group_menbers").val();
     var input = $("#user_search").val();
         $.ajax({
            url: "/users",
            type: "GET",
            data: input,
            processData: false,
            contentType: false,
            dataType: 'json',
      })
         .done(function(data){
          console.log(input)
         })
    });
  });
