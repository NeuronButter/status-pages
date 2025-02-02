FROM node:22-slim AS build-env
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY pnpm-lock.yaml /app/pnpm-lock.yaml
COPY package.json /app/package.json
WORKDIR /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . /app
RUN pnpm run build

FROM ghcr.io/static-web-server/static-web-server:2
COPY --from=build-env /app/dist /app
ENV SERVER_ROOT=/app
