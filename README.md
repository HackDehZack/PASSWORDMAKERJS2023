# PASSWORDMAKERJS2023
Random Password Generator
This is a simple web-based random password generator that allows users to generate passwords based on their preferences for length and character types.

How to Use
Open the index.html file in a web browser.
Click the "Generate Password" button to initiate the password generation process.
You will be prompted to enter the desired password length (between 8 and 128 characters).
You will then be asked to confirm which character types you want to include in the password: lowercase letters, uppercase letters, numeric digits, and special characters.
After selecting your preferences, the generated password will be displayed in the designated input field.
Code Explanation
The functionality of this password generator is implemented using JavaScript. Here's an overview of the main components of the code:

The generatePassword function handles the actual generation of the password based on user preferences. It prompts the user for password length and character type preferences, validates user input, and creates a character pool based on selected types.

The writePassword function is triggered when the "Generate Password" button is clicked. It calls the generatePassword function to get a new password and then displays it in the password input field.

The generateBtn variable represents the "Generate Password" button on the web page. An event listener is added to this button to execute the writePassword function when the button is clicked.

Usage Tips
Make sure to select at least one character type (lowercase, uppercase, numeric, special) to ensure password security.
Choose a password length that meets the requirements of the systems or services you intend to use the password for.
Always keep generated passwords secure and avoid sharing them openly.
