// Create character set
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericsStr = "0123456789";
var specialStr = "!@#$%^&*()~";

var lowerCaseArr = lowerCaseStr.split('');
var upperCaseArr = upperCaseStr.split('');
var numbersArr = numericsStr.split('');
var specialsArr = specialStr.split('');

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Logic 
  // 1. Create 1 prompt for password criteria 
  // 2. Use prompt variable and at => 8 characters, but <128 characters
  var passChars = [];
  var finalPasword = [];
  var pLength = prompt('length of password');

  if (pLength < 8 && pLength > 128) {
    alert('Password does not match the length criteria!')
    return null;
  }
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lCase = confirm('Do you want to include lowercase letters?');
  var uCase = confirm('Do you want to include uppercase letters?');
  var numbers = confirm('Do you want to include numbers?');
  var specialChar = confirm('Do you want to include special characters?');

  // 4. Input is validated and one type is selected 
  if (lCase === false && uCase === false && numbers === false && specialChar === false) {
    alert('At least one character type should be selected');
    return null;
  }


  if (lCase === true) {
    passChars = passChars.concat(lowerCaseArr)
  }
  if (uCase === true) {
    passChars = passChars.concat(upperCaseArr)
  }
  if (numbers === true) {
    passChars = passChars.concat(numbersArr)
  }
  if (specialChar === true) {
    passChars = passChars.concat(specialsArr)
  }

  for (var i = 0; i < pLength; i++) {
    var randomChar =randomIndex(passChars)
      finalPasword.push(randomChar)
  }

  return finalPasword.join('');
}

function randomIndex(arr){

  return arr[Math.floor(Math.random() * arr.length)];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
