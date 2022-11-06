class WaterAccessPointsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]
    def index
        water_access_points = WaterAccessPoint.all
        render json: water_access_points, status: :ok, each_serializer: WaterAccessPointCardSerializer
    end
    
    def create
        water_access_point = WaterAccessPoint.create!(water_access_point_params)
        render json: water_access_point, status: :created
    end
    
    def show
        water_access_point = find_water_access_point
        render json: water_access_point, status: :ok
    end
    
    def update
        water_access_point = find_water_access_point
        water_access_point.update!(water_access_point_params)
        render json: water_access_point, status: :ok
    end
    
    def destroy
        water_access_point = find_water_access_point
        water_access_point.destroy
        head :no_content
    end

    private

    def water_access_point_params
        params.permit(:id, :name, :parking, :lat, :long, :access_type, :description, :dogs, :town, :trail_map, :handicap_accessible, :details, :traffic)
    end

    def find_water_access_point
        WaterAccessPoint.find(params[:id])
    end
end
