# Stage 1: Build React frontend
FROM node:14 as frontend
WORKDIR /app
COPY ./Personal_portfolio/package*.json ./
RUN npm install
COPY ./Personal_portfolio ./
RUN npm run build

# Stage 2: Build Express server
FROM node:14
WORKDIR /app
COPY ./server/package*.json ./
RUN npm install
COPY ./server ./

# Expose port 5000 for the Express server
EXPOSE 5000

# Start the Express server
CMD ["npm", "start"]
