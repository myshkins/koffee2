# syntax=docker/dockerfile:1

# builder
FROM node:20.11.0 AS builder

# RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

# ARG NPM_TOKEN

WORKDIR /app

RUN chown 1000:1000 /app

USER 1000:1000

COPY --chown=1000:1000 index.html package*.json server.js vite.config.js /app/

COPY --chown=1000:1000 src /app/src/

RUN npm ci && npm run build

# production
FROM node:20.11.0

ENV NODE_ENV production

# COPY --from=builder /usr/bin/dumb-init /usr/bin/dumb-init

WORKDIR /app

RUN chown 1000:1000 /app

USER 1000:1000

RUN mkdir /app/src

COPY --chown=1000:1000 src /app/src/

COPY --chown=1000:1000 --from=builder /app/dist  /app/dist

COPY --chown=1000:1000 index.html package*.json server.js vite.config.js /app/

RUN npm ci

