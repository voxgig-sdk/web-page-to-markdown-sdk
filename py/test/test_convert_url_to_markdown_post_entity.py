# ConvertUrlToMarkdownPost entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from webpagetomarkdown_sdk import WebPageToMarkdownSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestConvertUrlToMarkdownPostEntity:

    def test_should_create_instance(self):
        testsdk = WebPageToMarkdownSDK.test(None, None)
        ent = testsdk.ConvertUrlToMarkdownPost(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _convert_url_to_markdown_post_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "convert_url_to_markdown_post." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_POST_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        convert_url_to_markdown_post_ref01_ent = client.ConvertUrlToMarkdownPost(None)
        convert_url_to_markdown_post_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.convert_url_to_markdown_post"), "convert_url_to_markdown_post_ref01"))

        convert_url_to_markdown_post_ref01_data_result, err = convert_url_to_markdown_post_ref01_ent.create(convert_url_to_markdown_post_ref01_data, None)
        assert err is None
        convert_url_to_markdown_post_ref01_data = helpers.to_map(convert_url_to_markdown_post_ref01_data_result)
        assert convert_url_to_markdown_post_ref01_data is not None



def _convert_url_to_markdown_post_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/convert_url_to_markdown_post/ConvertUrlToMarkdownPostTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = WebPageToMarkdownSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["convert_url_to_markdown_post01", "convert_url_to_markdown_post02", "convert_url_to_markdown_post03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_POST_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_POST_ENTID": idmap,
        "WEBPAGETOMARKDOWN_TEST_LIVE": "FALSE",
        "WEBPAGETOMARKDOWN_TEST_EXPLAIN": "FALSE",
        "WEBPAGETOMARKDOWN_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_POST_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("WEBPAGETOMARKDOWN_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
                "apikey": env.get("WEBPAGETOMARKDOWN_APIKEY"),
            },
            extra or {},
        ])
        client = WebPageToMarkdownSDK(helpers.to_map(merged_opts))

    _live = env.get("WEBPAGETOMARKDOWN_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("WEBPAGETOMARKDOWN_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
