class MessagesController < ApplicationController

  before_action :find_group

  def index
  end

  def create
    @group.messages.new(message_params)
    if @group.save
      redirect_to :group_messages
    else
      flash.now[:alert] = "メッセージを入力してください"
      render :index
    end
  end

  def message_params
    params.require(:message).permit(:body, :image).merge(user_id: current_user.id, group_id: params[:group_id])
  end

  def find_group
    @group = Group.find params[:group_id]
    @messages = Message.new
  end
end
