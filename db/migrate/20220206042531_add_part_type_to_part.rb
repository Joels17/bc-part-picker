class AddPartTypeToPart < ActiveRecord::Migration[6.1]
  def change
    add_column :parts, :part_type, :string 
  end
end
