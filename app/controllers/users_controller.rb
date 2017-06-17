class UsersController < ApplicationController

  def index
    @users = User.find_user(params[:keyword])
    render json: @users
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    if current_user.update(user_params)
      redirect_to :root
    else
      redirect_to :action => "edit"
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end
end

