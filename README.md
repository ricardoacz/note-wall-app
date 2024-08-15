# Simple CRUD Social Media App

This is a simple CRUD application that displays a basic social media page where users can log in and write posts. Every user can see all the posts, but they can only delete or modify their own posts.

## Features

- User authentication using Passport.js (local strategy)
- Create, read, update, and delete posts
- View all posts from all users
- Only the author of a post can delete or modify it

## Technologies Used

- Express.js
- MongoDB
- EJS (Embedded JavaScript templates)
- Passport.js

## Installation

1. Clone the repository
2. Install dependencies:
     npm install
4. Set up environment variables: Create a .env file in the config folder directory and add the following:
     PORT=your_port_number
     DB_STRING=your_mongodb_uri
5. Start the application:
     npm start

## Usage
Open your browser and go to http://localhost:your_port_number.
Sign up for a new account or log in with an existing account.
Create, view, update, and delete posts.

## Things I would like to improve
- Creating alerts using express flash, to showcase errors like 'email already registered' or 'wrong password' in the client side.
- Using express validator for emails, username and passwords.
- Using Bootstrap to make look better, right now is basically plain html, css.

## Contributing
Feel free to submit issues and pull requests. Play around with it.
