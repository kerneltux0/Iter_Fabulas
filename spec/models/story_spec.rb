require 'rails_helper'

RSpec.describe Story, :type => :model do
  
  it 'is not valid without a title' do
    story = Story.create(location:'somewhere', content:'this is what happened', name:'jimmy' likes:0)
    expect(story).not_to be_valid
  end

  it 'is not valid without a location' do
    story = Story.create(title:'something cool', content:'this is what happened', name:'bob', likes:0)
    expect(story).not_to be_valid
  end

  it 'is not valid without content' do
    story = Story.create(title:'something awesome', location:'somewhere', name:'me', likes:0)
    expect(story).not_to be_valid
  end

  it 'is not valid without a name' do
    story = Story.create(title:'something', location:'somewhere', content:'how this happened', likes:0)
    expect(story).not_to be_valid
  end

  it 'has many comments' do
    story = Story.create(title:'something', location:'somewhere', content:'this is what happened', likes:0)
    comment1 = Comment.create(content:'that is great')
    story.comments << comment1
    story.save
    comment2 = Comment.create(content:'whatever, you liar')
    story.comments << comment2
    story.save
    expect(story.comments.last).to eq(comment2)

  end
  
end