// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to write password to the #password input
function writePassword() {
  // Call the generatePassword() function to get a new password
  var password = generatePassword();

  // Select the password input field
  var passwordText = document.querySelector("#password");

  // Set the generated password as the value of the password input field
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate the password
//Function is is a reusable block of code designed to perform a specific task. 
// ^^^Functions are defined using the keyword function followed by the name of the function.

function generatePassword() {
  // Prompt the user for the desired password length
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");

  // Validate the password length
  if (passwordLength < 8 || passwordLength > 128) {
    // Show an alert if the password length is invalid
    alert("Please enter a password length between 8 and 128 characters.");
    return ""; // Return an empty string
  }

  // Prompt the user to include different character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    // Show an alert if no character type is selected
    alert("Please select at least one character type.");
    return ""; // Return an empty string
  }

  // Define character pools for different character types
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Create the character pool based on selected character types
  var characterPool = "";
  if (includeLowercase) {
    characterPool += lowercaseChars;
  }
  if (includeUppercase) {
    characterPool += uppercaseChars;
  }
  if (includeNumeric) {
    characterPool += numericChars;
  }
  if (includeSpecialChars) {
    characterPool += specialChars;
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    // Randomly select a character from the character pool
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomIndex);
  }

  return password;
}