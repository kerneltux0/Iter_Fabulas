require 'rails_helper'

RSpec.describe User, type: :model do
  
  it 'is valid with username & password' do
    user = User.create(username: 'username', password: 'password')
    expect(user).to be_valid
  end

  it 'is not valid without a password' do
    user = User.create(username: 'username')
    expect(user).not_to_be_valid
  end

  it 'is not valid without a username' do
    user = User.create(password: 'password')
    expect(user).not_to_be_valid
  end
end