class UsersController < ApplicationController
  before_action :set_current_user, only: [:create]

  def set_current_user
    @current_user = User.find_by(id: session[:user.id])
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end