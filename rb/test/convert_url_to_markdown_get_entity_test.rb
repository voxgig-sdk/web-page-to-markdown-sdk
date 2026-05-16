# ConvertUrlToMarkdownGet entity test

require "minitest/autorun"
require "json"
require_relative "../WebPageToMarkdown_sdk"
require_relative "runner"

class ConvertUrlToMarkdownGetEntityTest < Minitest::Test
  def test_create_instance
    testsdk = WebPageToMarkdownSDK.test(nil, nil)
    ent = testsdk.ConvertUrlToMarkdownGet(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = convert_url_to_markdown_get_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "convert_url_to_markdown_get." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_GET_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    convert_url_to_markdown_get_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.convert_url_to_markdown_get")))
    convert_url_to_markdown_get_ref01_data = nil
    if convert_url_to_markdown_get_ref01_data_raw.length > 0
      convert_url_to_markdown_get_ref01_data = Helpers.to_map(convert_url_to_markdown_get_ref01_data_raw[0][1])
    end

    # LOAD
    convert_url_to_markdown_get_ref01_ent = client.ConvertUrlToMarkdownGet(nil)
    convert_url_to_markdown_get_ref01_match_dt0 = {}
    convert_url_to_markdown_get_ref01_data_dt0_loaded, err = convert_url_to_markdown_get_ref01_ent.load(convert_url_to_markdown_get_ref01_match_dt0, nil)
    assert_nil err
    assert !convert_url_to_markdown_get_ref01_data_dt0_loaded.nil?

  end
end

def convert_url_to_markdown_get_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "convert_url_to_markdown_get", "ConvertUrlToMarkdownGetTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = WebPageToMarkdownSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["convert_url_to_markdown_get01", "convert_url_to_markdown_get02", "convert_url_to_markdown_get03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_GET_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_GET_ENTID" => idmap,
    "WEBPAGETOMARKDOWN_TEST_LIVE" => "FALSE",
    "WEBPAGETOMARKDOWN_TEST_EXPLAIN" => "FALSE",
    "WEBPAGETOMARKDOWN_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_GET_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["WEBPAGETOMARKDOWN_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["WEBPAGETOMARKDOWN_APIKEY"],
      },
      extra || {},
    ])
    client = WebPageToMarkdownSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["WEBPAGETOMARKDOWN_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["WEBPAGETOMARKDOWN_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
