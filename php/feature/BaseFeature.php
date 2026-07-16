<?php
declare(strict_types=1);

// WebPageToMarkdown SDK base feature

class WebPageToMarkdownBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WebPageToMarkdownContext $ctx, array $options): void {}
    public function PostConstruct(WebPageToMarkdownContext $ctx): void {}
    public function PostConstructEntity(WebPageToMarkdownContext $ctx): void {}
    public function SetData(WebPageToMarkdownContext $ctx): void {}
    public function GetData(WebPageToMarkdownContext $ctx): void {}
    public function GetMatch(WebPageToMarkdownContext $ctx): void {}
    public function SetMatch(WebPageToMarkdownContext $ctx): void {}
    public function PrePoint(WebPageToMarkdownContext $ctx): void {}
    public function PreSpec(WebPageToMarkdownContext $ctx): void {}
    public function PreRequest(WebPageToMarkdownContext $ctx): void {}
    public function PreResponse(WebPageToMarkdownContext $ctx): void {}
    public function PreResult(WebPageToMarkdownContext $ctx): void {}
    public function PreDone(WebPageToMarkdownContext $ctx): void {}
    public function PreUnexpected(WebPageToMarkdownContext $ctx): void {}
}
