json.messages @messages.each do |message|
  json.name     message.user.name
  json.time     message.created_at.strftime("%Y-%m-%d %H:%M:%S")
  json.body     message.body
  json.image    message.image.url
  json.id       message.id
end
