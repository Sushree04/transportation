# Use an official Node runtime as a parent image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the frontend app's source code to the working directory
COPY frontend/ .

# Build the app
RUN npm run build


# Use an official Python runtime as a parent image
FROM python:3.8

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy the Flask app's source code to the working directory
COPY . .

# Install Flask and other dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 5000
EXPOSE 3000

ENV FLASK_APP=./backend/app.py


# Run the Flask application
CMD ["flask", "run", "--host", "0.0.0.0", "--port", "5000"]

