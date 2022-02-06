class ChangeStringFieldOnGear < ActiveRecord::Migration[6.1]
  def change
    change_column :gears, :part_list, :text
  end
end
