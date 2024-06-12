//Body Mass Index

//BMI without Loop


mass=parseFloat(prompt('enter your mass in KG'))
height=parseFloat(prompt('enter your height in cm'))
heightinmetres=height/100
BMI=mass/heightinmetres**2
while(BMI){
if(BMI<18.5){
alert("you are underweight")
}
else if(BMI<25){
alert("you have normal BMI")
}
else if(BMI < 29){
alert('you are over weight')
}

else if(BMI > 29){
alert('you have over obese')
}
}


//BMI with Loop

alert("Enter the following Requiriements")
while(true){
weight=prompt("enter weight in kgs")
height=prompt("enter height in cms")

heightinmt= height/100
BMI=weight/heightinmt**2

if(BMI < 18.5){
alert("Your are underWeight")
}
else if(BMI <25){
alert("YOu are Normal")
}
else if(BMI < 29){
alert("You are OverWeight")
}
else{
alert("You are over obese")
}
ch=prompt("Do YOu want to continue?")

if(ch=='no'){
    console.log('exiting the BMI')
    break
}
}



//Bmi using height in feets and inches


alert("Enter the following Requiriements")
while(true){
weight=prompt("enter weight in kgs")
feet=parseFloat(prompt("enter height in feets:"))
inch=parseFloat(prompt("enter remaining inches:"))
heightinmt= (feet*12+inch)*0.0254
BMI=weight/heightinmt**2

if(BMI < 18.5){
alert("Your are underWeight")
}
else if(BMI <25){
alert("YOu are Normal")
}
else if(BMI < 29){
alert("You are OverWeight")
}
else{
alert("You are over obese")
}
ch=prompt("Do YOu want to continue?")

if(ch=='no'){
    console.log('exiting the BMI')
    break
}
}

