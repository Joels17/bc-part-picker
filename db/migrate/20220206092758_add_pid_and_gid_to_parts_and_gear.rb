class AddPidAndGidToPartsAndGear < ActiveRecord::Migration[6.1]
  def change
    add_column :parts, :parts_rand_id, :integer
    add_column :gears, :gears_rand_id, :integer
  end
end
