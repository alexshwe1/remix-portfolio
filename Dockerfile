FROM --platform=linux/amd64 public.ecr.aws/docker/library/node:latest

EXPOSE 3000

WORKDIR /app

COPY . .

ENV NODE_ENV=production

RUN yarn install --omit=dev

RUN yarn run build

CMD ["yarn", "run", "start"]