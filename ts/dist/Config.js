"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'WebPageToMarkdown',
        slug: "web-page-to-markdown",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://urltomarkdown.herokuapp.com",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            convert_url_to_markdown_get: {},
            convert_url_to_markdown_post: {},
        }
    };
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
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map