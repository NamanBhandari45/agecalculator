const btnEl = document.getElementById("btn");
const birthDay = document.getElementById("date");
const resultEl = document.getElementById("rel");

function calculateAge(){
    const birthdayValue = birthDay.value;
    if(birthdayValue === ""){
        alert("please enter your birth-date");
    }
    else{
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
const currDate = new Date();
const birthdayDate = new Date(birthdayValue);
let age = currDate.getFullYear() - birthdayDate.getFullYear();
const month =  currDate.getMonth() - birthdayDate.getMonth();

if(month < 0 || (month === 0 && currDate.getDate() < birthdayDate.getDate())){
    age--;
}
    return age;
}

btnEl.addEventListener("click", calculateAge);