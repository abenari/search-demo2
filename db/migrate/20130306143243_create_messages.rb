class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :body
      t.string :subject
      t.string :sender
      t.string :recipient
      t.boolean :read

      t.timestamps
    end
  end
end
