# WebPageToMarkdown SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module WebPageToMarkdownFeatures
  def self.make_feature(name)
    case name
    when "base"
      WebPageToMarkdownBaseFeature.new
    when "test"
      WebPageToMarkdownTestFeature.new
    else
      WebPageToMarkdownBaseFeature.new
    end
  end
end
