FROM node:10.0.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN ls

# Set the working directory to /app
# RUN mkdir /usr/src/reactredux
# WORKDIR /usr/src/reactredux

# Copy the current directory contents into the container at /app
# ADD . /usr/src/reactredux

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
#ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV=DEVELOPMENT
ENV http_proxy host:port
ENV https_proxy host:port

# RUN mkdir /usr/src/reactredux/dist
# ADD dist /usr/src/reactredux/dist/
# RUN mkdir /usr/src/reactredux/src
# ADD src /usr/src/reactredux/src/
# RUN mkdir /usr/src/reactredux/data
# ADD data /usr/src/reactredux/data/
# COPY index.html /usr/src/reactredux/index.html
# COPY main.js /usr/src/reactredux/main.js
# COPY webpack.config.js /usr/src/reactredux/webpack.config.js

# # install and cache app dependencies
# COPY package.json /usr/src/reactredux/package.json
RUN npm install --silent
RUN webpack --display-error-details

EXPOSE 8080

# start app
CMD ["npm", "start"]
