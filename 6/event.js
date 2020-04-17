let userPersonalInformation={
    name:'mohammad',
    lastname:'amrollahi',
    age:20,
    phonNumber:'09121234567'
}
let userWorkInformation=
{
    workExperienceYears:3 ,
    email:"mohammadamrollahi3@gmail.com"
}
let eduInformation=
{
    hightSchool:"newCollege",
    univercity:"tehran"
}
function mergingObjects(firstObj,secondObj,thirdObj){
    let arr=[firstObj,secondObj,thirdObj]
    let mergObject=new Object()
for(let i=0;i<arr.length;i++)
{
    debugger
    for(let key in arr[i])
      mergObject[key]=arr[i][key]
}
return mergObject
}
console.log(mergingObjects(userPersonalInformation,userWorkInformation,eduInformation))