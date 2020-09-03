FROM node:alpine
WORKDIR '/todo'

COPY package.json .
RUN npm install

COPY . .
CMD ["npm, start"]