interface calculator{
num1:number,
num2:number,
op:string
}
class Calculate{
    calculate=({num1,num2,op}:calculator)=>{

        while(op){
            if(op=='+'){
               return num1+num2
            }
            else if(op=='-'){
                return num1-num2
            }
            else if(op=='*'){
                return num1*num2
            }
            else if(op=='/'){
                return num1/num2

            }
            else{
                console.log("invalid operator")
            }
        }

    }

}
const btn=document.getElementById('calculate') as HTMLButtonElement
btn.addEventListener('click',()=>{
    const num1Input=document.getElementById('num1') as HTMLInputElement;
    let num2Input=document.getElementById('num2') as HTMLInputElement;
    const opIN=document.getElementById('op') as HTMLSelectElement
    const res=document.getElementById('res') as HTMLInputElement;
    const cal=new Calculate()
    const num1=parseFloat(num1Input.value)
    const num2=parseFloat(num2Input.value)
    const op=opIN.value
    const result=cal.calculate({num1,num2,op})   
    res.innerText=`${result}` 
});