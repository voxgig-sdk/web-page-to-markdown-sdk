package entity

import (
	"github.com/voxgig-sdk/web-page-to-markdown-sdk/go/core"

	vs "github.com/voxgig-sdk/web-page-to-markdown-sdk/go/utility/struct"
)

type ConvertUrlToMarkdownGetEntity struct {
	name    string
	client  *core.WebPageToMarkdownSDK
	utility *core.Utility
	entopts map[string]any
	data    map[string]any
	match   map[string]any
	entctx  *core.Context
}

func NewConvertUrlToMarkdownGetEntity(client *core.WebPageToMarkdownSDK, entopts map[string]any) *ConvertUrlToMarkdownGetEntity {
	if entopts == nil {
		entopts = map[string]any{}
	}
	if _, ok := entopts["active"]; !ok {
		entopts["active"] = true
	} else if entopts["active"] == false {
		// keep false
	} else {
		entopts["active"] = true
	}

	e := &ConvertUrlToMarkdownGetEntity{
		name:    "convert_url_to_markdown_get",
		client:  client,
		utility: client.GetUtility(),
		entopts: entopts,
		data:    map[string]any{},
		match:   map[string]any{},
	}

	e.entctx = e.utility.MakeContext(map[string]any{
		"entity":  e,
		"entopts": entopts,
	}, client.GetRootCtx())

	e.utility.FeatureHook(e.entctx, "PostConstructEntity")

	return e
}

func (e *ConvertUrlToMarkdownGetEntity) GetName() string { return e.name }

func (e *ConvertUrlToMarkdownGetEntity) Make() core.Entity {
	opts := map[string]any{}
	for k, v := range e.entopts {
		opts[k] = v
	}
	return NewConvertUrlToMarkdownGetEntity(e.client, opts)
}

func (e *ConvertUrlToMarkdownGetEntity) Data(args ...any) any {
	if len(args) > 0 && args[0] != nil {
		e.data = core.ToMapAny(vs.Clone(args[0]))
		if e.data == nil {
			e.data = map[string]any{}
		}
		e.utility.FeatureHook(e.entctx, "SetData")
	}

	e.utility.FeatureHook(e.entctx, "GetData")
	out := vs.Clone(e.data)
	return out
}

func (e *ConvertUrlToMarkdownGetEntity) Match(args ...any) any {
	if len(args) > 0 && args[0] != nil {
		e.match = core.ToMapAny(vs.Clone(args[0]))
		if e.match == nil {
			e.match = map[string]any{}
		}
		e.utility.FeatureHook(e.entctx, "SetMatch")
	}

	e.utility.FeatureHook(e.entctx, "GetMatch")
	out := vs.Clone(e.match)
	return out
}

// DataTyped is the statically-typed accessor for this entity's data. With no
// argument it returns the current data as an ConvertUrlToMarkdownGet; with an argument it
// sets the data and returns the stored value. It delegates to the untyped Data
// (identical runtime) and converts at the typed boundary.
func (e *ConvertUrlToMarkdownGetEntity) DataTyped(data ...ConvertUrlToMarkdownGet) ConvertUrlToMarkdownGet {
	if len(data) > 0 {
		return typedFrom[ConvertUrlToMarkdownGet](e.Data(asMap(data[0])))
	}
	return typedFrom[ConvertUrlToMarkdownGet](e.Data())
}

// MatchTyped mirrors DataTyped for the entity's match filter. The match is a
// partial of the entity, so it round-trips through ConvertUrlToMarkdownGet (all fields
// optional at the wire level).
func (e *ConvertUrlToMarkdownGetEntity) MatchTyped(match ...ConvertUrlToMarkdownGet) ConvertUrlToMarkdownGet {
	if len(match) > 0 {
		return typedFrom[ConvertUrlToMarkdownGet](e.Match(asMap(match[0])))
	}
	return typedFrom[ConvertUrlToMarkdownGet](e.Match())
}


func (e *ConvertUrlToMarkdownGetEntity) Load(reqmatch map[string]any, ctrl map[string]any) (any, error) {
	utility := e.utility
	ctx := utility.MakeContext(map[string]any{
		"opname":   "load",
		"ctrl":     ctrl,
		"match":    e.match,
		"data":     e.data,
		"reqmatch": reqmatch,
	}, e.entctx)

	return e.runOp(ctx, func() {
		if ctx.Result != nil {
			if ctx.Result.Resmatch != nil {
				e.match = ctx.Result.Resmatch
			}
			if ctx.Result.Resdata != nil {
				e.data = core.ToMapAny(vs.Clone(ctx.Result.Resdata))
				if e.data == nil {
					e.data = map[string]any{}
				}
			}
		}
	})
}

// LoadTyped is the statically-typed variant of Load: it takes an
// ConvertUrlToMarkdownGetLoadMatch and returns an ConvertUrlToMarkdownGet. It delegates to the untyped
// Load (identical runtime) and converts at the typed boundary.
func (e *ConvertUrlToMarkdownGetEntity) LoadTyped(reqmatch ConvertUrlToMarkdownGetLoadMatch, ctrl map[string]any) (ConvertUrlToMarkdownGet, error) {
	res, err := e.Load(asMap(reqmatch), ctrl)
	if err != nil {
		return ConvertUrlToMarkdownGet{}, err
	}
	return typedFrom[ConvertUrlToMarkdownGet](res), nil
}



func (e *ConvertUrlToMarkdownGetEntity) List(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("list", e.name)
}


func (e *ConvertUrlToMarkdownGetEntity) Create(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("create", e.name)
}


func (e *ConvertUrlToMarkdownGetEntity) Update(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("update", e.name)
}


func (e *ConvertUrlToMarkdownGetEntity) Remove(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("remove", e.name)
}


func (e *ConvertUrlToMarkdownGetEntity) runOp(ctx *core.Context, postDone func()) (any, error) {
	utility := e.utility

	utility.FeatureHook(ctx, "PrePoint")
	point, err := utility.MakePoint(ctx)
	ctx.Out["point"] = point
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreSpec")
	spec, err := utility.MakeSpec(ctx)
	ctx.Out["spec"] = spec
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreRequest")
	resp, err := utility.MakeRequest(ctx)
	ctx.Out["request"] = resp
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreResponse")
	resp2, err := utility.MakeResponse(ctx)
	ctx.Out["response"] = resp2
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreResult")
	result, err := utility.MakeResult(ctx)
	ctx.Out["result"] = result
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreDone")
	postDone()

	return utility.Done(ctx)
}
