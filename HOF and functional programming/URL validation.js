// 5. URL validation.
// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.

function checkURL(input) {
    let regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9#$%&'*+-.\/:=?@[\]^_`{|}~]+[.][a-zA-Z]+$/;
  
    if (regex.test(input)) {
      console.log("The input matches the conditions.");
    } else {
      console.log("The input does not match the conditions.");
    }
  }
  
  // Test cases
  checkURL("http://www.example.com");
  checkURL("https://www.example.com");
  checkURL("http://example.com");
  checkURL("https://example.com");
  checkURL("ftp://www.example.com");