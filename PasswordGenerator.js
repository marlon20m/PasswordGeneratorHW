var name = prompt('What is your name?');
alert('Hello ' + name);

function PasswordGenerator(name) {
  alert('Welcome to The Password Generator ' + name + '!');
}

PasswordGenerator(name);

if (
  confirm(
    "Do You Need a password? Click 'OK' if you would like to continue, and click 'Cancel' if you dont want to continue"
  )
) {
  alert("Great Let's Get Your Password Made!");
} else {
  alert('Okay Maybe we can make your password some other time');
}

var lengthpass = prompt(
  'Choose a length from 8 to 128 characters for your password'
);

lengthpass = parseInt(lengthpass);

var allcharacters =
  '0123456789!@#$%^&*()_-+=[];:.?/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var uppercharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercharacters = 'abcdefghijklmnopqrstuvwxyz';
