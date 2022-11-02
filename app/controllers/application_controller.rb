class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorized
    def authorized 
      render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def hello_world
      session[:count] = (session[:count]||0) + 1
      render json: { count: session[:count] }
    end

    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  
    def record_not_found(exception)
      render json: {error: "#{exception.model} not found"}, status: :not_found
    end
  
    def record_invalid(exception)
      render json: {errors: exception.record.errors.full_messages}, status: 422
    end
end
