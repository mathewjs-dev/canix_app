class Product < ApplicationRecord
  validates :product_id, presence: true
  validates :date, presence: true
  validates :weight, presence: true, numericality: true
  validates :unit, presence: true
  validates :category, presence: true

  before_validation :set_category

  private

  def set_category
    self.category = product_id[0, 3] if product_id.present?
  end
end
