$(function(){
   function buildHTML(user) {
    var html = '<div class="chat-group-user clearfix">' +
                '<p class="chat-group-user__name">' + user.name + '</p>' +
                '<a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=" '+ user.id +'"data-user-name="'+ user.name +'">追加</a>'+'</div>';
     return html;
    };
    function findUserHTML(user_id, user_name){
    var input_html = '<div class="chat-group-user clearfix js-chat-member" id="chat-group-user-8">' +
                      '<input name="group[user_ids][]" type="hidden" value="'+ user_id +'">' +
                      '<p class="chat-group-user__name">' + user_name + '</p>'+
                      '<a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn">削除</a>' + '</div>';
      return input_html;
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
        var $form = $('.user-search-result')
        $form.find('li').remove();
        $(data).each(function(i, user){
          $form.append('<li>' + buildHTML(user) + '</li>')
        });
      })
      .fail(function() {
        alert('エラーが発生しました');
      });
     });

    $(document).on("click", ".chat-group-user__btn--add",   function(){
      $(this).parent().remove();
      var user_id = $(this).attr("data-user-id");
      var user_name = $(this).attr("data-user-name");
      var input_html = findUserHTML(user_id, user_name);
      $("#user-search-result").append(input_html);
      });

    $(document).on("click", ".chat-group-user__btn--remove", function(){
      $(this).parent().remove();
    });
});


