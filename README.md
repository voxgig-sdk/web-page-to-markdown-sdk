# WebPageToMarkdown SDK

Download a web page and convert it to clean Markdown

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Web Page to Markdown

[Web Page to Markdown](https://urltomarkdown.com) is a small web service that fetches a URL and returns the page rendered as Markdown. It is an open-source project maintained by [macsplit](https://github.com/macsplit) (repository: [macsplit/urltomarkdown](https://github.com/macsplit/urltomarkdown)) and was inspired by the original Heck Yeah Markdown converter.

What you get from the API:

- A single conversion endpoint at `/` that accepts a URL (via `GET` query string or `POST` body) and responds with Markdown text
- Optional query parameters: `title` (inline H1), `links` (preserve links), and `clean` (apply filtering, default true)
- An `X-Title` response header containing the URL-encoded page title
- POST form bodies may include `url` and/or pre-fetched `html` to convert

The public instance is hosted on Heroku at `https://urltomarkdown.herokuapp.com` with CORS enabled. The hosted service is community-run and may return errors or be unavailable; for reliable use, self-host from the GitHub repository.

## Try it

**TypeScript**
```bash
npm install web-page-to-markdown
```

**Python**
```bash
pip install web-page-to-markdown-sdk
```

**PHP**
```bash
composer require voxgig/web-page-to-markdown-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/web-page-to-markdown-sdk/go
```

**Ruby**
```bash
gem install web-page-to-markdown-sdk
```

**Lua**
```bash
luarocks install web-page-to-markdown-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { WebPageToMarkdownSDK } from 'web-page-to-markdown'

const client = new WebPageToMarkdownSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o web-page-to-markdown-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "web-page-to-markdown": {
      "command": "/abs/path/to/web-page-to-markdown-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **ConvertUrlToMarkdownGet** | Convert a remote web page to Markdown via a GET request to `/?url=<encoded-url>`, with optional `title`, `links`, and `clean` query flags. | `/` |
| **ConvertUrlToMarkdownPost** | Convert a page to Markdown via a POST to `/` with a form body containing `url` and/or pre-fetched `html`. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from webpagetomarkdown_sdk import WebPageToMarkdownSDK

client = WebPageToMarkdownSDK({})


# Load a specific converturltomarkdownget
converturltomarkdownget, err = client.ConvertUrlToMarkdownGet(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'webpagetomarkdown_sdk.php';

$client = new WebPageToMarkdownSDK([]);


// Load a specific converturltomarkdownget
[$converturltomarkdownget, $err] = $client->ConvertUrlToMarkdownGet(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/web-page-to-markdown-sdk/go"

client := sdk.NewWebPageToMarkdownSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "WebPageToMarkdown_sdk"

client = WebPageToMarkdownSDK.new({})


# Load a specific converturltomarkdownget
converturltomarkdownget, err = client.ConvertUrlToMarkdownGet(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("web-page-to-markdown_sdk")

local client = sdk.new({})


-- Load a specific converturltomarkdownget
local converturltomarkdownget, err = client:ConvertUrlToMarkdownGet(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = WebPageToMarkdownSDK.test()
const result = await client.ConvertUrlToMarkdownGet().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = WebPageToMarkdownSDK.test(None, None)
result, err = client.ConvertUrlToMarkdownGet(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = WebPageToMarkdownSDK::test(null, null);
[$result, $err] = $client->ConvertUrlToMarkdownGet(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.ConvertUrlToMarkdownGet(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = WebPageToMarkdownSDK.test(nil, nil)
result, err = client.ConvertUrlToMarkdownGet(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:ConvertUrlToMarkdownGet(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Web Page to Markdown

- Upstream: [https://urltomarkdown.com](https://urltomarkdown.com)
- API docs: [https://github.com/macsplit/urltomarkdown](https://github.com/macsplit/urltomarkdown)

- Source released under the MIT License
- Maintained by [macsplit](https://github.com/macsplit)
- Free to self-host; the public Heroku instance is best-effort and has been observed to be offline

---

Generated from the Web Page to Markdown OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
