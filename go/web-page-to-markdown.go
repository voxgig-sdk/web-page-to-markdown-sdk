package voxgigwebpagetomarkdownsdk

import (
	"github.com/voxgig-sdk/web-page-to-markdown-sdk/go/core"
	"github.com/voxgig-sdk/web-page-to-markdown-sdk/go/entity"
	"github.com/voxgig-sdk/web-page-to-markdown-sdk/go/feature"
	_ "github.com/voxgig-sdk/web-page-to-markdown-sdk/go/utility"
)

// Type aliases preserve external API.
type WebPageToMarkdownSDK = core.WebPageToMarkdownSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type WebPageToMarkdownEntity = core.WebPageToMarkdownEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type WebPageToMarkdownError = core.WebPageToMarkdownError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewConvertUrlToMarkdownGetEntityFunc = func(client *core.WebPageToMarkdownSDK, entopts map[string]any) core.WebPageToMarkdownEntity {
		return entity.NewConvertUrlToMarkdownGetEntity(client, entopts)
	}
	core.NewConvertUrlToMarkdownPostEntityFunc = func(client *core.WebPageToMarkdownSDK, entopts map[string]any) core.WebPageToMarkdownEntity {
		return entity.NewConvertUrlToMarkdownPostEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewWebPageToMarkdownSDK = core.NewWebPageToMarkdownSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
