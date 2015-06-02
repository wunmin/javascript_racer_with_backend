class CreateGamesPlayers < ActiveRecord::Migration
  def change
    create_table :games_players do |games_player|
      games_player.belongs_to :player
      games_player.belongs_to :game
      games_player.integer :player_num
      games_player.integer :player_position
      games_player.timestamps
    end
  end
end
