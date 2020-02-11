Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'stories#index'
  post '/stories', to: 'stories#create'
  patch '/stories/:id', to: 'stories#update'
  get '/stories/:id/comments', to: 'comments#show'
  post '/stories/:id/comments', to: 'comments#new'
end
