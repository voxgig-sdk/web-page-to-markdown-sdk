package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewConvertUrlToMarkdownGetEntityFunc func(client *WebPageToMarkdownSDK, entopts map[string]any) WebPageToMarkdownEntity

var NewConvertUrlToMarkdownPostEntityFunc func(client *WebPageToMarkdownSDK, entopts map[string]any) WebPageToMarkdownEntity

