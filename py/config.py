# WebPageToMarkdown SDK configuration


def make_config():
    return {
        "main": {
            "name": "WebPageToMarkdown",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": True,
                      "kind": "query",
                      "name": "clean",
                      "orig": "clean",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": True,
                      "kind": "query",
                      "name": "link",
                      "orig": "link",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": False,
                      "kind": "query",
                      "name": "title",
                      "orig": "title",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": "https://www.mozilla.org/en-GB/firefox/",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "load",
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
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": True,
                      "kind": "query",
                      "name": "clean",
                      "orig": "clean",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": True,
                      "kind": "query",
                      "name": "link",
                      "orig": "link",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": False,
                      "kind": "query",
                      "name": "title",
                      "orig": "title",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
