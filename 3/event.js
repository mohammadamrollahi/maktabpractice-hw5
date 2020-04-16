let myInput=".._......_"
let val=true
for (let i=0;i<myInput.length;i++)
{
    if (myInput[i]=="." || myInput[i]=="_")
        val=true
        else
        {
        val=false
        break;
        }
        
}
if(myInput.length<=9 && myInput.length>=3 && val)
console.log("valid")
else
console.log("invalid")