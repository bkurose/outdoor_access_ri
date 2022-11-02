Rails.application.routes.draw do
  resources :water_access_images, only: [:create, :index, :show, :destroy]
  resources :water_access_comments, only: [:create, :index, :show, :destroy, :update]
  resources :water_access_ratings, only: [:create, :index, :show, :update]
  resources :water_access_collaborators, only: [:create, :index, :show, :destroy, :update]
  resources :water_access_points, only: [:create, :index, :show, :destroy, :update]
  resources :users, only: [:create, :show, :destroy, :update, :index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #test route
  get '/hello', to: 'application#hello_world'

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
