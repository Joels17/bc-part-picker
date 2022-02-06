Rails.application.routes.draw do
  resources :parts
  resources :categories
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/categoriesearch/:name', to: 'categories#search'
end
