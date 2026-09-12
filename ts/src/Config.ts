
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
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
      },
      "transport": "base"
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
              "segments": [],
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
              },
              "parts": []
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
              "segments": [],
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
              },
              "parts": []
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
  config,
  FEATURE_PLUGINS,
}

