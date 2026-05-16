<?php
declare(strict_types=1);

// WebPageToMarkdown SDK configuration

class WebPageToMarkdownConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "WebPageToMarkdown",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://urltomarkdown.herokuapp.com",
                "auth" => [
                    "prefix" => "Bearer",
                ],
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
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'link',
                        'orig' => 'link',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'title',
                        'orig' => 'title',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'example' => 'https://www.mozilla.org/en-GB/firefox/',
                        'kind' => 'query',
                        'name' => 'url',
                        'orig' => 'url',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/',
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
                  'active' => true,
                  'parts' => [],
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
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
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'link',
                        'orig' => 'link',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'title',
                        'orig' => 'title',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/',
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
                  'active' => true,
                  'parts' => [],
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'create',
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
