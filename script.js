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

function checkInput(input) {
  var input = input.toLowerCase();
  if (input === "yes" || input === "no") {
    return true;
  } else {
    alert("You must answer yes or no");
    return false;
  }
}

var textAreaEl = document.getElementById("password");
var buttonEl = document.getElementById("generate");

buttonEl.addEventListener("click", function getPasswordOptions() {
  // console.log('hello');
  var passwordLength = prompt(
    "How many characters would you like your password to contain? Choose between 8-128"
  );
  var passwordLength = parseInt(passwordLength);
  // console.log(passwordLength);
  // console.log(typeof(passwordLength));
  if (isNaN(passwordLength) || 8 > passwordLength || 128 < passwordLength) {
    alert(
      "Please try again! Make sure your password contains between 8-128 characters."
    );
  } else {
    var containsLowercase = prompt(
      "Would you like your password to contain lowercase characters?"
    );
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
          } else if (containsLowercase === 'no' && containsUppercase === 'no' && containsNumeric === 'no' && containsSpecial === 'no') {
            alert('You must select at least one option. Please try again.');
            return;
            } else {

              var charTypes = [];
              // console.log(charTypes);
              if (containsLowercase === 'yes') {
                charTypes = charTypes.concat(lowerCasedCharacters);
                // console.log(charTypes);
              }
              if (containsUppercase === 'yes') {
                charTypes = charTypes.concat(upperCasedCharacters);
                // console.log(charTypes);
              }
              if (containsNumeric === 'yes') {
                charTypes = charTypes.concat(numericCharacters);
                // console.log(charTypes);
              }
              if (containsSpecial === 'yes') {
                charTypes = charTypes.concat(specialCharacters);
                // console.log(charTypes);
              }
              
              console.log(charTypes);
              console.log(passwordLength);

              var userPassword = '';

              for (i = 0; i < passwordLength; i++) {
                userPassword += getRandom(charTypes);
                console.log(userPassword);
              }
            }
          };
        }
      }
    }
  });

function getRandom(arr) {
  var getRandomEl = Math.floor(Math.random() * arr.length);
  var randomEl = arr[getRandomEl];
  console.log(randomEl);
  return randomEl;
}



// console.log(passwordOptions);

// Function to prompt user for password options
// function getPasswordOptions() {
//   var passwordLength = parseInt(
//     prompt(
//       "How many characters would you like your password to contain? Choose between 8-128"
//     )
//   );

//   if (isNaN(passwordLength) || 8 > passwordLength || 128 < passwordLength) {
//     alert(
//       "Please try again! Make sure your password contains between 8-128 characters."
//     );
//   } else {
//     var containsLowercase = confirm(
//       "Would you like your password to contain lowercase characters?"
//     );
//     var containsUppercase = confirm(
//       "Would you like your password to contain uppercase characters?"
//     );
//     var containsNumeric = confirm(
//       "Would you like your password to contain numeric characters?"
//     );
//     var containsSpecial = confirm(
//       "Would you like your password to contain special characters?"
//     );
//   }
//   while (!containsLowercase && !containsUppercase && !containsNumeric && !containsSpecial) {
//     alert("Please try again! Select at least one option.")
//   }

//   var userInput = {
//     passwordLength: passwordLength,
//     containsLowercase: containsLowercase,
//     containsUppercase: containsUppercase,
//     containsNumeric: containsNumeric,
//     containsSpecial: containsSpecial,
//   };

//   return userInput;
// }

// getPasswordOptions();

// // Function for getting a random element from an array
// function getRandom(arr) {
//   var randomElement = Math.floor(Math.random() * arr.length);
//   return arr[randomElement];
// }

// // Function to generate password with user input
// function generatePassword() {}

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
