FROM node:latest

WORKDIR /project
COPY ./containers/buildchain/package.json package.json
COPY ./containers/buildchain/provision.sh /tmp/provision.sh
RUN chmod +x /tmp/provision.sh
RUN /tmp/provision.sh
COPY ./containers/buildchain/webpack.config.js webpack.config.js
CMD npm run start
