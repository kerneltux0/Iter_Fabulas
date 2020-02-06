Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'stories#index'
  post '/stories', to: 'stories#new'
  get '/stories/:id', to: 'stories#show'
  get '/stories/:id/comments', to: 'comments#show'
  post '/stories/:id/comments', to: 'comments#new'
end
