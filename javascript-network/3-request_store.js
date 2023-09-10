const request = require('request');
const fs = require('fs');

// Get the URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Please provide a URL and a file path as arguments.');
  process.exit(1);
}

// Make a GET request to the URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('HTTP request failed with status code:', response.statusCode);
    process.exit(1);
  }

  // Write the response body to the specified file
  fs.writeFile(filePath, body, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err.message);
      process.exit(1);
    }

    console.log(`File saved to ${filePath}`);
  });
});
