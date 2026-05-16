package core

type WebPageToMarkdownError struct {
	IsWebPageToMarkdownError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWebPageToMarkdownError(code string, msg string, ctx *Context) *WebPageToMarkdownError {
	return &WebPageToMarkdownError{
		IsWebPageToMarkdownError: true,
		Sdk:              "WebPageToMarkdown",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WebPageToMarkdownError) Error() string {
	return e.Msg
}
