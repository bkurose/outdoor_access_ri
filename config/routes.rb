Rails.application.routes.draw do
  resources :water_access_images
  resources :water_access_comments
  resources :water_access_ratings
  resources :water_access_collaborators
  resources :water_access_points
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'
end
