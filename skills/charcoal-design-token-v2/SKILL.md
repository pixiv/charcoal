---
name: charcoal-design-token-v2
description: Resolve Charcoal Design Token 2.0 applied variables from Figma MCP into @charcoal-ui/theme CSS custom properties or @charcoal-ui/tailwind-config utility classes when implementing Charcoal-based web UI. Do not use for v1 tokens or primitive-token authoring.
license: Apache-2.0
compatibility: Requires Node.js 22+, a runnable charcoal-token-resolver CLI, and Figma variable definition access (MCP or equivalent).
---

# Charcoal Design Token 2.0

## Use this skill

Use this skill only when implementing Charcoal Design Token 2.0 in web UI.
Do not use it for v1 tokens, primitive-token authoring, updating Figma, or
guessing tokens.

Stop if any precondition is unmet:

- Node.js 22 or newer is available.
- The `charcoal-token-resolver` CLI can be run.
- Figma variable definitions are accessible through MCP or an equivalent
  operation.

If the resolver cannot run, report the blocker and stop. Never guess a token.

## Workflow

1. Confirm that the target is a Charcoal Design Token 2.0 web implementation.
2. Confirm Node.js 22+, a runnable resolver CLI, and Figma variable-definition
   access. Stop if any check fails.
3. Before applying results, inspect the target file/component's existing styling
   approach, verify a theme import such as
   `@charcoal-ui/theme/css/v2/light.css` or
   `@charcoal-ui/theme/css/v2/dark.css`, and verify `.ch-token-v2` on `html`
   or an ancestor. If considering Tailwind classes, verify Tailwind CSS v3 and
   that `unstableTokenV2: true` in `@charcoal-ui/tailwind-config` actually
   generates the needed classes.
4. Get variable definitions and design context through Figma MCP. Prefer
   `get_variable_defs` and `get_design_context`; use equivalent operations when
   those tool names are unavailable.
5. Record every usage site as `node/layer + variable name + collection? + CSS
   property + component state?`. Prefer applied tokens over primitive aliases.
   Determine the destination CSS property from the design context.
6. Deduplicate queries by `(name, collection?, property?)`, never by variable
   name alone, and send the batch JSON to the resolver CLI.
7. Read stdout as JSON and require `schemaVersion === 1`. An unknown schema or
   exit code `1` or `2` is not an implementation source: report it and stop.
8. Apply the status decision table below and map each result back to its
   original usage sites.
9. Choose a unique Tailwind class or the existing CSS notation from
   `css.reference`, according to the notation rules below.
10. Add interaction variants only when the component state is explicit.
11. Check typography density only when handling typography or when density is
    specified by Figma or the project.
12. Run lint, typecheck, tests, and any needed visual checks.

Read [resolver-cli.md](references/resolver-cli.md) when executing the CLI or
when you need its JSON contract, statuses, or schema rules. Read
[figma-variable-resolution.md](references/figma-variable-resolution.md) when
interpreting applied versus primitive variables, property context, states, or
composites.

## Notation selection

Use a Tailwind class only when all of these are true:

1. Follow the user's explicit notation instruction when one was given:
   explicit classes passes; explicit CSS variables or other non-class notation
   fails. With no explicit notation instruction, the target file/component
   must already use utility classes.
2. Tailwind CSS v3 is in use and token v2 is actually enabled
   (`unstableTokenV2: true` actually generates the classes).
3. The resolver candidate is unique for that usage site.

Otherwise use the existing CSS approach (CSS Modules, styled-components, or a
plain stylesheet) with `css.reference`. A `resolved` result with empty
`tailwind.candidates` (`tailwind_binding_not_found`) also falls back to the CSS
variable.

## Status decisions

Domain statuses are `resolved`, `ambiguous`, `not_found`,
`unsupported_property`, and `incompatible_property`. The
`case_normalized` and `tailwind_binding_not_found` codes are diagnostics on a
uniquely `resolved` result, not status values.

| Result | Action |
| --- | --- |
| `resolved` + 1 candidate | Use the class if notation rules pass; otherwise use `css.reference`. |
| `resolved` + 0 or multiple candidates | Use the existing CSS notation with `css.reference`. |
| `ambiguous` | Re-run with collection and/or property; if still unresolved, leave unapplied. |
| `not_found` | Do not guess; report it as unapplied. |
| `unsupported_property` | Do not remove the property to work around it; leave unapplied. |
| `incompatible_property` | Leave unapplied and check for a token/property mix-up. |
| Unknown schema or exit `1`/`2` | Do not use it as an implementation source; report the error. |

For a `resolved` result with `case_normalized`, use it because it resolved
uniquely and report the normalization if useful. For a `resolved` result with
`tailwind_binding_not_found`, use the CSS variable because its candidate list
is empty.

`unsupported_property` and `incompatible_property` intentionally have no CSS
or Tailwind fields. Do not re-query without the property to obtain CSS.
Treat primitive-only payloads as unsupported; do not infer applied tokens from
values. Do not expand composite names such as `paragraph/regular` into atomic
tokens. Only explicitly listed atomic variables with CSS properties are
individual queries.

Never propose v1 tokens. Do not auto-add variants because a token name ends in
`hover` or `press`. For explicit component state only, map `hover` to
`hover:` and `press` to `active:`; no other mappings are defined in v1 of this
skill.
