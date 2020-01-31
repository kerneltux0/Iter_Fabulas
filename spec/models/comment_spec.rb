require 'rails_helper'

RSpec.describe Comment :type => :model do
  it 'is only valid with content' do
    user = User.create(username:'username', password:'password')
    story = Story.create(title:'something', location:'somewhere', content:'something happened', likes:0)
    user.stories << story
    user.save
    comment = story.build_comment(story_id:story.id)
    story.comments << comment
    story.save
    expect(comment).not_to be_valid
  end

  it 'belongs to a story' do
    user = User.create(username:'username', password:'password')
    story = Story.create(title:'something', location:'somewhere', content:'something happened', likes:0)
    user.stories << story
    user.save
    comment = story.build_comment(content:'that is great', story_id:story.id)
    story.comments << comment
    story.save
    expect(story.comments.last).to eq(comment)
  end
end