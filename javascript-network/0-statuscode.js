const request = require('request');

// Check if the URL is provided as a command line argument
if (process.argv.length !== 3) {
  console.error('Usage: node get_request_status.js <URL>');
  process.exit(1);
}

// Get the URL from the command line argument
const url = process.argv[2];

// Perform a GET request
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  console.log(`code: ${response.statusCode}`);
});
