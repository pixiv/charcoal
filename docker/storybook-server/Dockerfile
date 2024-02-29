# syntax = docker/dockerfile:1.3
FROM node
RUN apt update && apt install -y gcc
RUN npx playwright install-deps
RUN mkdir /workspace && chown node /workspace
RUN npm install -g http-server concurrently wait-on
USER node
WORKDIR /workspace
COPY --chown=node:node . /workspace
RUN --mount=type=cache,target=/workspace/.yarn/cache/,uid=1000,gid=1000 \
    yarn install --immutable --inline-builds
RUN --mount=type=cache,uid=1000,gid=1000,target=/home/node/.cache/ms-playwright \
    yarn playwright install
RUN yarn build
RUN yarn storybook:build --quiet
CMD http-server storybook-static --port 6006 --silent
