class RemoveCategoryFromPartsAndGears < ActiveRecord::Migration[6.1]
  def change
    remove_column :parts, :category, :string
    remove_column :gears, :category, :string
  end
end
