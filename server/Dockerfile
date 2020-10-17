FROM node:lts-alpine

ADD ./wstest_server /wstest_server

WORKDIR /wstest_server

RUN apk add openssl && \
    mkdir ssl && \
    openssl genrsa 2048 > ssl/server.key && \
    openssl req -new -key ssl/server.key -subj '/CN=AU' > ssl/server.csr && \
    openssl x509 -days 3650 -req -signkey ssl/server.key < ssl/server.csr > ssl/server.crt && \
    npm i ws --save

EXPOSE 5080 5443

CMD [ "node", "server.js" ]
