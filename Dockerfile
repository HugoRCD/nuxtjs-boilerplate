FROM node:18-alpine as nuxt-app

RUN npm install -g pnpm

RUN apk add --update --no-cache python3 build-base gcc && ln -sf /usr/bin/python3 /usr/bin/python

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

COPY . .

RUN pnpm install --shamefully-hoist
RUN pnpm build

ENTRYPOINT ["pnpm", "nuxt", "start"]
EXPOSE 8080