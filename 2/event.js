let phonNumber = "09121234567";
console.log(chekNumber(phonNumber))
function chekNumber(phonNumber)
{
if (phonNumber.startsWith("09") && phonNumber.length == 11)
 return "valid";
else return "invalid";
}
