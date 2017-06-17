$(function(){
   function buildHTML(user) {
    console.log(user)
    var html = '<div class="chat-group-user clearfix">' +
                '<p class="chat-group-user__name">' + user.name + '</p>' +
                '<a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=" '+ user.id +'"data-user-name="'+ user.name +'">追加</a>'+'</div>';
     return html;
  };

    $(document).on('keyup', '#user_search', function(e){
      e.preventDefault();
      var input = $.trim($(this).val());
      $.ajax({
        url: "/users",
        type: "GET",
        data: ('keyword=' + input),
        processData: false,
        contentType: false,
        dataType: 'json',
      })
      .done(function(data){
        $('.user-search-result').find('li').remove(); 

        $(data).each(function(i, user){
          $('.user-search-result').append('<li>' + buildHTML(user) + '</li>')
        });
      })
      .fail(function() {
        alert('メッセージを送信できません');
      });
    });
  });

