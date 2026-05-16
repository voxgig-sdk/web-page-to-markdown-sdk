<?php
declare(strict_types=1);

// WebPageToMarkdown SDK utility: result_body

class WebPageToMarkdownResultBody
{
    public static function call(WebPageToMarkdownContext $ctx): ?WebPageToMarkdownResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
