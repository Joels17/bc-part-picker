class AddCategoryIdToParts < ActiveRecord::Migration[6.1]
  def change
    add_column :parts, :category_id, :integer
  end
end
