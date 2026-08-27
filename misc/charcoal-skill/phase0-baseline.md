# Charcoal Skill Phase 0 baseline

Recorded 2026-08-27 before the standalone-distribution refactor.

## Inventory

`git ls-files skills/charcoal` reported these 22 tracked files:

```text
SKILL.md
data/index.json
references/css.md
references/figma.md
references/tailwind.md
rules/styling.md
scripts/generate.test.ts
scripts/generate.ts
scripts/lookup/layer.mjs
scripts/lookup/layer.test.mjs
scripts/lookup/normalize.mjs
scripts/lookup/normalize.test.mjs
scripts/lookup/query.mjs
scripts/lookup/search.mjs
scripts/lookup/sources.mjs
scripts/lookup/sources.test.mjs
scripts/lookup/validate.mjs
scripts/resolve.mjs
scripts/resolve.schema.json
scripts/resolve.test.mjs
skill.test.mjs
vitest.config.ts
```

The directory's regular-file byte total was **525,117 bytes**.

## Existing test result

On Node.js `v24.18.0`, the following command passed: 6 test files and 63 tests.

```text
pnpm exec vitest --config skills/charcoal/vitest.config.ts --run
```

## Discovery and path evidence

With the root dev dependency `skills@1.5.23`, this command discovers one
skill named `charcoal`:

```text
pnpm exec skills add <absolute-local-repository> --list
```

The data path is already independent of the caller's CWD: from an external
temporary directory, invoking the **absolute** path to `resolve.mjs` succeeds
and returns the expected JSON. `lookup/query.mjs` derives `data/index.json`
from `import.meta.url`.

The documented command is instead an agent-visible script-path problem. From
an external CWD, `node skills/charcoal/scripts/resolve.mjs ...` fails before
the CLI starts because that relative path is resolved against the consumer
project, not the selected Skill directory. Phase 0 captures this as an
expected failure; Phase 1 will change the execution contract.

Launching a symlink to `resolve.mjs` exits 0 with empty stdout. Its current
main-module comparison compares the unresolved `process.argv[1]` to the real
module path, so the CLI body does not run. Phase 1 will make that comparison
symlink-safe.
