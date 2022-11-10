// Assignment Code
// Query selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// vars
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var optionsVariable = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write function to generate a password 

function writePassword() {

    // Prevent the screen refresh
    event.preventDefault();

    // Clear previous password from screen
    password.value === "";
    var randomString = "";

    // Chose variables
    var lowerCase = confirm("Do you want your password to use lowercase letters?");
    var upperCase = confirm("Do you want your password to use uppercase letters?");
    var numbers = confirm("Do you want your password to use numbers?");
    var specialChar = confirm("Do you want your password to use special characters?");
    var passwordLength = prompt("Chose a password lenght between 8 and 128 total characters");

    // validate pasword length
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be between 8 and 128 total characters.");
        var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    }

    // force user to select at least one option
    else if (lowerCase === false && upperCase === false && num === false && specialChar === false) {
        alert("Chose at least one password character type.");
        var lowerCase = confirm("Do you want your password to use lowercase letters?");
        var upperCase = confirm("Do you want your password to use uppercase letters?");
        var numbers = confirm("Do you want your password to use numbers?");
        var specialChar = confirm("Do you want your password to use special characters?");
    }

    // generate paword with selected criteria
    if (lowerCase) {
        optionsVariable += lowercaseAlphabet;
    }

    if (upperCase) {
        optionsVariable += uppercaseAlphabet;
    }

    if (numbers) {
        optionsVariable += numbers;
    }

    if (specialChar) {
        optionsVariable += specialCharacters;
    }

    // Generates a random password 
    for (var i = 0; i < passwordLength; i++) {

        // select a random character from the string until it is is the cosen length
        randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = randomString;

}


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

