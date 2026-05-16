# WebPageToMarkdown SDK utility: make_context
require_relative '../core/context'
module WebPageToMarkdownUtilities
  MakeContext = ->(ctxmap, basectx) {
    WebPageToMarkdownContext.new(ctxmap, basectx)
  }
end
