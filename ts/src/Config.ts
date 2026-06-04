
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://urltomarkdown.herokuapp.com',

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
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "link",
                    "orig": "link",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "title",
                    "orig": "title",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "example": "https://www.mozilla.org/en-GB/firefox/",
                    "kind": "query",
                    "name": "url",
                    "orig": "url",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/",
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
              "active": true,
              "parts": [],
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "link",
                    "orig": "link",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "title",
                    "orig": "title",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  }
                ]
              },
              "method": "POST",
              "orig": "/",
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
              "active": true,
              "parts": [],
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "create"
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

