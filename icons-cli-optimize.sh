#!/bin/bash

set -euxo pipefail

allowlist=`mktemp`
denylist=`mktemp`

# packages/icons/**/*.svg にあるファイルから、
git status --porcelain packages/icons/svg/**/*.svg | awk '{ print $2 }' | sort > $allowlist

# icons-cli-denylist に書かれたものを除外し
cat icons-cli-denylist | sort > $denylist

# optimize する
comm -23 $allowlist $denylist | xargs -t -P3 -I{} yarn icons-cli svg:optimize --file {}
