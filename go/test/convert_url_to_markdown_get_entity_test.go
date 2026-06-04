package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/web-page-to-markdown-sdk/go"
	"github.com/voxgig-sdk/web-page-to-markdown-sdk/go/core"

	vs "github.com/voxgig-sdk/web-page-to-markdown-sdk/go/utility/struct"
)

func TestConvertUrlToMarkdownGetEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ConvertUrlToMarkdownGet(nil)
		if ent == nil {
			t.Fatal("expected non-nil ConvertUrlToMarkdownGetEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := convert_url_to_markdown_getBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "convert_url_to_markdown_get." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_GET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		convertUrlToMarkdownGetRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.convert_url_to_markdown_get", setup.data)))
		var convertUrlToMarkdownGetRef01Data map[string]any
		if len(convertUrlToMarkdownGetRef01DataRaw) > 0 {
			convertUrlToMarkdownGetRef01Data = core.ToMapAny(convertUrlToMarkdownGetRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = convertUrlToMarkdownGetRef01Data

		// LOAD
		convertUrlToMarkdownGetRef01Ent := client.ConvertUrlToMarkdownGet(nil)
		convertUrlToMarkdownGetRef01MatchDt0 := map[string]any{}
		convertUrlToMarkdownGetRef01DataDt0Loaded, err := convertUrlToMarkdownGetRef01Ent.Load(convertUrlToMarkdownGetRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if convertUrlToMarkdownGetRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func convert_url_to_markdown_getBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "convert_url_to_markdown_get", "ConvertUrlToMarkdownGetTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read convert_url_to_markdown_get test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse convert_url_to_markdown_get test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"convert_url_to_markdown_get01", "convert_url_to_markdown_get02", "convert_url_to_markdown_get03"},
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
	entidEnvRaw := os.Getenv("WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_GET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_GET_ENTID": idmap,
		"WEBPAGETOMARKDOWN_TEST_LIVE":      "FALSE",
		"WEBPAGETOMARKDOWN_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["WEBPAGETOMARKDOWN_TEST_CONVERT_URL_TO_MARKDOWN_GET_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["WEBPAGETOMARKDOWN_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
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
