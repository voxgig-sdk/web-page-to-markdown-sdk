package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewConvertUrlToMarkdownGetEntityFunc func(client *WebPageToMarkdownSDK, entopts map[string]any) WebPageToMarkdownEntity

var NewConvertUrlToMarkdownPostEntityFunc func(client *WebPageToMarkdownSDK, entopts map[string]any) WebPageToMarkdownEntity

