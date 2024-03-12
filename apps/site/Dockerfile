FROM node:20-slim as build

COPY . /app
WORKDIR /app
RUN corepack enable

# RUN npm install -g pnpm
# RUN pnpm install --frozen-lockfile
# RUN pnpm build

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod

FROM caddy:2-alpine

ENV PORT=7420
COPY --from=build /app/dist /app

WORKDIR /app

EXPOSE $PORT

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD caddy status || exit 1

CMD caddy file-server --listen :$PORT