class SuperfansController < ApplicationController
  before_action :set_superfan, only: [:show, :update, :destroy]

  # GET /superfans
  def index
    @superfans = Superfan.all

    render json: @superfans
  end

  # GET /superfans/1
  def show
    render json: @superfan
  end

  # POST /superfans
  def create
    @superfan = Superfan.new(superfan_params)

    if @superfan.save
      render json: @superfan, status: :created, location: @superfan
    else
      render json: @superfan.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /superfans/1
  def update
    if @superfan.update(superfan_params)
      render json: @superfan
    else
      render json: @superfan.errors, status: :unprocessable_entity
    end
  end

  # DELETE /superfans/1
  def destroy
    @superfan.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_superfan
      @superfan = Superfan.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def superfan_params
      params.require(:superfan).permit(:firstname, :lastname, :email)
    end
end
