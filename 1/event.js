let email = "mohammadamrollahi3@gmail.com";
let invalidChar = email.includes("");
let ad = email.indexOf("@");
let dot = email.indexOf(".", ad);

console.log(dot);
if (ad != -1 && ad != 0 && dot != -1 && dot != ad + 1) console.log("valid");
else console.log("invalid");
