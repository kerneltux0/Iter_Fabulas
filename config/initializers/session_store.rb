if Rails.env == 'production'
  Rails.application.config.session_store :cookie_store, key: '_Iter_Fabulas', domain: 'enter domain when ready to deploy'
else
  Rails.application.config.session_store :cookie_store, key: '_Iter_Fabulas'
end