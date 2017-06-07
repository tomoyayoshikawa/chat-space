class GroupsController < ApplicationController

  def new
    @group = Group.new
  end

  def create
    if @group = Group.create(create_params)
      redirect_to :root
    else
      render "new"
  end

  end

  def edit

  end

  def update

  end

  private
    def create_params
      params.require(:group).permit(:name, {:user_ids =>[]})
    end
end
