Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  post 'follow/:id' => 'relationships#follow',as:'follow'
  post 'unfollow/:id' => 'relationships#unfollow',as:'unfollow'
  post '/like/:tweet_id' => 'likes#like',as:'like'
  delete '/like/:tweet_id' => 'likes#unlike',as:'unlike'
  resources :users, only: [:edit,:update,:show,:index]
  resources :groups, only: [:index,:new,:create,:edit,:update] do
    resources :messages, only: [:index,:create]
    namespace :api do
      resources :messages,only: :index,defaults: {format:"json"}
    end
  end
  resources :tweets, only: [:index,:new,:create,:show] do
    resources :comments,only: :create
  end

  
end
