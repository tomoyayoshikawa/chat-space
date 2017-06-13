FactoryGirl.define do

  factory :message do
    body      { Faker::Lorem.sentence }
    image     {File.open(File.join(Rails.root, '/test/fixtures/files/test.jpg'))}
    group_id  "1"
    user_id   "2"
  end

end
