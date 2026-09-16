<?php
declare(strict_types=1);

// WebPageToMarkdown SDK configuration

class WebPageToMarkdownConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "WebPageToMarkdown",
                "slug" => "web-page-to-markdown",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://urltomarkdown.herokuapp.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "convert_url_to_markdown_get" => [],
                    "convert_url_to_markdown_post" => [],
                ],
            ],
            "entity" => [
        'convert_url_to_markdown_get' => [
          'fields' => [],
          'name' => 'convert_url_to_markdown_get',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'clean',
                        'orig' => 'clean',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'link',
                        'orig' => 'link',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'title',
                        'orig' => 'title',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => 'https://www.mozilla.org/en-GB/firefox/',
                        'kind' => 'query',
                        'name' => 'url',
                        'orig' => 'url',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'segments' => [],
                  'select' => [
                    'exist' => [
                      'clean',
                      'link',
                      'title',
                      'url',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'convert_url_to_markdown_post' => [
          'fields' => [],
          'name' => 'convert_url_to_markdown_post',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'clean',
                        'orig' => 'clean',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'link',
                        'orig' => 'link',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'title',
                        'orig' => 'title',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/',
                  'segments' => [],
                  'select' => [
                    'exist' => [
                      'clean',
                      'link',
                      'title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return WebPageToMarkdownFeatures::make_feature($name);
    }
}
