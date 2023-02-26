#!/bin/bash

set -euxo pipefail

# project root で実行
cd $(dirname $0)/..

sed -i.bak -e "s/nodeLinker: pnp/nodeLinker: node-modules/g" .yarnrc.yml
