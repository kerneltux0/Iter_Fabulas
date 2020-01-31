require 'rails_helper'

RSpec.describe Story :type => :model do
  it 'is not valid without a title' do
    story = Story.create(location:'somewhere', content:'this is what happened', likes:0, comments:[])
    expect(story).not_to be_valid
  end

  it 'is not valid without a location' do
    story = Story.create(title:'something cool', content:'this is what happened', likes:0, comments:[])
    expect(story).not_to be_valid
  end

  it 'is not valid without content' do
    story = Story.create(title:'something awesome', location:'somewhere', likes:0, comments:[])
    expect(story).not_to be_valid
  end
  
end