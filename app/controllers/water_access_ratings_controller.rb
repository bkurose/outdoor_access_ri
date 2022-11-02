class WaterAccessRatingsController < ApplicationController
    def index
        water_access_ratings = WaterAccessRatings.all
        render json: water_access_ratings, status: :ok
    end
    
    def create
        water_access_rating = WaterAccessRatings.create!(water_access_rating_params)
        render json: water_access_rating, status: :created
    end
    
    def show
        water_access_rating = find_water_access_rating
        render json: water_access_rating, status: :ok
    end
    
    def update
        water_access_rating = find_water_access_rating
        water_access_rating.update!(water_access_rating_params)
        render json: water_access_rating, status: :ok
    end
    
    # def destroy
    #     water_access_rating = find_water_access_rating
    #     water_access_rating.destroy
    #     head :no_content
    # end

    private

    def water_access_rating_params
        params.permit(:user_id, :water_access_point_id, :rating)
    end

    def find_water_access_rating
        WaterAccessRatings.find(params[:id])
    end
end
