const request = require('request');
const fs = require('fs');

const url = 'http://localhost:5050/route_0'; // Change the URL as needed
const outputFilePath = 'w_file_0.txt'; // Change the file name as needed

// Perform an HTTP GET request
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('HTTP request failed with status code:', response.statusCode);
    process.exit(1);
  }

  // Write the response body to the specified file
  fs.writeFile(outputFilePath, body, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      process.exit(1);
    }

    console.log(`Successfully saved the content from ${url} to ${outputFilePath}`);
  });
});
