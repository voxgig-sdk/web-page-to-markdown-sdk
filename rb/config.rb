# WebPageToMarkdown SDK configuration

module WebPageToMarkdownConfig
  def self.make_config
    {
      "main" => {
        "name" => "WebPageToMarkdown",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://urltomarkdown.herokuapp.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "convert_url_to_markdown_get" => {},
          "convert_url_to_markdown_post" => {},
        },
      },
      "entity" => {
        "convert_url_to_markdown_get" => {
          "fields" => [],
          "name" => "convert_url_to_markdown_get",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => true,
                        "kind" => "query",
                        "name" => "clean",
                        "orig" => "clean",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "active" => true,
                        "example" => true,
                        "kind" => "query",
                        "name" => "link",
                        "orig" => "link",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "active" => true,
                        "example" => false,
                        "kind" => "query",
                        "name" => "title",
                        "orig" => "title",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "active" => true,
                        "example" => "https://www.mozilla.org/en-GB/firefox/",
                        "kind" => "query",
                        "name" => "url",
                        "orig" => "url",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/",
                  "parts" => [],
                  "select" => {
                    "exist" => [
                      "clean",
                      "link",
                      "title",
                      "url",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "convert_url_to_markdown_post" => {
          "fields" => [],
          "name" => "convert_url_to_markdown_post",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => true,
                        "kind" => "query",
                        "name" => "clean",
                        "orig" => "clean",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "active" => true,
                        "example" => true,
                        "kind" => "query",
                        "name" => "link",
                        "orig" => "link",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "active" => true,
                        "example" => false,
                        "kind" => "query",
                        "name" => "title",
                        "orig" => "title",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "method" => "POST",
                  "orig" => "/",
                  "parts" => [],
                  "select" => {
                    "exist" => [
                      "clean",
                      "link",
                      "title",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "create",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    WebPageToMarkdownFeatures.make_feature(name)
  end
end
