class AddCategoryToPart < ActiveRecord::Migration[6.1]
  def change
    add_column :parts, :category, :string
  end
end
