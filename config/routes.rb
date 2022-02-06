Rails.application.routes.draw do
  resources :parts
  resources :gears
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'partsearch/:category', to: 'parts#search'
end
