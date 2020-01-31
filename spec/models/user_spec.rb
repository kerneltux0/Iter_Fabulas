require 'rails_helper'

RSpec.describe User, :type => :model do
  
  it 'is valid with username & password' do
    user = User.create(username: 'username', password: 'password')
    expect(user).to be_valid
  end

  it 'is not valid without a password' do
    user = User.create(username: 'username')
    expect(user).not_to be_valid
  end

  it 'is not valid without a username' do
    user = User.create(password: 'password')
    expect(user).not_to be_valid
  end

  it 'is valid with a unique username' do
    user1 = User.create(username: 'username1', password:'password')
    user2 = User.create(username: 'username1', password: 'something')
    expect(user2).not_to be_valid
  end

  it 'has many stories' do
    user = User.create(username:'username', password:'password')
    story1 = Story.create(title:'something cool', location:'somewhere awesome', content:'this is what happened', likes:0, comments:[])
    story2 = Story.create(title:'this was ok', location:'nowhere special', content:'I think this was boring', likes:0, comments:[])
    user.stories << story1
    user.stories << story2
    expect(user.stories.last).to eq(story2)
  end


end