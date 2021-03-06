class CategoriesController < ApplicationController
    before_action :set_category, only: [:show, :update, :destroy]

    # GET /categories
    def index
      @categories = Category.all

      render json: @categories
    end

    def search
      if params[:name]
        @categories = Category.where(name: params[:name])
      end
      if !@categories.empty?
        # @parts = @categories[0].parts
      @parts =  Part.where(category_id: @categories[0].id).distinct.pluck(:part_type)
      end
      # if @parts.empty?
      #   @parts = Part.all
      #   render json: @parts
      # else
        render json: @parts
      # end
    end

    def build_gear
      @parts = Part.where(part_type: params[:part_type])
      render json: @parts

    end

    # GET /categories/1
    def show
      render json: @categories
    end

    # POST /categories
    def create
      @category = Category.new(category_params)

      if @category.save
        render json: @category, status: :created, location: @category
      else
        render json: @category.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /categories/1
    def update
      if @category.update(category_params)
        render json: @category
      else
        render json: @category.errors, status: :unprocessable_entity
      end
    end

    # DELETE /categories/1
    def destroy
      @category.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_category
        @category = Category.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def category_params
        params.fetch(:category, {})
      end
end
