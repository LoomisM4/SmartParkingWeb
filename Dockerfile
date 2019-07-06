FROM node:12.5.0-alpine
EXPOSE 5000

MAINTAINER loomism4

WORKDIR /app

RUN yarn global add serve

COPY app/ ./

ENTRYPOINT serve -s