//Bmi using height in feets and inches
const weight=document.getElementById("mass");
const heightfeet=document.getElementById("heightfeet");
const heightinch=document.getElementById("heightinch");
const result=document.getElementById("result");
const errors=document.getElementById("errors");
const clock=document.getElementById("clock");
let clockcounter=0;
const updateClock=()=>{
    clock.innerHTML=clockcounter
clockcounter++;
}
setInterval(updateClock,1000);
const welcomemsg=()=>{
    alert("welcome to page");
}
setTimeout(welcomemsg,2000)

const validateInput=()=>{
    result.innerText=""
    if(weight.value === ""){
        errors.innerText="please provide weight"
        
        return false
    }
    else if(!/\d+/.test(weight.value)){
        errors.innerText="please enter the weight in numbers"

    }
    if(heightfeet.value === ""){
        errors.innerText="please provide height feets"
        return false
    }
    if(heightinch.value === ""){
        errors.innerText="please provide weight inches "
        return false
    }
    return true

}
const calculateBMI=()=>{
//if(!validateInput()) return
     mass=parseFloat(weight.value)
     feet=parseFloat(heightfeet.value)
     inch=parseFloat(heightinch.value)
    const heightinmt= (feet*12+inch)*0.0254
     BMI=mass/heightinmt**2
    
    if(BMI < 18.5){
    result.innerText="Your are underWeight"
    }
    else if(BMI <25){
        result.innerText="YOu are Normal"
    }
    else if(BMI < 29){
        result.innerText="You are OverWeight"
    }
    else{
        result.innerText="You are over obese"
    }

    
    
    
}
