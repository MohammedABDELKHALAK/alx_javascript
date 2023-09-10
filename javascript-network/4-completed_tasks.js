const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide an API URL as an argument.');
  process.exit(1);
}

// Make a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('HTTP request failed with status code:', response.statusCode);
    process.exit(1);
  }

  // Parse the JSON response
  const data = JSON.parse(body);

  // Create an object to store the counts of completed tasks per user
  const completedTasksByUser = {};

  // Iterate through the tasks and count completed tasks per user
  data.forEach((task) => {
    if (task.completed) {
      if (completedTasksByUser[task.userId]) {
        completedTasksByUser[task.userId]++;
      } else {
        completedTasksByUser[task.userId] = 1;
      }
    }
  });

  console.log(completedTasksByUser);
});
