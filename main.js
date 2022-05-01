var color="black"
var widthofline=4
var lastpositionofX,lastpositionofY
var currentpositionofX,currentpositionofY
mouseEvent="empty"
canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
canvas.addEventListener("mousedown", mymousedown)
function mymousedown(){
    mouseEvent="mousedown"
}
canvas.addEventListener("mouseup", mymouseup)
function mymouseup(){
    mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave", mymouseleave)
function mymouseleave(){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e){
    current_mouse_x=e.clientX-canvas.offsetLeft
    current_mouse_y=e.clientY-canvas.offsetTop
    if(mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthofline

        ctx.moveTo(lastpositionofX,lastpositionofY)
        console.log("lastpositionofX and Y")
        console.log("x="+lastpositionofX+"y="+lastpositionofY)
        ctx.lineTo(currentpositionofX,currentpositionofY)
        console.log("currentpositionofX and Y")
        console.log("x="+currentpositionofX+"y="+currentpositionofY)
        ctx.stroke()
    }
    lastpositionofX=currentpositionofX
        lastpositionofY=currentpositionofY
}
