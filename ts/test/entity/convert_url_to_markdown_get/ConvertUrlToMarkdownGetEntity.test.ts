

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WebPageToMarkdownSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ConvertUrlToMarkdownGetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WEB_PAGE_TO_MARKDOWN_TEST_LIVE=TRUE.
  afterEach(liveDelay('WEB_PAGE_TO_MARKDOWN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WebPageToMarkdownSDK.test()
    const ent = testsdk.ConvertUrlToMarkdownGet()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WEB_PAGE_TO_MARKDOWN_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'convert_url_to_markdown_get.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"convert_url_to_markdown_get","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":true,"kind":"query","name":"clean","orig":"clean","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":true,"kind":"query","name":"link","orig":"link","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"example":false,"kind":"query","name":"title","orig":"title","reqd":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"example":"https://www.mozilla.org/en-GB/firefox/","kind":"query","name":"url","orig":"url","reqd":true,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /","json":"{\"operationId\":\"convertUrlToMarkdownGet\",\"parameters\":[{\"description\":\"The URL of the webpage to convert to Markdown\",\"example\":\"https://www.mozilla.org/en-GB/firefox/\",\"in\":\"query\",\"name\":\"url\",\"required\":true,\"schema\":{\"format\":\"uri\",\"type\":\"string\"}},{\"description\":\"Include the page title as a heading in the Markdown output. Title is also returned in the X-Title HTTP header.\",\"in\":\"query\",\"name\":\"title\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Whether to include links in the Markdown output\",\"in\":\"query\",\"name\":\"links\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}},{\"description\":\"Whether to clean/filter content before conversion. When false, output will be more verbose but may have more junk or artefacts.\",\"in\":\"query\",\"name\":\"clean\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"text/plain\":{\"example\":\"# Firefox - Protect your life online with privacy-first products — Mozilla (UK)\\n\\nMeet our family of products\\n---------------------------\\n\\n* [![](https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg) ...\",\"schema\":{\"description\":\"The webpage content converted to Markdown format\",\"type\":\"string\"}}},\"description\":\"Successfully converted webpage to Markdown\",\"headers\":{\"X-Title\":{\"description\":\"URL-encoded title of the converted webpage (when title parameter is true)\",\"example\":\"Firefox%20-%20Protect%20your%20life%20online%20with%20privacy-first%20products%20%E2%80%94%20Mozilla%20(UK)\",\"schema\":{\"type\":\"string\"}}}},\"400\":{\"content\":{\"text/plain\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Bad request - invalid URL or parameters\"},\"500\":{\"content\":{\"text/plain\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Internal server error - failed to process the webpage\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{"exist":["clean","link","title","url"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"convert_url_to_markdown_get","name__orig":"convert_url_to_markdown_get","Name":"ConvertUrlToMarkdownGet","name_":"convert_url_to_markdown_get","name-":"convert-url-to-markdown-get","NAME":"CONVERT_URL_TO_MARKDOWN_GET","index$":0}, {"active":true,"entity":"convert_url_to_markdown_get","key$":"BasicConvertUrlToMarkdownGetFlow","kind":"basic","name":"BasicConvertUrlToMarkdownGetFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"convert_url_to_markdown_get_ref01","srcdatavar":"convert_url_to_markdown_get_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-convert_url_to_markdown_get_ref01"}}],"index$":0}]}, 'ConvertUrlToMarkdownGet')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let convert_url_to_markdown_get_ref01_data = Object.values(setup.data.existing.convert_url_to_markdown_get)[0] as any

    // LOAD
    const convert_url_to_markdown_get_ref01_ent = client.ConvertUrlToMarkdownGet()
    const convert_url_to_markdown_get_ref01_match_dt0: any = {}
    const convert_url_to_markdown_get_ref01_data_dt0 = (await convert_url_to_markdown_get_ref01_ent.load(convert_url_to_markdown_get_ref01_match_dt0)).data()
    assert(null != convert_url_to_markdown_get_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/convert_url_to_markdown_get/ConvertUrlToMarkdownGetTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WebPageToMarkdownSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['convert_url_to_markdown_get01','convert_url_to_markdown_get02','convert_url_to_markdown_get03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WEB_PAGE_TO_MARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_GET_ENTID': idmap,
    'WEB_PAGE_TO_MARKDOWN_TEST_LIVE': 'FALSE',
    'WEB_PAGE_TO_MARKDOWN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WEB_PAGE_TO_MARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_GET_ENTID']

  const live = 'TRUE' === env.WEB_PAGE_TO_MARKDOWN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WEB_PAGE_TO_MARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_GET_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WebPageToMarkdownSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
