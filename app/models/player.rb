class Player < ActiveRecord::Base
  has_many :games_players
  has_many :games, through: :games_players
  validates :name, presence: true, uniqueness: :true
end
