class MessagesController < ApplicationController

  before_action :index

  def index
    @group = Group.find(params[:group_id])
    @messages = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to group_messages_path, notice: "メッセージを送信しました"
    else
      flash[:alert] = "メッセージを入力してください"
      render :index
    end
  end

  def message_params
    params.require(:message).permit(:body, :image).merge(user_id: current_user.id, group_id: params[:group_id])
  end

end
