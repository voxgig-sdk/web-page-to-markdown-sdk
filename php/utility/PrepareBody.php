<?php
declare(strict_types=1);

// WebPageToMarkdown SDK utility: prepare_body

class WebPageToMarkdownPrepareBody
{
    public static function call(WebPageToMarkdownContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
