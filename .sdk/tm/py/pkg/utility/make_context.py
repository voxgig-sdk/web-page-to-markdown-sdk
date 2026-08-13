# WebPageToMarkdown SDK utility: make_context

from projectname_sdk.core.context import WebPageToMarkdownContext


def make_context_util(ctxmap, basectx):
    return WebPageToMarkdownContext(ctxmap, basectx)
