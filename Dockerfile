# Stage 1: Build the React app
FROM node:18-alpine AS build

# Install python/pip and build tools cuz node-gyp is horrible
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 py3-pip build-base autoconf automake libtool

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci 

# Copy the React app files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the desired port (default is 80 for NGINX)
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
