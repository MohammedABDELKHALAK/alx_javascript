const request = require('request');
const fs = require('fs');
const utf8 = require('utf8');

// Check if the URL and file path are provided as command line arguments
if (process.argv.length < 4) {
  console.error('Usage: node 3-request_store.js <URL> <file-path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('HTTP request failed with status code:', response.statusCode);
    process.exit(1);
  }

  // Write the response body to the specified file
  fs.writeFile(filePath, utf8.encode(body), 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err.message);
      process.exit(1);
    }

    console.log(`Successfully saved the content from ${url} to ${filePath}`);
  });
});
