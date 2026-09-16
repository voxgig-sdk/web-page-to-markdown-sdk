"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ConvertUrlToMarkdownPostEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when WEB_PAGE_TO_MARKDOWN_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('WEB_PAGE_TO_MARKDOWN_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.WebPageToMarkdownSDK.test();
        const ent = testsdk.ConvertUrlToMarkdownPost();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.WEB_PAGE_TO_MARKDOWN_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'convert_url_to_markdown_post.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "convert_url_to_markdown_post", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": true, "kind": "query", "name": "clean", "orig": "clean", "reqd": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "example": true, "kind": "query", "name": "link", "orig": "link", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "example": false, "kind": "query", "name": "title", "orig": "title", "reqd": false, "type": "`$BOOLEAN`", "index$": 2 }] }, "contract": { "id": "POST /", "json": "{\"operationId\":\"convertUrlToMarkdownPost\",\"parameters\":[{\"description\":\"Include the page title as a heading in the Markdown output. Title is also returned in the X-Title HTTP header.\",\"in\":\"query\",\"name\":\"title\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Whether to include links in the Markdown output\",\"in\":\"query\",\"name\":\"links\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}},{\"description\":\"Whether to clean/filter content before conversion. When false, output will be more verbose but may have more junk or artefacts.\",\"in\":\"query\",\"name\":\"clean\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/x-www-form-urlencoded\":{\"example\":\"url=https%3A%2F%2Fwww.mozilla.org%2Fen-GB%2Ffirefox%2F&html=%3C!doctype%20html%3E%3Chtml%20...\",\"schema\":{\"properties\":{\"html\":{\"description\":\"The HTML content to convert to Markdown (optional - if provided, this HTML will be used instead of fetching from the URL)\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the webpage being converted\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"url\"],\"type\":\"object\"}}},\"description\":\"Form data containing the URL and optionally the HTML content to convert\",\"required\":true},\"responses\":{\"200\":{\"content\":{\"text/plain\":{\"example\":\"# Firefox - Protect your life online with privacy-first products — Mozilla (UK)\\n\\nMeet our family of products\\n---------------------------\\n\\n* [![](https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg) ...\",\"schema\":{\"description\":\"The webpage content converted to Markdown format\",\"type\":\"string\"}}},\"description\":\"Successfully converted webpage to Markdown\",\"headers\":{\"X-Title\":{\"description\":\"URL-encoded title of the converted webpage (when title parameter is true)\",\"example\":\"Firefox%20-%20Protect%20your%20life%20online%20with%20privacy-first%20products%20%E2%80%94%20Mozilla%20(UK)\",\"schema\":{\"type\":\"string\"}}}},\"400\":{\"content\":{\"text/plain\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Bad request - invalid URL, HTML, or parameters\"},\"500\":{\"content\":{\"text/plain\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Internal server error - failed to process the webpage\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/", "segments": [], "select": { "exist": ["clean", "link", "title"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "convert_url_to_markdown_post", "name__orig": "convert_url_to_markdown_post", "Name": "ConvertUrlToMarkdownPost", "name_": "convert_url_to_markdown_post", "name-": "convert-url-to-markdown-post", "NAME": "CONVERT_URL_TO_MARKDOWN_POST", "index$": 1 }, { "active": true, "entity": "convert_url_to_markdown_post", "key$": "BasicConvertUrlToMarkdownPostFlow", "kind": "basic", "name": "BasicConvertUrlToMarkdownPostFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "convert_url_to_markdown_post_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'ConvertUrlToMarkdownPost');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const convert_url_to_markdown_post_ref01_ent = client.ConvertUrlToMarkdownPost();
        let convert_url_to_markdown_post_ref01_data = setup.data.new.convert_url_to_markdown_post['convert_url_to_markdown_post_ref01'];
        convert_url_to_markdown_post_ref01_data = (await convert_url_to_markdown_post_ref01_ent.create(convert_url_to_markdown_post_ref01_data)).data();
        (0, node_assert_1.default)(null != convert_url_to_markdown_post_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/convert_url_to_markdown_post/ConvertUrlToMarkdownPostTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.WebPageToMarkdownSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['convert_url_to_markdown_post01', 'convert_url_to_markdown_post02', 'convert_url_to_markdown_post03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'WEB_PAGE_TO_MARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_POST_ENTID': idmap,
        'WEB_PAGE_TO_MARKDOWN_TEST_LIVE': 'FALSE',
        'WEB_PAGE_TO_MARKDOWN_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['WEB_PAGE_TO_MARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_POST_ENTID'];
    const live = 'TRUE' === env.WEB_PAGE_TO_MARKDOWN_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['WEB_PAGE_TO_MARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_POST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.WebPageToMarkdownSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.WEB_PAGE_TO_MARKDOWN_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ConvertUrlToMarkdownPostEntity.test.js.map