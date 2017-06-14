FactoryGirl.define do

  factory :user do
    name                { Faker::Name.name }
    email               "sample@gmail.com"
    password                  "password"
    password_confirmation     "password"
  end
end
