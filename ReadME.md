# Newsletter Renewal Flow - Backend

This README outlines the solution for the Newsletter Renewal Flow - Backend, including its features, setup instructions, and assumptions.
Features

    Flow Management:
        Initialize a newsletter renewal flow for a user.
        Update the flow with stages, outcomes, and logs.
    Database Integration:
        Uses MongoDB for persistent storage of flow data.
    REST API:
        Simple endpoints for starting and updating flows.

Getting Started
Prerequisites

    Node.js (v18 or newer)
    MongoDB (local or cloud-based instance)
    npm or yarn

Installation

    Clone the repository:

git clone https://github.com/KeshavMakkad/Newsletter_Renewal_Flow_Backend

Navigate to the project directory:

cd newsletter-renewal-backend

Install dependencies:

npm install

Set up environment variables: Create a .env file in the root directory with the following content:

    PORT=3000
    MONGODB_URI=<your_mongodb_connection_string>

API Endpoints
Base URL: /

    POST /start
        Description: Starts a new flow.
        Request Body: None
        Response:
            200 OK: Flow created successfully.
            500 Internal Server Error: If an error occurs.

    PUT /update
        Description: Updates an existing flow with the current stage, outcome, and logs.
        Request Body:

        {
          "flowID": "string",
          "stage": "string",
          "outcome": "string",
          "logs": "string"
        }

        Response:
            200 OK: Flow updated successfully.
            404 Not Found: If the flow ID does not exist.
            500 Internal Server Error: If an error occurs.

How to Run

    Start the server:

    npm start

    By default, the server runs on http://localhost:3000.

Assumptions

    The MongoDB connection string in .env is valid and points to a running instance.
    The frontend communicates with the backend using the correct API endpoints.
