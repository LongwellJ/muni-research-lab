# Stage 1: Build the app
FROM node:22-alpine AS builder

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run the app
FROM node:22-alpine AS runner

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

# If you have a public/ folder (optional)
COPY --from=builder /app/public ./public

# Expose port 3000
EXPOSE 3000

# Set the command to run your app
CMD ["npm", "start"]
