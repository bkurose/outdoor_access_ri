class WaterAccessImagesController < ApplicationController
    def index
        water_access_images = WaterAccessImage.all
        render json: water_access_images, status: :ok
    end
    
    def create
        water_access_image = WaterAccessImage.create!(water_access_image_params)
        render json: water_access_image, status: :created
    end
    
    def show
        water_access_image = find_water_access_image
        render json: water_access_image, status: :ok
    end
    
    # def update
    #     water_access_image = find_water_access_image
    #     water_access_image.update!(water_access_image_params)
    #     render json: water_access_image, status: :ok
    # end
    
    def destroy
        water_access_image = find_water_access_image
        water_access_image.destroy
        head :no_content
    end

    private

    def water_access_image_params
        params.permit(:user_id, :water_access_point_id, :file_url)
    end

    def find_water_access_image
        WaterAccessImage.find(params[:id])
    end
end
