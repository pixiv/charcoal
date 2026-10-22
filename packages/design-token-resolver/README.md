# @charcoal-ui/design-token-resolver

`charcoal-token-resolver` converts Figma applied token names into Charcoal CSS
custom properties and, when a CSS property is supplied, Tailwind class
candidates. It does not connect to Figma or require credentials.

## Commands

Resolve one token with an optional collection and CSS property:

```sh
charcoal-token-resolver resolve container/primary/default \
  --collection color \
  --property background-color
```

```json
{
  "schemaVersion": 1,
  "query": {
    "name": "container/primary/default",
    "collection": "color",
    "property": "background-color"
  },
  "status": "resolved",
  "token": { "canonicalPath": "color/container/primary/default" },
  "css": {
    "variable": "--charcoal-color-container-primary-default",
    "reference": "var(--charcoal-color-container-primary-default)"
  },
  "tailwind": {
    "candidates": [
      {
        "property": "background-color",
        "className": "bg-container-primary",
        "themeKey": "colors"
      }
    ]
  },
  "diagnostics": []
}
```

For batch input, use a JSON object file or stdin. `--input` is exclusive with a
positional name, `--collection`, and `--property`.

```sh
charcoal-token-resolver resolve --input variables.json
charcoal-token-resolver resolve --input -
```

```json
{
  "queries": [
    { "name": "container/primary/default", "collection": "color" },
    { "name": "unknown" }
  ]
}
```

Each query object accepts exactly `name` (required string), `collection`
(optional string), and `property` (optional string). A malformed batch is not
partially processed.

The batch output preserves input order. Its results use the single-query result
shape without `schemaVersion`:

```json
{
  "schemaVersion": 1,
  "results": [
    {
      "query": {
        "name": "container/primary/default",
        "collection": "color"
      },
      "status": "resolved",
      "token": { "canonicalPath": "color/container/primary/default" },
      "css": {
        "variable": "--charcoal-color-container-primary-default",
        "reference": "var(--charcoal-color-container-primary-default)"
      },
      "tailwind": { "candidates": [] },
      "diagnostics": []
    },
    {
      "query": { "name": "unknown" },
      "status": "not_found",
      "diagnostics": []
    }
  ]
}
```

## Result contract

Every result has `query`, `status`, and `diagnostics`. `status` is one of:

- `resolved`: includes `token`, `css`, and `tailwind.candidates`.
- `ambiguous`: includes `candidates`, an ordered list of canonical paths.
- `not_found`: has no token, CSS, or Tailwind fields.
- `unsupported_property` or `incompatible_property`: includes the uniquely
  resolved `token`, but intentionally has no CSS or Tailwind fields.

Diagnostics are code-only objects: `{ "code": "case_normalized" }` signals a
unique case-insensitive name match, and
`{ "code": "tailwind_binding_not_found" }` signals that a uniquely resolved
CSS token has no Tailwind binding. In the latter case the result remains
`resolved`, `tailwind.candidates` is empty, and `css` is the fallback.

Without `--property`, the resolver returns the CSS result but does not select a
Tailwind class. It never uses fuzzy matching or resolved values to choose a
token.

## Process contract

Valid single and batch requests always write JSON only to stdout and exit `0`,
including domain results such as `ambiguous` and `not_found`. Argument errors,
file or stdin errors, invalid JSON, and invalid batch schema write an explanation
to stderr, leave stdout empty, and exit `2`. Unexpected internal errors write to
stderr, leave stdout empty, and exit `1`.
