# syntax=docker/dockerfile:1

FROM node:19-alpine

WORKDIR /

ENV NODE_ENV production

# COPY dist package.json server.js vite.config.js ./
COPY . .

RUN npm install

