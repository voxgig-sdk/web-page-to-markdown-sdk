<?php
declare(strict_types=1);

// WebPageToMarkdown SDK exists test

require_once __DIR__ . '/../webpagetomarkdown_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = WebPageToMarkdownSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
