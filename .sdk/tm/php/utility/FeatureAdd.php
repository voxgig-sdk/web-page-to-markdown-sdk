<?php
declare(strict_types=1);

// WebPageToMarkdown SDK utility: feature_add

class WebPageToMarkdownFeatureAdd
{
    public static function call(WebPageToMarkdownContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
