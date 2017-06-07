class CreateMenbers < ActiveRecord::Migration[5.0]
  def change
    create_table :menbers do |t|
      t.references :group, null:false, foreign_key: true, index: true
      t.references :user, null:false, foreign_key: true, index: true
      t.timestamps
    end
  end
end
