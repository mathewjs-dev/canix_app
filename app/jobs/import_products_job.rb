class ImportProductsJob < ApplicationJob
  queue_as :default

  def perform(file_path)
    ImportService.new.call(file_path)
  end
end
