# WebPageToMarkdown SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WebPageToMarkdownFeatures
  def self.make_feature(name)
    case name
    when "base"
      WebPageToMarkdownBaseFeature.new
    when "ratelimit"
      WebPageToMarkdownRatelimitFeature.new
    when "retry"
      WebPageToMarkdownRetryFeature.new
    when "test"
      WebPageToMarkdownTestFeature.new
    when "timeout"
      WebPageToMarkdownTimeoutFeature.new
    else
      WebPageToMarkdownBaseFeature.new
    end
  end
end
