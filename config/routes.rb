Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'stories#index'
  post '/stories', to: 'stories#create'
  get '/stories/:id/comments', to: 'comments#index'
  post '/stories/:id/comments', to: 'comments#create'
end
