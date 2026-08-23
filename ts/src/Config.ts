
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'WebPageToMarkdown',
        slug: "web-page-to-markdown",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://urltomarkdown.herokuapp.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      convert_url_to_markdown_get: {
      },

      convert_url_to_markdown_post: {
      },

    }
  }


  entity = {
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
                    "example": true,
                    "kind": "query",
                    "name": "clean",
                    "orig": "clean",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "link",
                    "orig": "link",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "title",
                    "orig": "title",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "https://www.mozilla.org/en-GB/firefox/",
                    "kind": "query",
                    "name": "url",
                    "orig": "url",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
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
                  "url"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
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
                    "example": true,
                    "kind": "query",
                    "name": "clean",
                    "orig": "clean",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "link",
                    "orig": "link",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "title",
                    "orig": "title",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/",
              "parts": [],
              "select": {
                "exist": [
                  "clean",
                  "link",
                  "title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

