# charcoal agent skills

Skills that teach coding agents how to adopt `@charcoal-ui` in an application, and how to
choose its tokens once it is in.

### Setting it up

| Skill                               | Use it for                                                      |
| ----------------------------------- | --------------------------------------------------------------- |
| `choosing-charcoal-styling`         | Deciding between CSS variables, Tailwind, and styled-components |
| `setting-up-charcoal-css-variables` | Plain CSS, CSS Modules, vanilla-extract — the default route     |
| `setting-up-charcoal-tailwind`      | Adding the Tailwind preset                                      |
| `setting-up-charcoal-styled`        | Existing styled-components codebases, and migrating off them    |

### Writing the UI

| Skill                      | Use it for                                                      |
| -------------------------- | --------------------------------------------------------------- |
| `choosing-charcoal-tokens` | Which color, text style, spacing, radius or border token to use |
| `implement-figma-design`   | Building a screen from a Figma link, and checking it matches    |

`implement-figma-design` ships two scripts and no dependencies. `bin/fetch-design.mjs`
turns a figma.com link into the design's structure, each node's materials named as
charcoal tokens, the text of every node and the bitmaps it uses — no Dev Mode
seat, only a read-only personal access token. `bin/check-design.mjs` then renders what you
built and names where it departs from that design, which is the only way to catch the
failure the source cannot show you: every component imported, every value written as a
token, and none of them applied.

`choosing-charcoal-tokens` is a short decision guide over the design team's guidelines
under `references/`, which are authored in Japanese and are the source of truth for which
token goes where. The guide only routes to them: it is a table of pointers, and is worth
nothing shipped without the pages it points at.

They exist because charcoal's own documentation is not machine-readable: the docs site is a Storybook SPA that returns no content to a fetcher, npm package pages return 403, and the `pages/` docsify site has been stale since 2023. Agents that try to look charcoal up on the web reconstruct it from package internals — slowly — or invent it.

## Install for Claude Code

As a plugin, from this repository:

```
/plugin marketplace add pixiv/charcoal
/plugin install charcoal@charcoal
```

## Install for Codex, Cursor, and others

[`npx skills`](https://github.com/vercel-labs/skills) reads the same files and installs them for any supported agent.

```bash
# pick agents interactively
npx skills add pixiv/charcoal

# Codex, in this project
npx skills add pixiv/charcoal -a codex

# Codex, for every project on this machine
npx skills add pixiv/charcoal -a codex --global

# just one skill
npx skills add pixiv/charcoal -s choosing-charcoal-styling -a codex
```

Where the files land:

| Agent       | `-a` value    | Project           | `--global`                   |
| ----------- | ------------- | ----------------- | ---------------------------- |
| Claude Code | `claude-code` | `.claude/skills/` | `~/.claude/skills/`          |
| Codex       | `codex`       | `.agents/skills/` | `~/.codex/skills/`           |
| Cursor      | `cursor`      | `.agents/skills/` | `~/.cursor/skills/`          |
| OpenCode    | `opencode`    | `.agents/skills/` | `~/.config/opencode/skills/` |

Other commands: `npx skills list`, `npx skills update`, `npx skills remove`, and `npx skills use pixiv/charcoal` to print the guidance without installing.

## Verify

```bash
npx skills list
```

Then ask the agent something the skills cover — "charcoal のボタンに色が当たらない" should get you `.ch-token-v2`, not a Tailwind setup.

## If a skill does not show up

- **Wrong directory.** Older releases of the CLI wrote to `~/.agents/skills/` while Claude Code reads only `~/.claude/skills/`. Use `-a claude-code`, or move the directory. Codex, Copilot CLI, and Gemini CLI do read `~/.agents/skills/`.
- **Stale CLI.** Skill discovery needs 1.5.16 or newer. Run `npx skills@latest add pixiv/charcoal`.
- **Restart the agent.** Skills are read at startup.

## Layout

```
charcoal/
├── .claude-plugin/
│   └── marketplace.json   # Claude Code plugin entry
└── skills/
    ├── choosing-charcoal-styling/SKILL.md
    ├── setting-up-charcoal-css-variables/SKILL.md
    ├── setting-up-charcoal-tailwind/SKILL.md
    ├── setting-up-charcoal-styled/SKILL.md
    ├── choosing-charcoal-tokens/
    │   ├── SKILL.md
    │   └── references/        # the design team's guidelines
    └── implement-figma-design/
        ├── SKILL.md
        └── bin/                 # fetch-design.mjs, check-design.mjs
```

Both installers read the same `skills/` directory — `npx skills` scans it directly, and also honours the `.claude-plugin/` manifest. There is one copy of every fact.

## Editing

Skills are written against real failures, not from memory. Before changing one, run the scenario it covers against an agent that does _not_ have the skill, record what it actually gets wrong, and write only what closes that gap. `superpowers:writing-skills` describes the loop.
