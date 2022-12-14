class WaterAccessCommentsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]
    def index
        water_access_comments = WaterAccessComment.all
        render json: water_access_comments, status: :ok
    end
    
    def create
        water_access_comment = WaterAccessComment.create!(water_access_comment_params)
        render json: water_access_comment, status: :created
    end
    
    def show
        water_access_comment = find_water_access_comment
        render json: water_access_comment, status: :ok
    end
    
    def update
        water_access_comment = find_water_access_comment
        water_access_comment.update!(water_access_comment_params)
        render json: water_access_comment, status: :ok
    end
    
    def destroy
        water_access_comment = find_water_access_comment
        water_access_comment.destroy
        head :no_content
    end

    private

    def water_access_comment_params
        params.permit(:user_id, :water_access_point_id, :comment, :comment_title)
    end

    def find_water_access_comment
        WaterAccessComment.find(params[:id])
    end
end
