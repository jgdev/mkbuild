FROM node:12-alpine
RUN apk add --no-cache python2 g++ make ca-certificates
RUN npm install -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install --production
CMD ["pnpm", "start:production"]
