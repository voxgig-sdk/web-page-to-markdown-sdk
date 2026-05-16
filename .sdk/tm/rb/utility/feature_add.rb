# WebPageToMarkdown SDK utility: feature_add
module WebPageToMarkdownUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
