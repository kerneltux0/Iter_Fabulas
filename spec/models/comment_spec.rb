require 'rails_helper'

RSpec.describe Comment, :type => :model do
  
  it 'is only valid with content' do
    story = Story.create(title:'something', location:'somewhere', content:'something happened', likes:0)
    comment = Comment.create()
    story.comments << comment
    story.save
    expect(comment).not_to be_valid
  end

  it 'belongs to a story' do
    story = Story.create(title:'something', location:'somewhere', content:'something happened', likes:0)
    comment = Comment.create(content:'that is great')
    story.comments << comment
    story.save
    expect(story.comments.last).to eq(comment)
  end
end