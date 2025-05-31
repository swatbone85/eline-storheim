FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the app if running in production mode
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3005"]

