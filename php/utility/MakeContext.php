<?php
declare(strict_types=1);

// WebPageToMarkdown SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WebPageToMarkdownMakeContext
{
    public static function call(array $ctxmap, ?WebPageToMarkdownContext $basectx): WebPageToMarkdownContext
    {
        return new WebPageToMarkdownContext($ctxmap, $basectx);
    }
}
