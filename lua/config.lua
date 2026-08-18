-- WebPageToMarkdown SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
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
            ["input"] = "data",
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
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "link",
                      ["orig"] = "link",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "title",
                      ["orig"] = "title",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "https://www.mozilla.org/en-GB/firefox/",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/",
                ["parts"] = {},
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
              },
            },
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
            ["input"] = "data",
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
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "link",
                      ["orig"] = "link",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "title",
                      ["orig"] = "title",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/",
                ["parts"] = {},
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
              },
            },
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
