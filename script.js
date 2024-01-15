// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Select textarea and button elements and assign to variables
var textAreaEl = document.getElementById("password");
var buttonEl = document.getElementById("generate");

// Declare function to validate user has input either 'yes' or 'no'
function checkInput(input) {
  // Ensure function will validate for both lower and uppercase inputs
  var input = input.toLowerCase();
  if (input === "yes" || input === "no") {
    return true;
  } else {
    // Alert the user that their input has failed validation and exit function
    alert("You must answer yes or no. Please try again.");
    return false;
  }
}

// Declare getRandom function
function getRandom(arr) {
  // Select a random number for the length of the arguement passed through the function
  var getRandomEl = Math.floor(Math.random() * arr.length);
  // Use the random number to select a random element from the array and assign to a variable
  var randomEl = arr[getRandomEl];
  return randomEl;
}

// Add click event listener to generate password button to begin getPasswordOptions function
buttonEl.addEventListener("click", function getPasswordOptions() {
  
  // Prompt user to input password criteria options
  var passwordLength = prompt(
    "How many characters would you like your password to contain? Choose between 8-128"
  );
  // Validate passwordLength to ensure user input is a number and meets length criteria. Alert user and exit function if it does not
  var passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength) || 8 > passwordLength || 128 < passwordLength) {
    alert(
      "Please try again! Make sure your password contains between 8-128 characters."
    );
    // If input criteria is met, continue to character type prompts
  } else {
    var containsLowercase = prompt(
      "Would you like your password to contain lowercase characters?"
    );
    // Call checkInput function for containsLowercase to ensure user has input either 'yes' or 'no'
    if (checkInput(containsLowercase) === false) {
      return;
    } else {
      var containsUppercase = prompt(
        "Would you like your password to contain uppercase characters?"
      );
      if (checkInput(containsUppercase) === false) {
        return;
      } else {
        var containsNumeric = prompt(
          "Would you like your password to contain numeric characters?"
        );
        if (checkInput(containsNumeric) === false) {
          return;
        } else {
          var containsSpecial = prompt(
            "Would you like your password to contain special characters?"
          );
          if (checkInput(containsSpecial) === false) {
            return;
            // Validate to ensure user has selected at least on charater type
          } else if (containsLowercase === 'no' && containsUppercase === 'no' && containsNumeric === 'no' && containsSpecial === 'no') {
            alert('You must select at least one option. Please try again.');
            return;
            } else {

              // Declare empty array for charTypes
              var charTypes = [];
              
              // Concatenate corresponding arrays for user's selected character types
              if (containsLowercase === 'yes') {
                charTypes = charTypes.concat(lowerCasedCharacters);                
              }
              if (containsUppercase === 'yes') {
                charTypes = charTypes.concat(upperCasedCharacters);                
              }
              if (containsNumeric === 'yes') {
                charTypes = charTypes.concat(numericCharacters);               
              }
              if (containsSpecial === 'yes') {
                charTypes = charTypes.concat(specialCharacters);
              }

              // Declare empty userPassword variable
              var userPassword = '';

              // Iterate through the user's chosen password length
              for (i = 0; i < passwordLength; i++) {
                // Pass charTypes through getRandom function to select random element from user's chosen character types and add to userPassword
                userPassword += getRandom(charTypes);
              }

              // Set text content of textarea to userPassword result to display text on page
              textAreaEl.textContent = userPassword;              
            }
          };
        }
      }
    }
  });
