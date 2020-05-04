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

function generate() {
  var password = '';
  for (i = 0; i < lengthpass; i++) {
    var c = Math.floor(Math.random() * characters.length + 0);
    password += characters.charAt(c);
  }
  console.log(password);
  document.getElementById('pass').innerHTML = password += characters.charAt(c);
}

if (confirm('Would you like to use uppercase letters?'));
{
  function generate() {
    var password = '';
    for (i = 0; i < lengthpass; i++) {
      var c = Math.floor(Math.random() * uppercharacters.length + 0);
      password += uppercharacters.charAt(c);
    }
    console.log(password[i]);
    document.getElementById(
      'pass'
    ).innerHTML = password += uppercharacters.charAt(c);
  }
}

if (confirm('Would you like to use lowercase letters?'));
{
    function generate() {
        var password = '';
        for (i = 0; i < lengthpass; i++)

        var c = Math.floor(Math.random() * lowercharacters.length + 0);
        password += lowercharacters.charAt(c);
      }
      console.log(password[i]);
      document.getElementById(
        'pass'
      ).innerHTML = password += lowercharacters.charAt(c);
    }
  }

  var symbolpass = '!@#$%^&*()';

  if (confirm('Would you like to use symbols?'));
{
  function generate() {
    var password = '';

    for (i = 0; i < lengthpass; i++)
    {
      var c = Math.floor(Math.random() * symbolpass.length + 0);
      password += symbolpass.charAt(c);

  }
  console.log(password[i]);
  document.getElementById('pass').innerHTML = password += symbolpass.charAt(
    c
  );
}
}

var numberpass = '1234567890';
if (confirm('Would you like to use numbers?'));
{
  function generate() {
    var password = '';

    for (i = 0; i < lengthpass; i++) {
      var c = Math.floor(Math.random() * numberpass.length + 0);
      password += numberpass.charAt(c);
    }

    console.log(password[i]);
    document.getElementById('pass').innerHTML = password += numberpass.charAt(
      c
    );
  }
}

/*
I KNOW THAT THESE FOUR COMMAND PROMPTS ARE NOT CONNECTING TO THE PASSWORD AND I SPENT FOUR DAYS 
TRYING TO PIECE THESE TOGETHER IN AROUND 30 DIFFERENT WAYS. SADLY I COULDNT GET ALL FOUR OF THESE TO CREATE A COMBINED PASSWORD
I AM LOOKING FOWARD TO LEARNING WHAT I DID WRONG HERE. For some reason whatever type of confirm prompt I leave last shows the corresponding
character only. I also will note that I was not able to fix issue #5 because of a submodule problem but I am also willing to learn 
how to fix this in the future. Thank you for reading. 
*/

