FROM node:18-alpine3.15 as builder
WORKDIR /app
COPY . .
RUN npm install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false
RUN npm run build

FROM node:18-alpine3.15
WORKDIR /app
COPY --from=builder /app  .
ENV HOST 0.0.0.0
EXPOSE 3000
CMD [ "yarn", "run", "start" ]