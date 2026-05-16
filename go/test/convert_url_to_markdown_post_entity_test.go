package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/web-page-to-markdown-sdk"
	"github.com/voxgig-sdk/web-page-to-markdown-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestConvertUrlToMarkdownPostEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ConvertUrlToMarkdownPost(nil)
		if ent == nil {
			t.Fatal("expected non-nil ConvertUrlToMarkdownPostEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := convert_url_to_markdown_postBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "convert_url_to_markdown_post." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_POST_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		convertUrlToMarkdownPostRef01Ent := client.ConvertUrlToMarkdownPost(nil)
		convertUrlToMarkdownPostRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "convert_url_to_markdown_post"}, setup.data), "convert_url_to_markdown_post_ref01"))

		convertUrlToMarkdownPostRef01DataResult, err := convertUrlToMarkdownPostRef01Ent.Create(convertUrlToMarkdownPostRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		convertUrlToMarkdownPostRef01Data = core.ToMapAny(convertUrlToMarkdownPostRef01DataResult)
		if convertUrlToMarkdownPostRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func convert_url_to_markdown_postBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "convert_url_to_markdown_post", "ConvertUrlToMarkdownPostTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read convert_url_to_markdown_post test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse convert_url_to_markdown_post test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"convert_url_to_markdown_post01", "convert_url_to_markdown_post02", "convert_url_to_markdown_post03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_POST_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_POST_ENTID": idmap,
		"WEBPAGETOMARKDOWN_TEST_LIVE":      "FALSE",
		"WEBPAGETOMARKDOWN_TEST_EXPLAIN":   "FALSE",
		"WEBPAGETOMARKDOWN_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_POST_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["WEBPAGETOMARKDOWN_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["WEBPAGETOMARKDOWN_APIKEY"],
			},
			extra,
		})
		client = sdk.NewWebPageToMarkdownSDK(core.ToMapAny(mergedOpts))
	}

	live := env["WEBPAGETOMARKDOWN_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["WEBPAGETOMARKDOWN_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
