<?php
declare(strict_types=1);

// WebPageToMarkdown SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class WebPageToMarkdownFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new WebPageToMarkdownBaseFeature();
            case "test":
                return new WebPageToMarkdownTestFeature();
            default:
                return new WebPageToMarkdownBaseFeature();
        }
    }
}
