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
    story1 = Story.create(title:'something cool', location:'somewhere awesome', content:'this is what happened', likes:0)
    story2 = Story.create(title:'this was ok', location:'nowhere special', content:'I think this was boring', likes:0)
    user.stories << story1
    user.stories << story2
    expect(user.stories.last).to eq(story2)
  end

  it 'has many comments through stories' do
    user = User.create(username:'username', password:'password')
    story = Story.create(title:'something something', location:'somewhere', content:'this is what happened', likes:0)
    user.stories << story
    user.story_id = story.id
    user.save
    comment1 = story.build_comment(content:'that was great', story_id:story.id)
    story.comments << comment1
    story.save
    comment1.save
    comment2 = story.build_comment(content:'whatever, you big liar', story_id:story.id)
    story.comments << comment2
    story.save
    comment2.save
    expect(user.comments.last).to eq(comment2)

  end


end