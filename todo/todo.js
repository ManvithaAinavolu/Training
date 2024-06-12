const input=document.getElementById('input-text');
const add=document.getElementById('add');
const text=document.getElementById("text")
const data=[]

const addText=()=>{
    
    if(input.value.trim() === ""){
        text.innerHTML="please enter any value to add the text"
        return
    }
    text.innerHTML=""
    text.innerHTML=`
    <li id="task">${input.value}</li>
    <button id="del">Delete</button>
    <input type="checkbox" id="check">`
    data.push(text)
    input.value="";
    const Del=document.getElementById("del")

    Del.addEventListener('click',()=>{

        text.remove()
     })
     const check=document.getElementById('check')
     const listItem=document.getElementById('task')
     check.addEventListener('change',()=>{
        if(check.checked){
            listItem.classList.add("completed")
         }
         else{
            listItem.classList.remove("completed")
    
    
         }
    
     })
    
 
}

    



    