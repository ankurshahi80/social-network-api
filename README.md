# social-network-api             [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
An API built for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.


## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [Criteria](#criteria)
 * [Routes](#routes) 
 * [Contributing](#contributing)
 * [Walkthrough](#walkthrough)
 * [License](#license)
 * [Questions](#questions)

## Installation
  - Clone the files from the repository onto your local machine
  - Use the command line to navigate to the downloaded folder
  - Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.
  - Make sure that your repo includes a package.json with the required dependencies. 
  - run npm install to install the dependencies


## Usage
  - Navigate to the root directoty 
  - Use node command npm start to start the appliacation
  - Go to Insomnia to test CRUD function for User, Thought, Reaction and Friend
  - Review the walkthough for more details
  - Stay tuned for more features

## Criteria
    GIVEN a social network API
    WHEN I enter the command to invoke the application
    THEN my server is started and the Mongoose models are synced to the MongoDB database
    WHEN I open API GET routes in Insomnia Core for users and thoughts
    THEN the data for each of these routes is displayed in a formatted JSON
    WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
    THEN I am able to successfully create, update, and delete users and thoughts in my database
    WHEN I test API POST and DELETE routes in Insomnia Core
    THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Routes
    /api/users
    /api/users/:userId/friends/:friendId
    /api/thoughts
    /api/thoughts/:thoughtId/reactions

## Contributing
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

## Walkthrough
   https://drive.google.com/file/d/1jTY15hBucAiAQni5hWO7u_FUZMsA6thK/view?usp=sharing

## License
MIT

## Questions
Got questions? Check out my github profile: [ankurshahi80](https://github.com/ankurshahi80)
or reach me at shahiankur80@gmail.com with your queries.
