# Setting the base to nodejs 8.9.4
FROM node:8.12.0-alpine@sha256:443fd55218742fcf1d86ec1baa353079e1a783386de9b7ff74613eed9cffebb7

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

ENV NODE_ENV production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start