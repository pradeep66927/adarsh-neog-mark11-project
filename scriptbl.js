const dateOfBirth = document.querySelector("#date-of-birth");

const luckyNumber = document.querySelector("#lucky-number");

const checkNumberButton = document.querySelector("#check-number");

const outputBox = document.querySelector("#output-box");
// checkNumberButton.addEventListener("click",function 
// getvalues(){
//     console.log(dateOfBirth.value, luckyNumber.value);
// })

function compareValues(sum,luckyNumber){
   if (sum%luckyNumber===0) {
      outputBox.innerText = "your birthday is lucky 🚀 "; 
   } else {
       outputBox.innerText = "your birthday is not lucky 😔";

   }
}

function checkBirthDayIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum&&dob)
    compareValues(sum,luckyNumber.value);
    else
    outputBox.innerText = "please enter both the fields 😠";

}

function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for (let index = 0; index<dob.length;
    index++) {
        sum = sum + Number(dob.charAt
        (index));
    }
    return sum;
}
checkNumberButton.addEventListener("click",checkBirthDayIsLucky)

