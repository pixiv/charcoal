# charcoal plugin

Claude Code plugin that ships agent skills for `@charcoal-ui`. The same `skills/` directory is also readable by [`npx skills`](https://github.com/vercel-labs/skills), so Codex, Cursor, and other agents install from here too.

## Install

### Claude Code

```
/plugin marketplace add pixiv/charcoal
/plugin install charcoal@charcoal
```

Non-interactive:

```bash
claude plugin marketplace add pixiv/charcoal
claude plugin install charcoal@charcoal
```

### Codex, Cursor, and others

```bash
# pick agents interactively
npx skills add pixiv/charcoal

# Codex, in this project
npx skills add pixiv/charcoal -a codex

# Codex, for every project on this machine
npx skills add pixiv/charcoal -a codex --global

# one skill only
npx skills add pixiv/charcoal -s <skill-name> -a codex
```

`-a` is repeated for multiple agents (`-a codex -a cursor`); comma-separated values are rejected.

| Agent       | `-a` value    | Project           | `--global`                   |
| ----------- | ------------- | ----------------- | ---------------------------- |
| Claude Code | `claude-code` | `.claude/skills/` | `~/.claude/skills/`          |
| Codex       | `codex`       | `.agents/skills/` | `~/.codex/skills/`           |
| Cursor      | `cursor`      | `.agents/skills/` | `~/.cursor/skills/`          |
| OpenCode    | `opencode`    | `.agents/skills/` | `~/.config/opencode/skills/` |

Other commands: `npx skills list`, `npx skills update`, `npx skills remove`.

### Try a branch before it is merged

```bash
git clone --branch <branch> https://github.com/pixiv/charcoal /tmp/charcoal
npx skills add /tmp/charcoal -a codex
```

For Claude Code, `/plugin marketplace add /tmp/charcoal` then `/plugin install charcoal@charcoal`.

## Layout

```
charcoal/
├── .claude-plugin/
│   └── marketplace.json          # marketplace "charcoal"; plugins[].source = ./plugins/<name>
└── plugins/
    └── charcoal/
        ├── .claude-plugin/
        │   └── plugin.json       # plugin "charcoal"
        ├── README.md
        └── skills/
            └── <skill-name>/
                └── SKILL.md      # auto-discovered; no listing in plugin.json
```

Both installers read the same files. Claude Code copies `plugins/charcoal/` into its plugin cache. `npx skills` follows `plugins[].source` in `marketplace.json` down to `plugins/charcoal/skills/`.

## Add a skill

1. Create `plugins/charcoal/skills/<skill-name>/SKILL.md` with `name` and `description` in the frontmatter. `name` must match the directory name.
2. Run the checks below.

## Versioning

The plugin version is the `@charcoal-ui` version. Do not edit `version` in `plugin.json` by hand.

- The `Publish to npmjs` workflow runs `lerna version`, then `misc/sync-plugin-version.mts`, which copies the new version into every `plugins/*/.claude-plugin/plugin.json` and commits it right after the `chore: publish` commit.
- `marketplace.json` entries carry no `version`; `plugin.json` is the single source of truth. Claude Code only offers `/plugin update` when that version changes, so a skill fix reaches installed users at the next charcoal release (beta releases included). `npx skills update` copies the files directly and does not wait.

## Add a plugin

1. Create `plugins/<plugin-name>/.claude-plugin/plugin.json` with `version` set to the current `lerna.json` version.
2. Append an entry to `plugins[]` in `.claude-plugin/marketplace.json` with `"source": "./plugins/<plugin-name>"` and no `version`.

## Checks

The `plugin` workflow runs these on every change under `plugins/` or `.claude-plugin/`.

```bash
node misc/sync-plugin-version.mts --check
claude plugin validate --strict .
claude plugin validate --strict plugins/charcoal
```

To confirm `npx skills` discovery from a local checkout:

```bash
cd "$(mktemp -d)" && npx skills add /path/to/charcoal -a codex -y && npx skills list
```

## If a skill does not show up

- **Wrong directory.** Older `skills` CLI releases wrote to `~/.agents/skills/`, which Claude Code does not read. Use `-a claude-code`, or install the plugin instead.
- **Stale CLI.** Manifest-aware discovery needs `skills` 1.5.16 or newer. Run `npx skills@latest add pixiv/charcoal`.
- **Restart the agent.** Skills are read at startup.
