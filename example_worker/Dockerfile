FROM node:alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /usr/src/app/

ADD . /app/
ADD node_modules /app/node_modules

EXPOSE 3000
CMD [ "npm", "start" ]

