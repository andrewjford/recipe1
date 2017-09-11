Rails.application.routes.draw do
  resources :ingredients
  resources :recipe_line_items
  resources :recipes

  root 'application#index'

  get '/signup' => 'users#new'
  post '/signup' => 'users#create'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/token' => 'application#token'
end
