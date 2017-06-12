module ApplicationHelper

  def show_last_message(group)
    if group.messages.empty?
      "まだメッセージはありません。"
    elsif group.messages.last.image.present?
      "画像が投稿されました。"
    else
      group.messages.last.body
    end
  end
end

