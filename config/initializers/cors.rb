Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:5000'
    resource '*',
      headers: :any,
      methods: [:get,:post,:put,:patch,:delete,:options,:head]
  end

  # allow do
  #   origins 'used for when deploying'
  #   resource '*',
  #     headers: :any,
  #     methods: [:get,:post,:put,:patch,:delete,:options,:head],
  #     credentials: true
  # end
end