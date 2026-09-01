# Figma Variable Resolution

Read this reference when translating Figma variable definitions and design
context into resolver queries. This skill resolves applied variables; it does
not author or update Figma variables.

## Applied and primitive variables

Prefer applied tokens: variables attached to a layer or node with a semantic
role and destination CSS property. A primitive-only payload is unsupported.
Never infer an applied token by matching a resolved color, number, or other
value.

Figma MCP names may omit the collection. For example,
`container/primary/default` may need collection `color` to identify
`color/container/primary/default`. Do not assume the omitted collection when
the name is ambiguous. Short names such as `s` require a property and/or
collection; never auto-pick one.

The following are observed name forms, not a token list or an authorization
to guess:

- `container/primary/default`
- `text/default`
- `component/30`
- `font-size/Paragraph`
- `font-weight/regular`
- `s`
- `paragraph/regular`
- `light/blue/50` (primitive; do not treat as applied)

## Property context

Keep each usage-site identity as:

`node/layer + variable name + collection? + CSS property + component state?`

The destination CSS property comes from design context, not from the variable
value alone. Practical examples include fills mapping to `background-color` or
`color`, strokes to a border color property, corner radius to `border-radius`,
spacing to the relevant margin/padding/gap property, and typography atomics to
their corresponding font properties. Preserve the exact property needed by the
usage site when querying.

Do not expand a composite name such as `paragraph/regular` into atomic tokens.
Only atomic variables that the MCP payload explicitly lists together with CSS
properties become normal individual queries.

## Query identity and matching

Deduplicate only by `(name, collection?, property?)`, then map each resolver
result back to every original usage site using that key. Deduplicating by
variable name alone can incorrectly reuse a result across properties or
collections.

A unique complete match that differs only in case is allowed and is reported
as `case_normalized`. Non-unique case folding is still ambiguous; it is not a
license to guess. When a name is ambiguous, re-run with collection and/or
property. If it remains unresolved, leave the usage unapplied.

## Interaction state

Add a variant only when component state is explicit in the Figma design
context or implementation requirement. Map explicit `hover` to `hover:` and
explicit `press` to `active:`. No other state mappings are defined in v1 of
this skill.

The suffixes `hover` and `press` in a token name are not interaction-state
signals. Do not auto-add variants from those suffixes.

Design Token v1 tokens are out of scope and must never be proposed.
