# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all the files from the current directory to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the React app will run (if needed)
# EXPOSE 3000

# Start the React app when the container starts
CMD ["npm", "start"]
