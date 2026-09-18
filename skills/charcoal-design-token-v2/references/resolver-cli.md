# Resolver CLI

Read this reference when executing `charcoal-token-resolver`, constructing
batch input, or interpreting its schema and statuses. The resolver is the
source of truth for conversion; do not reproduce its token lists or
conversion logic.

## Invocation

The package is `@charcoal-ui/design-token-resolver` and its binary is
`charcoal-token-resolver`. Supported commands are:

```sh
charcoal-token-resolver resolve <name>
charcoal-token-resolver resolve --input <file>
charcoal-token-resolver resolve --input -
```

Use this execution priority, without automatically downloading unpublished
packages:

1. Run the project's dependency with its package-manager exec command, for
   example `pnpm exec charcoal-token-resolver`.
2. Use this monorepo's built binary at
   `packages/design-token-resolver/dist/cli.js`, or that package's
   `pnpm exec`.
3. Use `charcoal-token-resolver` already on `PATH`.

Use `pnpm dlx` or `npx` only when the user explicitly requests it. The
package's SemVer is Charcoal's overall version (currently 6.x); it is
independent of JSON `schemaVersion`, which must be `1`.

`--input` is exclusive with a positional name, `--collection`, and
`--property`. A single query requires `name`; `collection` and `property` are
optional. The resolver does not reconstruct collection or property context
from a name alone.

## JSON contract

A valid single response has `schemaVersion: 1`, the original `query`, a
domain `status`, and `diagnostics`. A batch request is an envelope:

```json
{
  "queries": [
    {
      "name": "container/primary/default",
      "collection": "color",
      "property": "background-color"
    }
  ]
}
```

Batch output has `schemaVersion: 1` and `results`. Results preserve input
order and each result has the single-result shape without `schemaVersion`.
Each query object contains exactly `name` (required string), and optional
string `collection` and `property`. A malformed batch is never partially
processed: invalid JSON or an invalid batch schema produces no partial
results.

For example, a single resolution is:

```sh
charcoal-token-resolver resolve container/primary/default \
  --collection color \
  --property background-color
```

Its relevant shape is:

```json
{
  "schemaVersion": 1,
  "query": {
    "name": "container/primary/default",
    "collection": "color",
    "property": "background-color"
  },
  "status": "resolved",
  "token": {
    "canonicalPath": "color/container/primary/default"
  },
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

Without `--property`, CSS is returned but no Tailwind class is selected.

## Statuses and diagnostics

Domain statuses are `resolved`, `ambiguous`, `not_found`,
`unsupported_property`, and `incompatible_property`.

- `resolved` includes `token`, `css`, and `tailwind.candidates`.
- `ambiguous` includes `candidates`, an ordered list of canonical paths.
- `not_found` has no `token`, `css`, or `tailwind`.
- `unsupported_property` and `incompatible_property` include the unique
  `token` only; they intentionally have no CSS or Tailwind fields.

Diagnostics are code-only objects. `case_normalized` means a unique
case-insensitive name match. `tailwind_binding_not_found` means the token
resolved uniquely but has no Tailwind binding; the result remains `resolved`
with an empty candidate list and CSS as the fallback.

## Process behavior

Valid single and batch requests write JSON only to stdout and exit `0`,
including domain results such as `ambiguous` and `not_found`. Argument errors,
file or stdin errors, invalid JSON, and invalid batch schemas write an
explanation to stderr, leave stdout empty, and exit `2`; malformed batches
therefore produce no partial results. Unexpected internal errors write to
stderr, leave stdout empty, and exit `1`.

Require `schemaVersion === 1` and the expected response shape before using
any result. Missing or unknown schema is a stop condition. In particular,
`unsupported_property` and `incompatible_property` must not be re-queried
without `property` to obtain CSS.
