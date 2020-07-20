class RemoveMovieFromMessages < ActiveRecord::Migration[6.0]
  def change
    remove_column :messages, :movie, :string
  end
end
