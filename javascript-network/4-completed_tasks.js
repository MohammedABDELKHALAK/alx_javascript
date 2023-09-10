const request = require('request');

// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Perform a GET request to the JSONPlaceholder API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
    process.exit(1);
  }

  // Parse the JSON response
  const todos = JSON.parse(body);

  // Create an object to store the count of completed tasks by user ID
  const completedTasksByUser = {};

  // Iterate through the todos and count completed tasks by user
  todos.forEach((todo) => {
    if (todo.completed) {
      if (!completedTasksByUser[todo.userId]) {
        completedTasksByUser[todo.userId] = 1;
      } else {
        completedTasksByUser[todo.userId]++;
      }
    }
  });

  // Print the number of completed tasks by user ID
  for (const userId in completedTasksByUser) {
    console.log(`User ${userId}: ${completedTasksByUser[userId]} completed tasks`);
  }
});
