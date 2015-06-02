class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |game|
      game.integer :time_taken
      game.boolean :done
      game.timestamps
    end
  end
end
