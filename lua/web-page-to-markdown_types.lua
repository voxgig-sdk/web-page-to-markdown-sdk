-- Typed models for the WebPageToMarkdown SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class ConvertUrlToMarkdownGet

---@class ConvertUrlToMarkdownGetLoadMatch
---@field clean? boolean
---@field link? boolean
---@field title? boolean
---@field url string

---@class ConvertUrlToMarkdownPost

---@class ConvertUrlToMarkdownPostCreateData
---@field clean? boolean
---@field link? boolean
---@field title? boolean

local M = {}

return M
