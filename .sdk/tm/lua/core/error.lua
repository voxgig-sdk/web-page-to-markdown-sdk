-- WebPageToMarkdown SDK error

local WebPageToMarkdownError = {}
WebPageToMarkdownError.__index = WebPageToMarkdownError


function WebPageToMarkdownError.new(code, msg, ctx)
  local self = setmetatable({}, WebPageToMarkdownError)
  self.is_sdk_error = true
  self.sdk = "WebPageToMarkdown"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function WebPageToMarkdownError:error()
  return self.msg
end


function WebPageToMarkdownError:__tostring()
  return self.msg
end


return WebPageToMarkdownError
