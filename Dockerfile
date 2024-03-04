FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm && pnpm i --frozen-lockfile;

COPY . .

RUN pnpm run build


FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

CMD pnpm start