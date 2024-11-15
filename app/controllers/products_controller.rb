class ProductsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    products = Product.all.order(:date)

    products_by_category = products.group_by(&:category)

    total_weights = products.group(:category).sum(:weight)

    start_date = products.minimum(:date)

    render json: {
      products_by_category: products_by_category,
      total_weights: total_weights,
      start_date: start_date
    }
  end

  def import
    if params[:files]
      params[:files].each do |file|
        temp_file = Tempfile.new(['import', '.csv'], Rails.root.join('tmp'))
        temp_file.binmode
        temp_file.write(file.read)
        temp_file.rewind
  
        ImportProductsJob.perform_later(temp_file.path)
      end
      render json: { message: 'Files are being processed' }, status: :ok
    else
      render json: { error: 'No files were uploaded' }, status: :unprocessable_entity
    end
  end
end