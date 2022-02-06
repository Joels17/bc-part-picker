class AddPartListToGear < ActiveRecord::Migration[6.1]
  def change
    add_column :gears, :part_list, :string
    add_column :gears, :category, :string
  end
end
