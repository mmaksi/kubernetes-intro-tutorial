# Use node:alpine as a base image
FROM node:alpine

# Set the working directory in the container (virtual machine)
WORKDIR /app

# Copy only package.json
COPY package.json ./

# Install the required packages
RUN npm install

# Copy the remaining files
COPY ./ ./

# Set the default command for the executing container
CMD ["npm", "start"]
