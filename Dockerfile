# ---
# Build step
# ---
FROM alpine AS build

# Install system dependencies
RUN apk add --no-cache git npm go python3 py3-pip
RUN pip3 install --break-system-packages python-slugify
RUN GOBIN=/usr/bin/ go install github.com/princjef/gomarkdoc/cmd/gomarkdoc@v0.4.1

# Set working directory
WORKDIR /build

# Copy package.json and lock to install packages
COPY package*.json ./

# Install packages
RUN npm install

# Copy all files
COPY . .

# Build
RUN npm run gen
RUN npm run build

# ---
# Serving step
# ---
FROM caddy:latest

# Set working directory
WORKDIR /docs

# Copy caddyfile
COPY --from=build /build/Caddyfile .
# Copy build
COPY --from=build /build/.vitepress/dist .
# Copy statics
COPY --from=build /build/static ./static

# Run
CMD ["caddy", "run"]
