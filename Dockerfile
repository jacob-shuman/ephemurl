ARG APP=site

FROM node:20-slim as build

ARG APP

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_OPTIONS=--max_old_space_size=4096

RUN corepack enable
COPY . /monorepo
WORKDIR /monorepo

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --filter "./apps/${APP}"
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --filter ./shared/*
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm ${APP} build

FROM node:20-alpine

ENV HOST=0.0.0.0
ENV PORT=7420

ARG APP

COPY --from=build /monorepo/shared /shared
COPY --from=build /monorepo/node_modules /node_modules
COPY --from=build /monorepo/apps/${APP} /app
WORKDIR /app

HEALTHCHECK --interval=1s --timeout=1s --start-period=1s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:${PORT}/ || exit 1

CMD node ./dist/server/entry.mjs