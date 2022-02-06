class Part < ApplicationRecord
  belongs_to :category

  def get_parent
    @categories = Category.where(id: self.category_id)
    if !@categories.empty?
      return @categories[0].name
    else
      return nil
    end
  end
end
