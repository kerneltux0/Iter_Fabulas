require 'rails_helper'

RSpec.describe Story :type => :model do
  it 'is not valid without a title' do
    story = Story.create(location:'somewhere', content:'this is what happened', likes:0)
    expect(story).not_to be_valid
  end

  it 'is not valid without a location' do
    story = Story.create(title:'something cool', content:'this is what happened', likes:0)
    expect(story).not_to be_valid
  end

  it 'is not valid without content' do
    story = Story.create(title:'something awesome', location:'somewhere', likes:0)
    expect(story).not_to be_valid
  end

  it 'belongs to a user' do
    user = User.create(username:'username', password:'password')
    story1 = Story.create(title:'something cool', location:'somewhere awesome', content:'this is what happened', likes:0)
    story2 = Story.create(title:'something awesome', location:'on the ocean', content:'let me tell you something', likes:0)
    user.stories << story1
    user.stories << story2
    expect(user.stories.last).to eq(story2)
  end

  it 'has many comments' do
    story = Story.create(title:'something', location:'somewhere', content:'this is what happened', likes:0)
    comment1 = story.build_comment(content:'that is great', story_id:story.id)
    story.comments << comment1
    story.save
    comment2 = story.build_comment(content:'whatever, you liar', story_id:story.id)
    story.comments << comment2
    story.save
    expect(story.comments.last).to eq(comment2)

  end
  
end