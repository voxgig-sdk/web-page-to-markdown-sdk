-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "WebPageToMarkdown",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://urltomarkdown.herokuapp.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["convert_url_to_markdown_get"] = {},
        ["convert_url_to_markdown_post"] = {},
      },
    },
    entity = {
      ["convert_url_to_markdown_get"] = {
        ["fields"] = {},
        ["name"] = "convert_url_to_markdown_get",
        ["op"] = {
          ["load"] = {
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "clean",
                      ["orig"] = "clean",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "link",
                      ["orig"] = "link",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "title",
                      ["orig"] = "title",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = "https://www.mozilla.org/en-GB/firefox/",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/",
                ["select"] = {
                  ["exist"] = {
                    "clean",
                    "link",
                    "title",
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["parts"] = {},
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["convert_url_to_markdown_post"] = {
        ["fields"] = {},
        ["name"] = "convert_url_to_markdown_post",
        ["op"] = {
          ["create"] = {
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "clean",
                      ["orig"] = "clean",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "link",
                      ["orig"] = "link",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "title",
                      ["orig"] = "title",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                  },
                },
                ["method"] = "POST",
                ["orig"] = "/",
                ["select"] = {
                  ["exist"] = {
                    "clean",
                    "link",
                    "title",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["parts"] = {},
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "create",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
