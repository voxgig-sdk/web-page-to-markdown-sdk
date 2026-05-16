<?php
declare(strict_types=1);

// WebPageToMarkdown SDK utility: result_headers

class WebPageToMarkdownResultHeaders
{
    public static function call(WebPageToMarkdownContext $ctx): ?WebPageToMarkdownResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
