# FROM node:18.18.0

# WORKDIR /app

# COPY package.json yarn.lock ./
# RUN yarn install

# COPY . .

# RUN yarn build

# EXPOSE 3000

# CMD ["yarn", "start"]


# Stage 1: Build the app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Install only production dependencies
RUN yarn install --production --frozen-lockfile

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the app
CMD ["yarn", "start"]

