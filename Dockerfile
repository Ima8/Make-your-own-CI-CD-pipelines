FROM node:alpine

# Create app directory
WORKDIR /app

ADD . /app/
ADD node_modules /app/node_modules

EXPOSE 3000
CMD [ "npm", "start" ]

