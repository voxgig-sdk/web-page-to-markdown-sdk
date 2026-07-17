-- WebPageToMarkdown SDK exists test

local sdk = require("web-page-to-markdown_sdk")

describe("WebPageToMarkdownSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
