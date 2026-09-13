# Generic build image for any subproject in this single-spa monorepo.
# Build context should be the subproject directory; dockerfile is this file
# at the repo root (../Dockerfile).
#
# Usage in docker-compose:
#   build:
#     context: dashboard-mfe
#     dockerfile: ../Dockerfile
#     args:
#       SUBDIR: dashboard-mfe

FROM node:20-alpine

ARG SUBDIR
WORKDIR /app/${SUBDIR}

# Install dependencies first for layer caching
COPY package*.json ./
RUN npm install

# Copy remaining project files
COPY . .

# Default command; override per service in docker-compose
CMD ["npm", "start"]