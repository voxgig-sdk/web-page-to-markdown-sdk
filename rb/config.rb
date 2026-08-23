# WebPageToMarkdown SDK configuration

module WebPageToMarkdownConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "WebPageToMarkdown",
        "slug" => "web-page-to-markdown",
        "version" => "0.0.1",
        "target" => "rb",
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
                  "args" => {
                    "query" => [
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "clean",
                        "orig" => "clean",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "link",
                        "orig" => "link",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "title",
                        "orig" => "title",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => "https://www.mozilla.org/en-GB/firefox/",
                        "kind" => "query",
                        "name" => "url",
                        "orig" => "url",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
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
                  "args" => {
                    "query" => [
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "clean",
                        "orig" => "clean",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "link",
                        "orig" => "link",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "title",
                        "orig" => "title",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
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
