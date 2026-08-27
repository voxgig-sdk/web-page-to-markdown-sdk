# WebPageToMarkdown SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "WebPageToMarkdown",
            "slug": "web-page-to-markdown",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://urltomarkdown.herokuapp.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "convert_url_to_markdown_get": {},
                "convert_url_to_markdown_post": {},
            },
        },
        "entity": {
      "convert_url_to_markdown_get": {
        "fields": [],
        "name": "convert_url_to_markdown_get",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": True,
                      "kind": "query",
                      "name": "clean",
                      "orig": "clean",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": True,
                      "kind": "query",
                      "name": "link",
                      "orig": "link",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "title",
                      "orig": "title",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": "https://www.mozilla.org/en-GB/firefox/",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/",
                "parts": [],
                "select": {
                  "exist": [
                    "clean",
                    "link",
                    "title",
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "convert_url_to_markdown_post": {
        "fields": [],
        "name": "convert_url_to_markdown_post",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": True,
                      "kind": "query",
                      "name": "clean",
                      "orig": "clean",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": True,
                      "kind": "query",
                      "name": "link",
                      "orig": "link",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "title",
                      "orig": "title",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/",
                "parts": [],
                "select": {
                  "exist": [
                    "clean",
                    "link",
                    "title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
