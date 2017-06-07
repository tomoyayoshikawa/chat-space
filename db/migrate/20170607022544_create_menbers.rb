class CreateMenbers < ActiveRecord::Migration[5.0]
  def change
    create_table :menbers do |t|
      t.references :group, nul:false, foreign_key:true, index:true
      t.references :user, nul:false, foreign_key:true, index:true
    end
  end
end
