namespace :start do
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=true npm run postinstall && foreman start'
  end

  task :development do
    exec 'foreman start'
  end
end
