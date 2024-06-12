
const hint=document.getElementById('hint')
const word=document.getElementById('word')
const canvas=document.getElementById('canvas');
const letters=document.getElementById('letters');
const ctx=canvas.getContext('2d');

const data=[
    ["apple","fruit"],
    ["elephant","animal"],
    ["vijayawada","city"],
    ["grapes","fruit"],
    ["lion","animal"],
    ["mango","fruit"],
    ["tiger","fruit"],
    ["Brinjal","vegetable"]
   

]
canvas.width=400
canvas.height=300

let selectedWors=""
let displayWord=""
let attempts=0
let maxattempts=6
let guesses=[]

const init=()=>{

    const index=parseInt(Math.random()*data.length)
    selectedWors=data[index][0]
    hint.innerHTML=`${data[index][1]}`
    displayWord="_".repeat(selectedWors.length).trim()
    word.innerText=displayWord
drawMan()

}
const drawMan=()=>{
    ctx.beginPath()
    ctx.lineWidth=5
    ctx.strokeStyle="red"
    ctx.clearRect(0,0,canvas.width,canvas.height)


    //base

    ctx.moveTo(10,280)
    ctx.lineTo(330,280)
    ctx.stroke()

    //vertical

    ctx.moveTo(50,0)
    ctx.lineTo(50,380)
    ctx.stroke()

    //hang-top
    ctx.moveTo(50,80)
    ctx.lineTo(250,80)
    ctx.stroke()

    //tie

    ctx.moveTo(200,80)
    ctx.lineTo(200,130)
    ctx.stroke()

    //head
    ctx.moveTo(230, 150);
    ctx.arc(200, 150, 30, 0, Math.PI * 2);
    ctx.stroke();
 }
init()