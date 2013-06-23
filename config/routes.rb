Beagle::Application.routes.draw do
  resources :bills, :only => [:show, :create]
  # post '/search_bills' => 'billssearch#search_sunlight_for_bill'
  root to: "home#home_page"
  post "/search" => "home#search"
  match "/about" => "home#about"
end
