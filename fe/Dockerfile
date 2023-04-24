FROM node:18.16.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install --global serve

# add app
COPY . .

RUN npm run build
EXPOSE 3000

# start app
CMD ["serve", "-s", "/app/build"]
