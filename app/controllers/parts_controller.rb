class PartsController < ApplicationController
  before_action :set_part, only: [:show, :update, :destroy]

  # GET /parts
  def index
    @parts = Part.all

    render json: @parts
  end

  def compare
    @part = Part.where(id: params[:id])
    if !@part.empty?
      @compatible_list = Part.where("id != ? AND category_id = ? AND size_id = ?", params[:id], @part[0].category_id, @part[0].size_id)
      if !@compatible_list.empty?
        render json: @compatible_list
      else
        render json: nil
      end
    else
      render json: nil
    end

  end

  # GET /parts/1
  def show
    render json: @part
  end

  # POST /parts
  def create
    @part = Part.new(part_params)

    if @part.save
      render json: @part, status: :created, location: @part
    else
      render json: @part.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /parts/1
  def update
    if @part.update(part_params)
      render json: @part
    else
      render json: @part.errors, status: :unprocessable_entity
    end
  end

  # DELETE /parts/1
  def destroy
    @part.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_part
      @part = Part.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def part_params
      params.fetch(:part, {})
    end
end
