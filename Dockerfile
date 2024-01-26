# ---
# Build step
# ---
FROM alpine AS build

# Install system dependencies
RUN apk add --no-cache git npm go python3 py3-pip
RUN pip3 install --break-system-packages python-slugify
RUN go install github.com/princjef/gomarkdoc/cmd/gomarkdoc@latest

# Set working directory
WORKDIR /build

# Copy package.json and lock to install packages
COPY package*.json ./

# Install packages
RUN npm install

# Copy all files
COPY . .

# Build
RUN npm run docs:gen
RUN npm run docs:build

# ---
# Serving step
# ---
FROM caddy:latest

# Set working directory
WORKDIR /docs

# Copy caddyfile
COPY --from=build /build/Caddyfile .
# Copy build
COPY --from=build /build/docs/.vitepress/dist .
# Copy statics
COPY --from=build /build/docs/static ./static

# Run
CMD ["caddy", "run"]