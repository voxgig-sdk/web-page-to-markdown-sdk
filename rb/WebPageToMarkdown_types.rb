# frozen_string_literal: true

# Typed models for the WebPageToMarkdown SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# ConvertUrlToMarkdownGet entity data model.
class ConvertUrlToMarkdownGet
end

# Request payload for ConvertUrlToMarkdownGet#load.
#
# @!attribute [rw] clean
#   @return [Boolean, nil]
#
# @!attribute [rw] link
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String]
ConvertUrlToMarkdownGetLoadMatch = Struct.new(
  :clean,
  :link,
  :title,
  :url,
  keyword_init: true
)

# ConvertUrlToMarkdownPost entity data model.
class ConvertUrlToMarkdownPost
end

# Request payload for ConvertUrlToMarkdownPost#create.
#
# @!attribute [rw] clean
#   @return [Boolean, nil]
#
# @!attribute [rw] link
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [Boolean, nil]
ConvertUrlToMarkdownPostCreateData = Struct.new(
  :clean,
  :link,
  :title,
  keyword_init: true
)

