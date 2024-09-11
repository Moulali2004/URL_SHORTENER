

# URLSHORTENER

A simple URL shortening service built with Node.js, Express.js, and MongoDB. This project allows users to input a long URL and receive a shortened version, which redirects back to the original URL.

## Project Overview

This project demonstrates how to create a basic URL shortening service that runs on a local server. It uses **Node.js** for the backend logic, **Express.js** for routing and middleware, **MongoDB** for data storage, and **Postman** for API testing.

### Features:
- **Shorten URLs**: Users can send a long URL to the `/url` route via POST, and a short unique identifier is generated.
- **URL Redirection**: The short URL redirects users to the original URL when accessed through the `/url/:id` route via GET.
- **Data Storage**: URLs and their short IDs are stored in a MongoDB database.

### Routes:
- **POST** `/url`: Accepts a URL in the request body, generates a short ID, and stores it in MongoDB.
- **GET** `/url/:id`: Retrieves the original URL using the short ID and redirects the user.

## Tech Stack:
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for routing and middleware.
- **MongoDB**: NoSQL database to store URLs and short IDs.
- **Postman**: API testing tool for backend development.

## What I Learned:
- How to start and run a server on a specific port using Node.js.
- How to use Express.js to simplify routing and middleware functions.
- How to connect MongoDB to a Node.js server, create collections, and store data.
- How to use Postman to test backend APIs without the need for a user interface.

## How to Run the Project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/URLSHORTENER.git
   cd URLSHORTENER
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB**:
   - Ensure you have MongoDB installed and running locally or use a MongoDB cloud service.
   - Update the connection string in the project files if needed.

4. **Run the server**:
   ```bash
   npm start
   ```

5. **Test the API**:
   - Use Postman to send a POST request to `/url` with a URL in the body.
   - Use a GET request to `/url/:id` to be redirected to the original URL.


---

Feel free to replace the GitHub repository link and add any additional sections you see fit!
