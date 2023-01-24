FROM node:18-alpine as builder

ARG EnvironmentVariable

WORKDIR /app

RUN npm install -g pnpm

RUN apk add --update --no-cache python3 build-base gcc && ln -sf /usr/bin/python3 /usr/bin/python

COPY . .

RUN pnpm install
RUN pnpm build

FROM node:18-alpine as nuxt-app

WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app .

CMD ["pnpm", "start"]

EXPOSE 8080