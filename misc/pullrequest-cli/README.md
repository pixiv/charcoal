# pullrequest-cli

CLI for creating pull request in CI.

## Usage

```
GITHUB_ACCESS_TOKEN=xxxx GITHUB_REPO_OWNER=pixiv GITHUB_REPO_NAME=charcoal GITHUB_DEFAULT_BRANCH=main TARGET_DIR=path/to/target/dir pnpm pullrequest-cli -c category_name -t "Pull request created by pullrequest-cli"
```

### Environment values

| param name   | required | description                                       |
| ------------ | -------- | ------------------------------------------------- |
| -o, --output | :check:  | Output file name (ex: `./out/raw_variables.json`) |

### Parameters

| param name     | required | description                                                                                                                       |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| -c, --category | :check:  | branch name and pull request title prefix (pull request title ex: `[category] title`, branch name ex: `category/update/20240101`) |
| -t, --title    | :check:  | pull request title (ex: `[category] title`)                                                                                       |
