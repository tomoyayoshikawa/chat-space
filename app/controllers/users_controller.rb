class UsersController < ApplicationController

  def index
    @user = User.where("name LIKE ?", "%#{params[:name]}%")
    respond_to do |format|
        format.json
    end
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

