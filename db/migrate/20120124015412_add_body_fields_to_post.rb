class AddBodyFieldsToPost < ActiveRecord::Migration
  def self.up
    add_column :posts, :body_md, :string
    add_column :posts, :body_html, :string
  end

  def self.down
    remove_column :posts, :body_html
    remove_column :posts, :body_md
  end
end
