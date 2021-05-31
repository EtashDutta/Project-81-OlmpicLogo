canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="skyblue"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=5
ctx.arc(200,200,60,0,2*Math.PI)
ctx.stroke()

color="black"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=5
ctx.arc(300,200,60,0,2*Math.PI)
ctx.stroke()

color="red"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=5
ctx.arc(400,200,60,0,2*Math.PI)
ctx.stroke()

color="yellow"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=5
ctx.arc(250,280,60,0,2*Math.PI)
ctx.stroke()

color="limegreen"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=5
ctx.arc(350,280,60,0,2*Math.PI)
ctx.stroke()

