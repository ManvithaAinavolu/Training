const canvas=document.getElementById('canvas');

canvas.height=400;
canvas.width=400;

const ctx=canvas.getContext('2d');
//ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=10;
//ctx.lineWidth=2;
const startpoint={
    x:0,
    y:0
}
// ctx.moveTo(10,20);
// ctx.lineTo(200,200)
// ctx.stroke()
const draw=()=>{
    ctx.moveTo(startpoint.x,startpoint.y);
    startpoint.x++;
    startpoint.y++;
    ctx.lineTo(startpoint.x,startpoint.y);
    ctx.stroke();

}
setInterval(draw,500)

// ctx.arc(200,200,20,0,Math.PI*2)
// ctx.stroke()


// ctx.arc(200,100,20,0,Math.PI*2)
// ctx.stroke()



