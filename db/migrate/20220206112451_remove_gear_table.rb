class RemoveGearTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :gears
  end
end
