let email = "mohammadamrollahi3@gmail.com";
function checkEmail(email)
{
let invalidChar = email.includes("");
let ad = email.indexOf("@");
let dot = email.indexOf(".", ad);

if (ad != -1 && ad != 0 && dot != -1 && dot != ad + 1) return "valid";
else return "invalid";
}
console.log(checkEmail(email))