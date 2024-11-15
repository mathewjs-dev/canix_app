class ImportService
  require 'csv'

  def call(file_path)
    CSV.foreach(file_path, headers: true) do |row|
      product = Product.new(
        product_id: row['product_id'],
        date: row['date'],
        weight: row['weight'],
        unit: row['unit']
      )
      unless product.save
        Rails.logger.error "Failed to save product: #{product.errors.full_messages.join(', ')}"
      end
    end
  end
end