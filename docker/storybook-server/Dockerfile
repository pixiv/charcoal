FROM node
RUN apt update && apt install -y gcc
RUN npx playwright install-deps
RUN mkdir /workspace && chown node /workspace
RUN npm install -g http-server concurrently wait-on
USER node
RUN npx playwright install
WORKDIR /workspace
COPY --chown=node:node . /workspace
RUN yarn install --immutable --inline-builds
RUN yarn playwright install
RUN yarn build
RUN yarn storybook:build --quiet
CMD http-server storybook-static --port 6006 --silent
