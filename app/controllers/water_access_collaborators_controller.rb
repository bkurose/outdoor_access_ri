class WaterAccessCollaboratorsController < ApplicationController
    def index
        water_access_collaborators = WaterAccessCollaborator.all
        render json: water_access_collaborators, status: :ok
    end
    
    def create
        water_access_collaborator = WaterAccessCollaborator.create!(water_access_collaborator_params)
        render json: water_access_collaborator, status: :created
    end
    
    def show
        water_access_collaborator = find_water_access_collaborator
        render json: water_access_collaborator, status: :ok
    end
    
    def update
        water_access_collaborator = find_water_access_collaborator
        water_access_collaborator.update!(water_access_collaborator_params)
        render json: water_access_collaborator, status: :ok
    end
    
    def destroy
        water_access_collaborator = find_water_access_collaborator
        water_access_collaborator.destroy
        head :no_content
    end

    private

    def water_access_collaborator_params
        params.permit(:user_id, :water_access_point_id, :full_edit)
    end

    def find_water_access_collaborator
        WaterAccessCollaborator.find(params[:id])
    end
end
