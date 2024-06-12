


const addtion=()=>{
    const num1: HTMLInputElement =document.getElementById("num1") as HTMLInputElement;
    const num2: HTMLInputElement =document.getElementById("num2") as HTMLInputElement;
    const res: HTMLInputElement =document.getElementById("res") as HTMLInputElement;
    const sum=parseInt(num1.value)+parseInt(num2.value);
    res.innerText = sum.toString();
}