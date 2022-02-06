class RenamePartsRandIdToSizeId < ActiveRecord::Migration[6.1]
  def change
    rename_column :parts, :parts_rand_id, :size_id
  end
end
