FROM node:lts-alpine

ADD ./wstest_server /wstest_server

WORKDIR /wstest_server

RUN npm i ws --save

EXPOSE 5001

CMD [ "node", "server.js" ]
