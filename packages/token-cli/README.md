# `@charcoal-ui/token-cli`

CLI for Fetching Figma Variables and transforming Design Tokens as CSS variables.

## Install

### npm

```
npm i --save-dev @charcoal-ui/token-cli
```

### yarn

```
yarn add -D @charcoal-ui/token-cli
```

## Usage

### Fetch Figma Variables

```
FIGMA_TOKEN=xxxx FIGMA_NODE_ID=xxxx yarn token-cli fetch -o ./path/to/fetched_figma_variables.json
```

| param name   | required | description                                       |
| ------------ | -------- | ------------------------------------------------- |
| -o, --output | :check:  | Output file name (ex: `./out/raw_variables.json`) |

### Transform to Design Token json file

```
yarn token-cli transform --source ./path/to/fetched_figma_variables.json --output ./path/to/design_token.json
```

| param name                  | required | description                                                                                      |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| --source                    | true     | source file path                                                                                 |
| --output, -o                | true     | output file path                                                                                 |
| --mode-name                 | false    | figma variable mode name (ex: `--mode-name "pixiv/dark"`)                                        |
| --variable-collection-names | false    | target variable collection names (ex: `--variable-collection-names Color Space "Border radius"`) |
