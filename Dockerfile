FROM node:22-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install --frozen-lockfile

COPY . /app

RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]